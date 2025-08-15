import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { authRateLimiter, validateEmail, validatePasswordStrength } from '@/lib/security';
import { securityLogger } from '@/lib/securityLogger';
import { useToast } from '@/hooks/use-toast';
import { useSessionManager } from '@/hooks/useSessionManager';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

interface SignUpData {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface SignInData {
  email: string;
  password: string;
}

export const useSecureAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
  });
  const { toast } = useToast();
  
  // Initialize session manager for automatic timeout handling
  useSessionManager(authState.session);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setAuthState({
          user: session?.user ?? null,
          session,
          loading: false,
        });

        // Log security events with enhanced monitoring
        if (event === 'SIGNED_IN' && session?.user) {
          securityLogger.logAuthSuccess(session.user.id, session.user.email || 'unknown');
        } else if (event === 'SIGNED_OUT') {
          // Session cleanup is handled by useSessionManager
        } else if (event === 'TOKEN_REFRESHED') {
          // Token refresh is normal, no logging needed
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState({
        user: session?.user ?? null,
        session,
        loading: false,
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async ({ email, password, confirmPassword }: SignUpData) => {
    try {
      // Validate email
      if (!validateEmail(email)) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address",
          variant: "destructive",
        });
        return { error: new Error('Invalid email format') };
      }

      // Validate password confirmation
      if (confirmPassword && password !== confirmPassword) {
        toast({
          title: "Passwords don't match",
          description: "Please ensure both passwords are identical",
          variant: "destructive",
        });
        return { error: new Error('Passwords do not match') };
      }

      // Validate password strength
      const passwordValidation = validatePasswordStrength(password);
      if (!passwordValidation.isValid) {
        toast({
          title: "Weak password",
          description: passwordValidation.errors.join('. '),
          variant: "destructive",
        });
        return { error: new Error('Password does not meet security requirements') };
      }

      // Check rate limiting
      if (authRateLimiter.isBlocked(email)) {
        securityLogger.logAuthBlocked(email, 5); // Assuming 5 attempts threshold
        toast({
          title: "Too many attempts",
          description: "Please wait before trying again",
          variant: "destructive",
        });
        return { error: new Error('Rate limit exceeded') };
      }

      const redirectUrl = `${window.location.origin}/`;
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
        },
      });

      if (error) {
        authRateLimiter.recordAttempt(email);
        securityLogger.logAuthFailure(email, `Sign up failed: ${error.message}`);
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      // Reset rate limiter on success
      authRateLimiter.reset(email);

      toast({
        title: "Account created",
        description: "Please check your email to verify your account",
      });

      return { data, error: null };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      toast({
        title: "Sign up failed",
        description: errorMessage,
        variant: "destructive",
      });
      return { error: new Error(errorMessage) };
    }
  };

  const signIn = async ({ email, password }: SignInData) => {
    try {
      // Validate email
      if (!validateEmail(email)) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address",
          variant: "destructive",
        });
        return { error: new Error('Invalid email format') };
      }

      // Check rate limiting
      if (authRateLimiter.isBlocked(email)) {
        securityLogger.logAuthBlocked(email, 5); // Assuming 5 attempts threshold
        toast({
          title: "Account temporarily locked",
          description: "Too many failed attempts. Please try again later",
          variant: "destructive",
        });
        return { error: new Error('Account locked due to multiple failed attempts') };
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        authRateLimiter.recordAttempt(email);
        securityLogger.logAuthFailure(email, `Sign in failed: ${error.message}`);
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      // Reset rate limiter on success
      authRateLimiter.reset(email);

      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully",
      });

      return { data, error: null };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      toast({
        title: "Sign in failed",
        description: errorMessage,
        variant: "destructive",
      });
      return { error: new Error(errorMessage) };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast({
          title: "Sign out failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Signed out",
        description: "You have been signed out successfully",
      });

      return { error: null };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      toast({
        title: "Sign out failed",
        description: errorMessage,
        variant: "destructive",
      });
      return { error: new Error(errorMessage) };
    }
  };

  return {
    user: authState.user,
    session: authState.session,
    loading: authState.loading,
    signUp,
    signIn,
    signOut,
  };
};