interface SecurityEvent {
  type: 'AUTH_SUCCESS' | 'AUTH_FAILURE' | 'AUTH_BLOCKED' | 'SESSION_EXPIRED' | 'SUSPICIOUS_ACTIVITY';
  userId?: string;
  email?: string;
  ip?: string;
  userAgent?: string;
  timestamp: string;
  details?: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

class SecurityLogger {
  private events: SecurityEvent[] = [];
  private maxEvents = 1000; // Keep last 1000 events in memory

  private getClientInfo() {
    return {
      ip: 'unknown', // In production, this would come from server-side
      userAgent: navigator.userAgent,
    };
  }

  private logEvent(event: SecurityEvent) {
    // Add to memory store
    this.events.push(event);
    
    // Keep only last maxEvents
    if (this.events.length > this.maxEvents) {
      this.events.shift();
    }

    // In production, this would send to a logging service
    const logLevel = event.severity === 'CRITICAL' ? 'error' : 
                    event.severity === 'HIGH' ? 'warn' : 'info';
    
    console[logLevel]('[SECURITY]', {
      type: event.type,
      severity: event.severity,
      timestamp: event.timestamp,
      userId: event.userId,
      email: event.email?.replace(/(.{2}).*(@.*)/, '$1***$2'), // Mask email for privacy
      details: event.details,
    });
  }

  logAuthSuccess(userId: string, email: string) {
    const clientInfo = this.getClientInfo();
    this.logEvent({
      type: 'AUTH_SUCCESS',
      userId,
      email,
      ip: clientInfo.ip,
      userAgent: clientInfo.userAgent,
      timestamp: new Date().toISOString(),
      severity: 'LOW',
      details: 'User authentication successful',
    });
  }

  logAuthFailure(email: string, reason: string) {
    const clientInfo = this.getClientInfo();
    this.logEvent({
      type: 'AUTH_FAILURE',
      email,
      ip: clientInfo.ip,
      userAgent: clientInfo.userAgent,
      timestamp: new Date().toISOString(),
      severity: 'MEDIUM',
      details: `Authentication failed: ${reason}`,
    });
  }

  logAuthBlocked(email: string, attempts: number) {
    const clientInfo = this.getClientInfo();
    this.logEvent({
      type: 'AUTH_BLOCKED',
      email,
      ip: clientInfo.ip,
      userAgent: clientInfo.userAgent,
      timestamp: new Date().toISOString(),
      severity: 'HIGH',
      details: `Authentication blocked after ${attempts} failed attempts`,
    });
  }

  logSessionExpired(userId: string) {
    this.logEvent({
      type: 'SESSION_EXPIRED',
      userId,
      timestamp: new Date().toISOString(),
      severity: 'LOW',
      details: 'User session expired due to inactivity',
    });
  }

  logSuspiciousActivity(details: string, userId?: string, email?: string) {
    const clientInfo = this.getClientInfo();
    this.logEvent({
      type: 'SUSPICIOUS_ACTIVITY',
      userId,
      email,
      ip: clientInfo.ip,
      userAgent: clientInfo.userAgent,
      timestamp: new Date().toISOString(),
      severity: 'CRITICAL',
      details,
    });
  }

  getRecentEvents(count: number = 50): SecurityEvent[] {
    return this.events.slice(-count).reverse();
  }

  getEventsByType(type: SecurityEvent['type']): SecurityEvent[] {
    return this.events.filter(event => event.type === type);
  }

  getEventsBySeverity(severity: SecurityEvent['severity']): SecurityEvent[] {
    return this.events.filter(event => event.severity === severity);
  }
}

export const securityLogger = new SecurityLogger();
export type { SecurityEvent };
