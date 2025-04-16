
import React from 'react';
import { AlertTriangle, Bell, Clock, Search, Filter, Download, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AlertsPage = () => {
  const alerts = [
    {
      id: 1,
      type: "Port Scanning",
      source: "192.168.1.42",
      destination: "192.168.1.1",
      timestamp: "2023-04-16 14:23:15",
      severity: "medium",
      status: "new"
    },
    {
      id: 2,
      type: "Brute Force Attack",
      source: "203.0.113.45",
      destination: "192.168.1.10",
      timestamp: "2023-04-16 13:05:22",
      severity: "high",
      status: "new"
    },
    {
      id: 3,
      type: "Suspicious Traffic",
      source: "192.168.1.15",
      destination: "8.8.8.8",
      timestamp: "2023-04-16 10:17:45",
      severity: "critical",
      status: "new"
    },
    {
      id: 4,
      type: "Data Exfiltration",
      source: "192.168.1.22",
      destination: "198.51.100.67",
      timestamp: "2023-04-15 22:34:12",
      severity: "high",
      status: "acknowledged"
    },
    {
      id: 5,
      type: "Malware Communication",
      source: "192.168.1.30",
      destination: "203.0.113.100",
      timestamp: "2023-04-15 19:45:33",
      severity: "critical",
      status: "acknowledged"
    },
    {
      id: 6,
      type: "Protocol Violation",
      source: "192.168.1.5",
      destination: "192.168.1.1",
      timestamp: "2023-04-15 15:12:48",
      severity: "low",
      status: "resolved"
    }
  ];

  const getSeverityBadge = (severity: string) => {
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
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400';
      case 'acknowledged':
        return 'bg-purple-500/20 text-purple-400';
      case 'resolved':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-cyber-muted/20 text-cyber-muted';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <AlertTriangle className="text-cyber-accent mr-2" size={24} />
            Security Alerts
          </h1>
          <p className="text-cyber-text">
            View and manage detected network intrusion alerts
          </p>
        </div>
        <div>
          <Button className="bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark">
            <Bell className="mr-2 h-4 w-4" />
            Configure Notifications
          </Button>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="cyber-card mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cyber-muted" />
            <Input 
              type="text" 
              placeholder="Search alerts..." 
              className="pl-9 bg-cyber-dark border-cyber-muted text-white"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-3 w-3" />
              Filter
            </Button>
            
            <select className="bg-cyber-dark border border-cyber-muted rounded py-1 px-2 text-white text-sm">
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            
            <select className="bg-cyber-dark border border-cyber-muted rounded py-1 px-2 text-white text-sm">
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="acknowledged">Acknowledged</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Alerts Table */}
      <div className="cyber-card overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-white">Alert History</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-3 w-3" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="text-cyber-danger border-cyber-danger/30 hover:bg-cyber-danger/10">
              <Trash2 className="mr-2 h-3 w-3" />
              Clear
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-cyber-dark/50 text-cyber-text text-left text-xs">
                <th className="px-4 py-2 font-medium">Alert Type</th>
                <th className="px-4 py-2 font-medium">Source</th>
                <th className="px-4 py-2 font-medium">Destination</th>
                <th className="px-4 py-2 font-medium">Timestamp</th>
                <th className="px-4 py-2 font-medium">Severity</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyber-dark/30">
              {alerts.map(alert => (
                <tr key={alert.id} className="hover:bg-cyber-dark/30 transition-colors">
                  <td className="px-4 py-3 text-white">
                    <div className="flex items-center">
                      <AlertTriangle 
                        size={14} 
                        className={
                          alert.severity === 'critical' ? 'text-cyber-danger mr-2' :
                          alert.severity === 'high' ? 'text-orange-500 mr-2' :
                          alert.severity === 'medium' ? 'text-cyber-warning mr-2' : 'text-cyber-accent mr-2'
                        } 
                      />
                      {alert.type}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-cyber-text font-mono text-sm">{alert.source}</td>
                  <td className="px-4 py-3 text-cyber-text font-mono text-sm">{alert.destination}</td>
                  <td className="px-4 py-3 text-cyber-text text-sm flex items-center">
                    <Clock size={12} className="mr-1.5 text-cyber-muted" />
                    {alert.timestamp}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded ${getSeverityBadge(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusBadge(alert.status)}`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button className="text-cyber-accent hover:text-cyber-accent/70 rounded p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                      <button className="text-cyber-muted hover:text-white rounded p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                      </button>
                      <button className="text-cyber-muted hover:text-white rounded p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-cyber-text">
          <div>Showing 6 of 6 alerts</div>
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 rounded hover:bg-cyber-dark disabled:opacity-50" disabled>
              Previous
            </button>
            <span className="px-2 py-1 bg-cyber-dark rounded">1</span>
            <button className="px-2 py-1 rounded hover:bg-cyber-dark disabled:opacity-50" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
