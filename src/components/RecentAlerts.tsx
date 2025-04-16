
import React from 'react';
import AlertCard from './AlertCard';

const RecentAlerts = () => {
  const alerts = [
    {
      id: 1,
      title: "Potential Port Scanning Detected",
      description: "Multiple connection attempts on various ports from IP 192.168.1.42",
      timestamp: "Today, 14:23",
      severity: "medium" as const
    },
    {
      id: 2,
      title: "Suspicious Authentication Failure",
      description: "Multiple failed authentication attempts for user 'admin'",
      timestamp: "Today, 13:05",
      severity: "high" as const
    },
    {
      id: 3,
      title: "Unusual Network Traffic",
      description: "High volume of outbound traffic to unrecognized domain",
      timestamp: "Today, 10:17",
      severity: "critical" as const
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium text-white">Recent Alerts</h3>
      {alerts.map((alert) => (
        <AlertCard
          key={alert.id}
          title={alert.title}
          description={alert.description}
          timestamp={alert.timestamp}
          severity={alert.severity}
        />
      ))}
    </div>
  );
};

export default RecentAlerts;
