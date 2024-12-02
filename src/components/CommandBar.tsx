import React from 'react';
import { Command, Mic, Brain } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CommandBar = () => {
  const { toast } = useToast();
  const isWatchSize = window.innerWidth < 200; // Apple Watch screen detection

  const handleVoiceCommand = () => {
    toast({
      title: "Voice Command",
      description: "Listening for instructions...",
    });
  };

  const handleAgentAction = () => {
    toast({
      title: "Agency Swarm",
      description: "Activating swarm agents...",
    });
  };

  return (
    <div className={`fixed ${isWatchSize ? 'bottom-2 left-1/2 -translate-x-1/2' : 'bottom-6 left-1/2 -translate-x-1/2'} glass-panel px-4 py-2 flex items-center space-x-4 animate-fade-up`}>
      <button 
        className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors"
        onClick={handleVoiceCommand}
      >
        <Mic className={`${isWatchSize ? 'w-4 h-4' : 'w-5 h-5'} text-accent`} />
      </button>
      <button 
        className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors"
        onClick={handleAgentAction}
      >
        <Brain className={`${isWatchSize ? 'w-4 h-4' : 'w-5 h-5'} text-secondary`} />
      </button>
    </div>
  );
};

export default CommandBar;