
import React from 'react';
import { Activity } from 'lucide-react';
import StatusIndicator from './StatusIndicator';

const LiveMonitor = () => {
  return (
    <div className="cyber-card h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-white flex items-center">
          <Activity size={18} className="text-cyber-accent mr-2" /> 
          Live Network Traffic
        </h3>
        <StatusIndicator status="online" label="Active" />
      </div>
      
      <div className="relative h-48 cyberscan-effect bg-cyber-dark rounded-md overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="radar-ping h-3 w-3 mb-2 mx-auto"></div>
            <p className="text-cyber-text text-sm code-font">
              Monitoring traffic...
            </p>
          </div>
        </div>
        
        {/* Animated network lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Network path lines */}
          <path 
            d="M10,20 Q50,50 90,30 T180,40" 
            stroke="#64ffda" 
            strokeWidth="1" 
            fill="none" 
            strokeDasharray="5,5" 
            strokeDashoffset="0"
            filter="url(#glow)"
          >
            <animate 
              attributeName="strokeDashoffset" 
              from="0" 
              to="10" 
              dur="1s" 
              repeatCount="indefinite" 
            />
          </path>
          
          <path 
            d="M30,90 Q70,60 110,80 T170,60" 
            stroke="#64ffda" 
            strokeWidth="1" 
            fill="none" 
            strokeDasharray="5,5" 
            strokeDashoffset="0"
            filter="url(#glow)"
          >
            <animate 
              attributeName="strokeDashoffset" 
              from="10" 
              to="0" 
              dur="1.5s" 
              repeatCount="indefinite" 
            />
          </path>
        </svg>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="p-2 rounded bg-cyber-dark">
          <div className="text-cyber-text mb-1">Packets/sec</div>
          <div className="text-cyber-accent code-font font-medium">1,352</div>
        </div>
        <div className="p-2 rounded bg-cyber-dark">
          <div className="text-cyber-text mb-1">Connections</div>
          <div className="text-cyber-accent code-font font-medium">24</div>
        </div>
        <div className="p-2 rounded bg-cyber-dark">
          <div className="text-cyber-text mb-1">Bandwidth</div>
          <div className="text-cyber-accent code-font font-medium">4.7 MB/s</div>
        </div>
        <div className="p-2 rounded bg-cyber-dark">
          <div className="text-cyber-text mb-1">Anomalies</div>
          <div className="text-cyber-accent code-font font-medium">2</div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitor;
