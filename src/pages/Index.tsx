
import React from 'react';
import { Shield } from 'lucide-react';
import DashboardMetrics from '@/components/DashboardMetrics';
import RecentAlerts from '@/components/RecentAlerts';
import LiveMonitor from '@/components/LiveMonitor';
import SystemStatus from '@/components/SystemStatus';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Shield className="mr-2 text-cyber-accent" size={28} />
          Sentinel Network Guard
        </h1>
        <p className="text-cyber-text mt-2">
          Advanced Intrusion Detection System with AI-powered analysis
        </p>
      </div>

      {/* Metrics Overview */}
      <section className="mb-8">
        <DashboardMetrics />
      </section>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side */}
        <div className="lg:col-span-2 space-y-6">
          <RecentAlerts />
          
          {/* Mode selection cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Online Mode Card */}
            <div className="cyber-card hover:border-cyber-accent transition-colors duration-300 cursor-pointer">
              <h3 className="text-white font-medium mb-2">Online Mode</h3>
              <p className="text-cyber-text text-sm mb-4">
                Capture and analyze live network traffic for real-time threat detection
              </p>
              <a 
                href="/online" 
                className="text-cyber-accent text-sm font-medium hover:underline inline-flex items-center"
              >
                Start capture
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Offline Mode Card */}
            <div className="cyber-card hover:border-cyber-accent transition-colors duration-300 cursor-pointer">
              <h3 className="text-white font-medium mb-2">Offline Mode</h3>
              <p className="text-cyber-text text-sm mb-4">
                Apply trained AI models to analyze datasets and detect intrusion patterns
              </p>
              <a 
                href="/offline" 
                className="text-cyber-accent text-sm font-medium hover:underline inline-flex items-center"
              >
                Select model
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Status and Monitoring */}
        <div className="space-y-6">
          <LiveMonitor />
          <SystemStatus />
        </div>
      </div>
    </div>
  );
};

export default Index;
