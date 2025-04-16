
import React from 'react';
import { AlertOctagon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-dark px-6 py-8">
      <div className="cyber-card text-center max-w-md mx-auto">
        <div className="mb-6">
          <AlertOctagon className="h-16 w-16 text-cyber-accent mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <h2 className="text-xl font-medium text-white mb-4">Access Denied</h2>
        <p className="text-cyber-text mb-6">
          The requested resource could not be found. Please check the URL or return to the dashboard.
        </p>
        <Button asChild className="bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark">
          <Link to="/">Return to Dashboard</Link>
        </Button>
        
        <div className="mt-8 pt-6 border-t border-cyber-muted/20 text-xs text-cyber-muted">
          <div className="font-mono mb-2">Error Code: 404_ACCESS_RESTRICTED</div>
          <div>If you believe this is an error, please contact your system administrator.</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
