
import React, { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileText, Download, Loader2 } from 'lucide-react';
import StatusIndicator from './StatusIndicator';

// Types for the report interface
interface TrafficReport {
  id: string;
  fileName: string;
  creationDate: string;
  summary: string;
  downloadUrl: string;
}

// Mock data for demonstration purposes
const mockReports: TrafficReport[] = [
  {
    id: '1',
    fileName: 'traffic_analysis_20250415.pdf',
    creationDate: '2025-04-15 14:30',
    summary: 'Network traffic analysis with 2,345 packets captured. 3 potential anomalies detected.',
    downloadUrl: '#',
  },
  {
    id: '2',
    fileName: 'security_scan_20250414.pdf',
    creationDate: '2025-04-14 09:15',
    summary: 'Security scan results. No critical vulnerabilities detected.',
    downloadUrl: '#',
  },
  {
    id: '3',
    fileName: 'traffic_peak_analysis_20250413.pdf',
    creationDate: '2025-04-13 18:45',
    summary: 'Analysis of peak traffic hours. Highest volume between 14:00-16:00.',
    downloadUrl: '#',
  },
];

const TrafficReportGenerator = () => {
  const [reports, setReports] = useState<TrafficReport[]>(mockReports);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  
  // This function would be replaced with actual API call to Django backend
  const generateReport = () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newReport: TrafficReport = {
        id: `${Date.now()}`,
        fileName: `traffic_report_${new Date().toISOString().split('T')[0].replace(/-/g, '')}.pdf`,
        creationDate: new Date().toLocaleString(),
        summary: 'Generated traffic analysis report with captured network data.',
        downloadUrl: '#',
      };
      
      setReports([newReport, ...reports]);
      setIsGenerating(false);
    }, 2000);
  };
  
  // This function would be replaced with actual API call to Django backend
  const downloadReport = (reportId: string) => {
    // In a real implementation, this would trigger the download from the API
    console.log(`Downloading report with ID: ${reportId}`);
    
    // For demonstration, we're simulating the download action
    setSelectedFile(reportId);
    setTimeout(() => setSelectedFile(null), 2000);
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium text-white flex items-center gap-2">
            <FileText size={20} />
            Traffic Report Generation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button 
                onClick={generateReport} 
                disabled={isGenerating}
                className="bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark"
              >
                {isGenerating ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Report</>
                ) : (
                  <><FileText className="mr-2 h-4 w-4" /> Generate PDF Report</>
                )}
              </Button>
              <div className="text-sm text-cyber-text">
                {isGenerating ? 'Analyzing traffic data and creating report...' : 'Click to generate a new traffic analysis report'}
              </div>
            </div>
            
            <div className="bg-cyber-dark/50 p-3 rounded">
              <p className="text-sm text-cyber-text mb-2">Reports are generated by analyzing captured network traffic data. The PDF contains detailed insights about traffic patterns, potential security threats, and performance metrics.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium text-white">Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded overflow-hidden border border-cyber-muted">
            <Table>
              <TableHeader className="bg-cyber-dark">
                <TableRow>
                  <TableHead className="text-cyber-text">File Name</TableHead>
                  <TableHead className="text-cyber-text">Created On</TableHead>
                  <TableHead className="text-cyber-text">Summary</TableHead>
                  <TableHead className="text-cyber-text w-[100px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.length > 0 ? (
                  reports.map((report) => (
                    <TableRow key={report.id} className="bg-cyber-dark/50 hover:bg-cyber-dark transition-colors">
                      <TableCell className="text-white font-medium">{report.fileName}</TableCell>
                      <TableCell className="text-cyber-text">{report.creationDate}</TableCell>
                      <TableCell className="text-cyber-text">{report.summary}</TableCell>
                      <TableCell>
                        <Button 
                          onClick={() => downloadReport(report.id)} 
                          size="sm" 
                          variant="outline"
                          className="w-full"
                          disabled={selectedFile === report.id}
                        >
                          {selectedFile === report.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <><Download className="h-4 w-4" /> PDF</>
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-4 text-cyber-text">
                      No reports available. Generate a new report to get started.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-cyber-dark/70 p-4 rounded border border-cyber-muted">
        <h3 className="text-sm font-medium text-white mb-2">Integration with Django Backend</h3>
        <div className="flex items-center mb-3">
          <StatusIndicator status="offline" className="mr-2" />
          <span className="text-cyber-text text-sm">Backend connection status</span>
        </div>
        <p className="text-xs text-cyber-text">
          To fully implement this feature, connect this interface to your Django backend via API endpoints.
          Configure authentication and endpoint URLs in the settings panel.
        </p>
      </div>
    </div>
  );
};

export default TrafficReportGenerator;
