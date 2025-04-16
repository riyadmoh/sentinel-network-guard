
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'online' | 'offline' | 'warning' | 'danger';

interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  pulseEffect?: boolean;
  className?: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  label, 
  pulseEffect = true,
  className 
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-cyber-success';
      case 'offline':
        return 'bg-cyber-muted';
      case 'warning':
        return 'bg-cyber-warning';
      case 'danger':
        return 'bg-cyber-danger';
      default:
        return 'bg-cyber-muted';
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn(
        "h-2.5 w-2.5 rounded-full mr-2", 
        getStatusColor(),
        pulseEffect && "animate-pulse"
      )}></div>
      {label && <span className="text-sm text-cyber-text">{label}</span>}
    </div>
  );
};

export default StatusIndicator;
