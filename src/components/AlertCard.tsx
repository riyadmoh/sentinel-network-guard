
import React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface AlertCardProps {
  title: string;
  description: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  className?: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ 
  title, 
  description, 
  timestamp, 
  severity, 
  className 
}) => {
  const getSeverityColor = () => {
    switch (severity) {
      case 'low':
        return 'border-l-cyber-accent';
      case 'medium':
        return 'border-l-cyber-warning';
      case 'high':
        return 'border-l-orange-500';
      case 'critical':
        return 'border-l-cyber-danger';
      default:
        return 'border-l-cyber-muted';
    }
  };

  const getSeverityBadge = () => {
    switch (severity) {
      case 'low':
        return 'bg-cyber-accent/20 text-cyber-accent';
      case 'medium':
        return 'bg-cyber-warning/20 text-cyber-warning';
      case 'high':
        return 'bg-orange-500/20 text-orange-500';
      case 'critical':
        return 'bg-cyber-danger/20 text-cyber-danger';
      default:
        return 'bg-cyber-muted/20 text-cyber-muted';
    }
  };

  return (
    <div className={cn(
      "cyber-card border-l-4 flex items-start p-4",
      getSeverityColor(),
      className
    )}>
      <AlertCircle className="w-5 h-5 text-cyber-muted mt-0.5 mr-3 flex-shrink-0" />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div className="font-medium text-white">{title}</div>
          <span className={cn("text-xs px-2 py-1 rounded", getSeverityBadge())}>
            {severity}
          </span>
        </div>
        <p className="text-sm text-cyber-text mt-1">{description}</p>
        <div className="text-xs text-cyber-muted mt-2">{timestamp}</div>
      </div>
    </div>
  );
};

export default AlertCard;
