
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { FileText, BarChart, Upload } from 'lucide-react';
import TrafficReportGenerator from '@/components/TrafficReportGenerator';

const OfflinePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Offline Mode</h1>
      <p className="text-cyber-text mb-8">
        Analyze previously captured network traffic and generate detailed reports
      </p>
      
      <Tabs defaultValue="analysis" className="space-y-6">
        <TabsList className="bg-cyber-dark border border-cyber-muted">
          <TabsTrigger value="analysis" className="data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark">
            <BarChart className="mr-2 h-4 w-4" />
            Traffic Analysis
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark">
            <FileText className="mr-2 h-4 w-4" />
            PDF Reports
          </TabsTrigger>
          <TabsTrigger value="upload" className="data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark">
            <Upload className="mr-2 h-4 w-4" />
            Upload PCAP
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="analysis" className="cyber-card">
          <h2 className="text-xl font-medium text-white mb-4">Traffic Analysis</h2>
          <p className="text-cyber-text mb-6">
            Load and analyze previously captured network traffic files to identify patterns and potential security threats.
          </p>
          
          <div className="bg-cyber-dark p-8 rounded flex items-center justify-center">
            <p className="text-cyber-text">Select a file to analyze or upload a new PCAP file</p>
          </div>
        </TabsContent>
        
        <TabsContent value="reports">
          <TrafficReportGenerator />
        </TabsContent>
        
        <TabsContent value="upload" className="cyber-card">
          <h2 className="text-xl font-medium text-white mb-4">Upload PCAP File</h2>
          <p className="text-cyber-text mb-6">
            Upload PCAP files captured from other sources for analysis and report generation.
          </p>
          
          <div className="border-2 border-dashed border-cyber-muted rounded-lg p-10 flex flex-col items-center justify-center">
            <Upload size={40} className="text-cyber-muted mb-4" />
            <p className="text-cyber-text mb-2">Drag & drop PCAP files here</p>
            <p className="text-xs text-cyber-text mb-4">or</p>
            <button className="bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark px-4 py-2 rounded text-sm">
              Browse Files
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OfflinePage;
