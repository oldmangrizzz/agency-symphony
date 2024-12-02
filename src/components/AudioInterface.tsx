import React, { useEffect, useState } from 'react';
import { Mic, Speaker, Image, Video } from 'lucide-react';
import { useIosCapabilities } from '@/hooks/useIosCapabilities';
import { useToast } from '@/components/ui/use-toast';

const AudioInterface = () => {
  const { hasMicrophone, hasCamera, requestPermission } = useIosCapabilities();
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();
  
  const handleMicPress = async () => {
    if (!hasMicrophone) {
      const granted = await requestPermission('microphone');
      if (!granted) return;
    }
    
    setIsRecording(!isRecording);
    toast({
      title: isRecording ? "Recording Stopped" : "Recording Started",
      description: isRecording ? "Your audio has been saved" : "Listening for your voice input...",
    });
  };

  const handleCameraPress = async () => {
    if (!hasCamera) {
      const granted = await requestPermission('camera');
      if (!granted) return;
    }
    
    toast({
      title: "Camera Access",
      description: "Camera functionality will be implemented in the next update.",
    });
  };

  return (
    <div className="floating-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-secondary">Communication Hub</h2>
        <div className="flex space-x-2">
          <button 
            className={`p-2 rounded-full transition-colors ${
              isRecording 
                ? 'bg-accent animate-pulse' 
                : 'bg-accent/20 hover:bg-accent/30'
            }`}
            onClick={handleMicPress}
          >
            <Mic className="w-5 h-5 text-accent" />
          </button>
          <button 
            className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors"
            onClick={handleCameraPress}
          >
            <Video className="w-5 h-5 text-secondary" />
          </button>
        </div>
      </div>

      {/* Waveform Visualization */}
      <div className="glass-panel p-4 h-32 flex items-center justify-center">
        <div className="flex items-center space-x-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-accent/50"
              style={{
                height: `${Math.random() * (isRecording ? 100 : 20)}%`,
                transition: 'height 0.2s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Audio Controls */}
      <div className="glass-panel p-4 flex items-center justify-between">
        <Speaker className="w-6 h-6 text-muted-foreground" />
        <div className="w-full mx-4 h-1 bg-muted rounded-full">
          <div className="w-1/3 h-full bg-accent rounded-full" />
        </div>
        <span className="text-sm text-muted-foreground">00:00</span>
      </div>
    </div>
  );
};

export default AudioInterface;