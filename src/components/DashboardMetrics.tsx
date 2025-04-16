
import React from 'react';
import StatCard from './StatCard';
import { Shield, AlertTriangle, Zap, Clock } from 'lucide-react';

const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="Threat Detection Rate" 
        value="99.7%" 
        icon={<Shield size={20} />} 
        change={{ value: "1.2%", isPositive: true }}
      />
      <StatCard 
        title="Active Alerts" 
        value="3" 
        icon={<AlertTriangle size={20} />} 
        change={{ value: "2", isPositive: false }}
      />
      <StatCard 
        title="System Performance" 
        value="94.1%" 
        icon={<Zap size={20} />}
      />
      <StatCard 
        title="Last Scan" 
        value="2m ago" 
        icon={<Clock size={20} />}
      />
    </div>
  );
};

export default DashboardMetrics;
