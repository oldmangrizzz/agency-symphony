import React from 'react';
import { Command, Zap, Settings } from 'lucide-react';

const CommandBar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-panel px-6 py-3 flex items-center space-x-6 animate-fade-up">
      <button className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors">
        <Command className="w-5 h-5 text-accent" />
      </button>
      <button className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors">
        <Zap className="w-5 h-5 text-secondary" />
      </button>
      <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
        <Settings className="w-5 h-5 text-muted-foreground" />
      </button>
    </div>
  );
};

export default CommandBar;