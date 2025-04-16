
import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, FileText, BarChart2, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OfflinePage = () => {
  const [selectedModel, setSelectedModel] = useState('cnn');
  const [selectedDataset, setSelectedDataset] = useState('nslkdd');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<null | {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
    processingTime: number;
    detectedAnomalies: number;
  }>(null);

  // Mock function to start processing
  const startProcessing = () => {
    setIsProcessing(true);
    setResults(null);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      
      // Generate mock results based on selected model and dataset
      setResults({
        accuracy: 0.93 + Math.random() * 0.05,
        precision: 0.89 + Math.random() * 0.08,
        recall: 0.87 + Math.random() * 0.09,
        f1Score: 0.91 + Math.random() * 0.06,
        processingTime: Math.floor(Math.random() * 120) + 30,
        detectedAnomalies: Math.floor(Math.random() * 50) + 10,
      });
    }, 3000);
  };

  const models = [
    { id: 'cnn', name: 'Convolutional Neural Network', description: 'Best for detecting spatial patterns in network traffic' },
    { id: 'gru', name: 'Gated Recurrent Unit', description: 'Optimized for sequence-based anomaly detection' },
    { id: 'mlp', name: 'Multi-Layer Perceptron', description: 'General-purpose neural network with balanced performance' },
  ];

  const datasets = [
    { id: 'nslkdd', name: 'NSL-KDD', records: '148,517', description: 'Refined version of KDD Cup 99 dataset' },
    { id: 'cicids', name: 'CICIDS2017', records: '2,830,743', description: 'Modern intrusion detection benchmark dataset' },
    { id: 'usbw', name: 'USBW-ND-15', records: '94,230', description: 'USB-based network intrusion dataset' },
    { id: 'custom', name: 'Custom Dataset', records: 'Variable', description: 'Your uploaded or captured network data' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Offline Mode</h1>
      <p className="text-cyber-text mb-8">
        Apply AI models to analyze datasets and detect intrusion patterns
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Model Selection */}
          <div className="cyber-card">
            <div className="flex items-center mb-4">
              <Brain className="text-cyber-accent mr-2" size={20} />
              <h2 className="text-xl font-medium text-white">Select Model</h2>
            </div>
            
            <div className="space-y-3">
              {models.map(model => (
                <div 
                  key={model.id}
                  className={`flex items-center p-3 rounded border cursor-pointer transition-colors ${
                    selectedModel === model.id 
                      ? "bg-cyber-dark border-cyber-accent" 
                      : "bg-cyber-dark/50 border-transparent hover:border-cyber-accent/30"
                  }`}
                  onClick={() => setSelectedModel(model.id)}
                >
                  <div className={`h-4 w-4 rounded-full mr-3 flex items-center justify-center ${
                    selectedModel === model.id ? "bg-cyber-accent" : "bg-cyber-muted"
                  }`}>
                    {selectedModel === model.id && (
                      <div className="h-2 w-2 rounded-full bg-cyber-dark"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{model.name}</h3>
                    <p className="text-cyber-text text-sm mt-1">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dataset Selection */}
          <div className="cyber-card">
            <div className="flex items-center mb-4">
              <Database className="text-cyber-accent mr-2" size={20} />
              <h2 className="text-xl font-medium text-white">Select Dataset</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {datasets.map(dataset => (
                <div 
                  key={dataset.id}
                  className={`flex items-start p-3 rounded border cursor-pointer transition-colors ${
                    selectedDataset === dataset.id 
                      ? "bg-cyber-dark border-cyber-accent" 
                      : "bg-cyber-dark/50 border-transparent hover:border-cyber-accent/30"
                  }`}
                  onClick={() => setSelectedDataset(dataset.id)}
                >
                  <div className={`h-4 w-4 rounded-full mt-1 mr-3 flex-shrink-0 ${
                    selectedDataset === dataset.id ? "bg-cyber-accent" : "bg-cyber-muted"
                  }`}>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{dataset.name}</h3>
                    <p className="text-cyber-text text-xs mt-1">{dataset.description}</p>
                    <div className="flex items-center mt-2 text-xs text-cyber-muted">
                      <FileText size={12} className="mr-1" />
                      {dataset.records} records
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-cyber-muted/20">
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Upload Custom Dataset
              </Button>
            </div>
          </div>
          
          {/* Action Controls */}
          <div className="flex justify-end space-x-3">
            <Button variant="outline">
              Reset
            </Button>
            <Button 
              onClick={startProcessing} 
              disabled={isProcessing}
              className="bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-cyber-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>Start Analysis</>
              )}
            </Button>
          </div>
        </div>
        
        {/* Results Panel */}
        <div className="lg:col-span-1">
          <div className="cyber-card h-full">
            <h2 className="text-xl font-medium text-white mb-4">Results</h2>
            
            {!results && !isProcessing && (
              <div className="h-64 flex items-center justify-center text-center p-4">
                <div className="text-cyber-muted">
                  <BarChart2 size={48} className="mx-auto mb-3 opacity-50" />
                  <p>Select a model and dataset, then start the analysis to see results</p>
                </div>
              </div>
            )}
            
            {isProcessing && (
              <div className="h-64 flex items-center justify-center text-center p-4">
                <div className="text-cyber-accent">
                  <div className="w-12 h-12 border-4 border-cyber-accent/30 border-t-cyber-accent rounded-full animate-spin mx-auto mb-4"></div>
                  <p>Analyzing data with {selectedModel.toUpperCase()} model...</p>
                </div>
              </div>
            )}
            
            {results && (
              <div>
                <Tabs defaultValue="metrics">
                  <TabsList className="bg-cyber-dark/50 mb-6">
                    <TabsTrigger value="metrics" className="data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-accent">
                      Metrics
                    </TabsTrigger>
                    <TabsTrigger value="confusion" className="data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-accent">
                      Confusion Matrix
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="metrics" className="mt-0">
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-cyber-text">Accuracy</span>
                          <span className="text-white">{(results.accuracy * 100).toFixed(2)}%</span>
                        </div>
                        <div className="w-full bg-cyber-dark rounded-full h-2">
                          <div 
                            className="bg-cyber-success h-2 rounded-full" 
                            style={{ width: `${results.accuracy * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-cyber-text">Precision</span>
                          <span className="text-white">{(results.precision * 100).toFixed(2)}%</span>
                        </div>
                        <div className="w-full bg-cyber-dark rounded-full h-2">
                          <div 
                            className="bg-cyber-success h-2 rounded-full" 
                            style={{ width: `${results.precision * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-cyber-text">Recall</span>
                          <span className="text-white">{(results.recall * 100).toFixed(2)}%</span>
                        </div>
                        <div className="w-full bg-cyber-dark rounded-full h-2">
                          <div 
                            className="bg-cyber-success h-2 rounded-full" 
                            style={{ width: `${results.recall * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-cyber-text">F1 Score</span>
                          <span className="text-white">{(results.f1Score * 100).toFixed(2)}%</span>
                        </div>
                        <div className="w-full bg-cyber-dark rounded-full h-2">
                          <div 
                            className="bg-cyber-success h-2 rounded-full" 
                            style={{ width: `${results.f1Score * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-cyber-muted/20 grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center p-3 rounded bg-cyber-dark/50">
                        <span className="text-xs text-cyber-text mb-1">Processing Time</span>
                        <span className="text-cyber-accent font-medium">{results.processingTime} sec</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 rounded bg-cyber-dark/50">
                        <span className="text-xs text-cyber-text mb-1">Anomalies</span>
                        <span className="text-cyber-danger font-medium">{results.detectedAnomalies}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex space-x-2">
                      {results.detectedAnomalies > 0 ? (
                        <div className="flex items-center text-xs bg-cyber-danger/20 text-cyber-danger px-2 py-1 rounded-full">
                          <AlertTriangle size={12} className="mr-1" />
                          Intrusions Detected
                        </div>
                      ) : (
                        <div className="flex items-center text-xs bg-cyber-success/20 text-cyber-success px-2 py-1 rounded-full">
                          <CheckCircle size={12} className="mr-1" />
                          No Intrusions Detected
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="confusion" className="mt-0">
                    <div className="bg-cyber-dark rounded-md p-3">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-cyber-muted text-xs">
                            <th className="p-2"></th>
                            <th className="p-2 text-center">Predicted Normal</th>
                            <th className="p-2 text-center">Predicted Attack</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 text-cyber-muted text-xs">Actual Normal</td>
                            <td className="p-2 text-center bg-cyber-success/20 text-white font-medium">92%</td>
                            <td className="p-2 text-center bg-cyber-danger/20 text-white">8%</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-cyber-muted text-xs">Actual Attack</td>
                            <td className="p-2 text-center bg-cyber-danger/20 text-white">11%</td>
                            <td className="p-2 text-center bg-cyber-success/20 text-white font-medium">89%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-cyber-text">True Positive Rate</span>
                        <span className="text-white">89%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-cyber-text">True Negative Rate</span>
                        <span className="text-white">92%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-cyber-text">False Positive Rate</span>
                        <span className="text-cyber-danger">8%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-cyber-text">False Negative Rate</span>
                        <span className="text-cyber-danger">11%</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6">
                  <Button className="w-full">
                    Generate Detailed Report
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
