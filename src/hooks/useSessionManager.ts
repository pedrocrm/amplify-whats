import { useEffect, useRef } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { securityLogger } from '@/lib/securityLogger';
import { useToast } from '@/hooks/use-toast';

interface SessionManagerConfig {
  timeoutMinutes: number; // Session timeout in minutes
  warningMinutes: number; // Show warning before timeout
}

const DEFAULT_CONFIG: SessionManagerConfig = {
  timeoutMinutes: 30, // Reduced from 60 to 30 for enhanced security
  warningMinutes: 5,  // Show warning 5 minutes before timeout
};

export const useSessionManager = (session: Session | null, config: SessionManagerConfig = DEFAULT_CONFIG) => {
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const warningRef = useRef<NodeJS.Timeout>();
  const lastActivityRef = useRef<number>(Date.now());

  const resetTimers = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (warningRef.current) {
      clearTimeout(warningRef.current);
    }
  };

  const updateLastActivity = () => {
    lastActivityRef.current = Date.now();
  };

  const handleSessionTimeout = async () => {
    if (session?.user) {
      securityLogger.logSessionExpired(session.user.id);
      
      await supabase.auth.signOut();
      
      toast({
        title: "Session Expired",
        description: "Your session has expired due to inactivity. Please sign in again.",
        variant: "destructive",
      });
    }
  };

  const showTimeoutWarning = () => {
    toast({
      title: "Session Expiring Soon",
      description: `Your session will expire in ${config.warningMinutes} minutes due to inactivity.`,
      variant: "default",
    });
  };

  const startSessionTimer = () => {
    resetTimers();
    
    if (!session) return;

    const timeoutMs = config.timeoutMinutes * 60 * 1000;
    const warningMs = (config.timeoutMinutes - config.warningMinutes) * 60 * 1000;

    // Set warning timer
    warningRef.current = setTimeout(() => {
      showTimeoutWarning();
    }, warningMs);

    // Set timeout timer
    timeoutRef.current = setTimeout(() => {
      handleSessionTimeout();
    }, timeoutMs);
  };

  const extendSession = () => {
    updateLastActivity();
    startSessionTimer();
  };

  useEffect(() => {
    if (session) {
      startSessionTimer();
      
      // Track user activity
      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
      
      const activityHandler = () => {
        const now = Date.now();
        // Only restart timer if it's been more than 1 minute since last activity
        if (now - lastActivityRef.current > 60000) {
          extendSession();
        }
      };

      events.forEach(event => {
        document.addEventListener(event, activityHandler, true);
      });

      return () => {
        resetTimers();
        events.forEach(event => {
          document.removeEventListener(event, activityHandler, true);
        });
      };
    } else {
      resetTimers();
    }
  }, [session]);

  return {
    extendSession,
    timeRemaining: () => {
      if (!session) return 0;
      const elapsed = Date.now() - lastActivityRef.current;
      const remaining = (config.timeoutMinutes * 60 * 1000) - elapsed;
      return Math.max(0, remaining);
    },
  };
};