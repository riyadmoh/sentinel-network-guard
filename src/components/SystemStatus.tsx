
import React from 'react';
import { Shield, Database, Server } from 'lucide-react';
import StatusIndicator from './StatusIndicator';

const SystemStatus = () => {
  return (
    <div className="cyber-card">
      <h3 className="text-lg font-medium text-white mb-4">System Status</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-2 rounded bg-cyber-dark/50">
          <div className="flex items-center">
            <Shield size={16} className="text-cyber-accent mr-2" />
            <span className="text-sm text-white">NIDS Service</span>
          </div>
          <StatusIndicator status="online" />
        </div>
        
        <div className="flex items-center justify-between p-2 rounded bg-cyber-dark/50">
          <div className="flex items-center">
            <Database size={16} className="text-cyber-accent mr-2" />
            <span className="text-sm text-white">Database Connection</span>
          </div>
          <StatusIndicator status="online" />
        </div>
        
        <div className="flex items-center justify-between p-2 rounded bg-cyber-dark/50">
          <div className="flex items-center">
            <Server size={16} className="text-cyber-accent mr-2" />
            <span className="text-sm text-white">Model Training Service</span>
          </div>
          <StatusIndicator status="warning" />
        </div>
      </div>
      
      <div className="mt-4">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-xs text-cyber-text">System Load</span>
          <span className="text-xs text-cyber-accent">42%</span>
        </div>
        <div className="w-full bg-cyber-dark rounded-full h-1.5">
          <div className="bg-cyber-accent h-1.5 rounded-full w-5/12"></div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-xs text-cyber-text">Memory Usage</span>
          <span className="text-xs text-cyber-accent">76%</span>
        </div>
        <div className="w-full bg-cyber-dark rounded-full h-1.5">
          <div className="bg-cyber-accent h-1.5 rounded-full w-9/12"></div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
