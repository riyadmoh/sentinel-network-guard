
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string | number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, className }) => {
  return (
    <div className={cn("cyber-card", className)}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-cyber-text text-sm font-medium">{title}</p>
        <div className="text-cyber-accent">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold text-white code-font">{value}</h4>
          {change && (
            <p className={`text-xs ${change.isPositive ? 'text-cyber-success' : 'text-cyber-danger'} mt-1 flex items-center`}>
              <span className="mr-1">{change.isPositive ? '↑' : '↓'}</span> 
              {change.value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
