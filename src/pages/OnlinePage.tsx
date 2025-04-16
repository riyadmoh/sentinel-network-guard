
import React, { useState } from 'react';
import { Play, Pause, Download, RefreshCw, FileJson } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import StatusIndicator from '@/components/StatusIndicator';

const OnlinePage = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [captureTime, setCaptureTime] = useState(0);
  const [packetsCaptured, setPacketsCaptured] = useState(0);
  
  // Mock function to toggle capture state
  const toggleCapture = () => {
    setIsCapturing(!isCapturing);
    
    // Reset stats if starting a new capture
    if (!isCapturing) {
      setCaptureTime(0);
      setPacketsCaptured(0);
    }
  };
  
  // Mock function to increment counter while capturing
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isCapturing) {
      interval = setInterval(() => {
        setCaptureTime(prev => prev + 1);
        setPacketsCaptured(prev => prev + Math.floor(Math.random() * 20) + 5);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isCapturing]);
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Online Mode</h1>
      <p className="text-cyber-text mb-8">
        Capture live network traffic and analyze it for potential threats
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Capture Controls */}
        <div className="lg:col-span-2">
          <div className="cyber-card mb-6">
            <h2 className="text-xl font-medium text-white mb-4">Capture Control</h2>
            
            <div className="flex items-center space-x-4 mb-6">
              <Button 
                onClick={toggleCapture} 
                className={isCapturing ? "bg-cyber-danger hover:bg-cyber-danger/80" : "bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark"}
              >
                {isCapturing ? (
                  <><Pause className="mr-2 h-4 w-4" /> Stop Capture</>
                ) : (
                  <><Play className="mr-2 h-4 w-4" /> Start Capture</>
                )}
              </Button>
              
              <Button variant="outline" disabled={!packetsCaptured}>
                <Download className="mr-2 h-4 w-4" /> Save PCAP
              </Button>
              
              <Button variant="outline" disabled={isCapturing}>
                <RefreshCw className="mr-2 h-4 w-4" /> Reset
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-3 rounded bg-cyber-dark">
                <div className="text-cyber-text text-xs mb-1">Status</div>
                <div className="flex items-center">
                  <StatusIndicator 
                    status={isCapturing ? "online" : "offline"} 
                    className="mr-2"
                  />
                  <span className="text-white font-medium">
                    {isCapturing ? "Capturing" : "Idle"}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded bg-cyber-dark">
                <div className="text-cyber-text text-xs mb-1">Duration</div>
                <div className="text-white font-medium code-font">
                  {formatTime(captureTime)}
                </div>
              </div>
              <div className="p-3 rounded bg-cyber-dark">
                <div className="text-cyber-text text-xs mb-1">Packets</div>
                <div className="text-white font-medium code-font">
                  {packetsCaptured.toLocaleString()}
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-white mb-2">Interface Selection</h3>
              <select className="w-full bg-cyber-dark border border-cyber-muted rounded py-2 px-3 text-white">
                <option value="eth0">eth0 (Ethernet)</option>
                <option value="wlan0">wlan0 (Wi-Fi)</option>
                <option value="lo">lo (Loopback)</option>
              </select>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-white mb-2">Capture Filter</h3>
              <input 
                type="text" 
                className="w-full bg-cyber-dark border border-cyber-muted rounded py-2 px-3 text-white" 
                placeholder="e.g., port 80 or port 443"
              />
              <p className="text-xs text-cyber-text mt-1">
                Enter BPF filter syntax to filter captured packets
              </p>
            </div>
          </div>
          
          <div className="cyber-card">
            <h2 className="text-xl font-medium text-white mb-4">Conversion Settings</h2>
            
            <Alert className="bg-cyber-dark border-cyber-accent/30 mb-4">
              <FileJson className="h-4 w-4 text-cyber-accent" />
              <AlertTitle className="text-white">CICFlowMeter Integration</AlertTitle>
              <AlertDescription className="text-cyber-text">
                Captured packets will be automatically processed using CICFlowMeter to generate flow-based features
              </AlertDescription>
            </Alert>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-white mb-2">Output Format</h3>
              <select className="w-full bg-cyber-dark border border-cyber-muted rounded py-2 px-3 text-white">
                <option value="csv">CSV Format</option>
                <option value="json">JSON Format</option>
              </select>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-white mb-2">Output Location</h3>
              <input 
                type="text" 
                className="w-full bg-cyber-dark border border-cyber-muted rounded py-2 px-3 text-white" 
                value="/tmp/captures/"
                readOnly
              />
            </div>
          </div>
        </div>
        
        {/* Right Column - Feature Mapping */}
        <div className="lg:col-span-1">
          <div className="cyber-card">
            <h2 className="text-xl font-medium text-white mb-4">Feature Mapping</h2>
            <p className="text-cyber-text text-sm mb-4">
              Map captured network features to NSL-KDD compatible format for model compatibility
            </p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 rounded bg-cyber-dark/50">
                <span className="text-sm text-white">Source IP</span>
                <span className="text-sm text-cyber-accent">→ src_host</span>
              </div>
              
              <div className="flex justify-between items-center p-2 rounded bg-cyber-dark/50">
                <span className="text-sm text-white">Destination IP</span>
                <span className="text-sm text-cyber-accent">→ dst_host</span>
              </div>
              
              <div className="flex justify-between items-center p-2 rounded bg-cyber-dark/50">
                <span className="text-sm text-white">Protocol</span>
                <span className="text-sm text-cyber-accent">→ protocol_type</span>
              </div>
              
              <div className="flex justify-between items-center p-2 rounded bg-cyber-dark/50">
                <span className="text-sm text-white">Bytes/s</span>
                <span className="text-sm text-cyber-accent">→ src_bytes</span>
              </div>
              
              <div className="flex justify-between items-center p-2 rounded bg-cyber-dark/50">
                <span className="text-sm text-white">Flow Duration</span>
                <span className="text-sm text-cyber-accent">→ duration</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                Configure Feature Mapping
              </Button>
            </div>
          </div>
          
          <div className="cyber-card mt-6">
            <h2 className="text-xl font-medium text-white mb-4">Real-time Analysis</h2>
            <div className="space-y-3">
              <div className="p-3 rounded bg-cyber-dark">
                <div className="text-cyber-text text-xs mb-1">Detection Status</div>
                <div className="flex items-center">
                  <StatusIndicator 
                    status={isCapturing ? "online" : "offline"} 
                    className="mr-2"
                  />
                  <span className="text-white font-medium">
                    {isCapturing ? "Monitoring" : "Inactive"}
                  </span>
                </div>
              </div>
              
              <div className="p-3 rounded bg-cyber-dark">
                <div className="text-cyber-text text-xs mb-1">Current Model</div>
                <div className="text-white font-medium">CNN Anomaly Detector</div>
              </div>
              
              <div className="p-3 rounded bg-cyber-dark">
                <div className="text-cyber-text text-xs mb-1">Anomalies Detected</div>
                <div className="text-cyber-danger font-medium">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePage;
