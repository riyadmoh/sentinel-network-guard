
import React from 'react';
import { FileText, Download, Calendar, FileSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface TrafficReport {
  id: string;
  fileName: string;
  createdAt: string;
  summary: string;
  downloadUrl: string;
}

// Ces données seront remplacées par les données réelles de l'API
const mockReports: TrafficReport[] = [
  {
    id: '1',
    fileName: 'traffic_report_2025_04_16.pdf',
    createdAt: '2025-04-16 14:30',
    summary: 'Analyse du trafic réseau avec détection des anomalies',
    downloadUrl: '#'
  },
  {
    id: '2',
    fileName: 'network_analysis_2025_04_15.pdf',
    createdAt: '2025-04-15 09:45',
    summary: 'Rapport détaillé des incidents de sécurité',
    downloadUrl: '#'
  }
];

const TrafficReports = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          <FileSearch className="text-cyber-accent" />
          Rapports de Trafic
        </h2>
      </div>

      <div className="rounded-lg border border-cyber-border bg-cyber-dark/50">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom du fichier</TableHead>
              <TableHead>Date de création</TableHead>
              <TableHead>Résumé</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="flex items-center gap-2">
                  <FileText className="text-cyber-accent h-4 w-4" />
                  {report.fileName}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Calendar className="text-cyber-muted h-4 w-4" />
                  {report.createdAt}
                </TableCell>
                <TableCell>{report.summary}</TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full flex items-center gap-2 bg-cyber-dark hover:bg-cyber-accent hover:text-cyber-dark"
                    onClick={() => window.open(report.downloadUrl, '_blank')}
                  >
                    <Download className="h-4 w-4" />
                    PDF
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TrafficReports;
