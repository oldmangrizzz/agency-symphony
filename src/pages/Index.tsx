import React from 'react';
import AgencySwarmPanel from '../components/AgencySwarmPanel';
import CommandBar from '../components/CommandBar';
import AudioInterface from '../components/AudioInterface';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isWatchSize = window.innerWidth < 200;
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-primary text-primary-foreground p-2">
      <div className="container mx-auto space-y-4">
        {/* Header - Hide on watch */}
        {!isWatchSize && (
          <header className={`glass-panel p-4 animate-fade-down ${isMobile ? 'rounded-xl' : 'rounded-lg'}`}>
            <h1 className="text-xl font-bold text-accent">Agency Swarm</h1>
            <p className="text-sm text-muted-foreground">Voice Control Active</p>
          </header>
        )}

        {/* Main Content - Adaptive Layout */}
        <main className={`grid grid-cols-1 gap-4 ${
          isWatchSize 
            ? 'mt-2' 
            : isMobile 
              ? 'space-y-4'
              : 'md:grid-cols-2'
        }`}>
          {/* Show full interface on phone/desktop, hide on watch */}
          {!isWatchSize && <AgencySwarmPanel />}
          
          {/* Audio interface - adaptive for all devices */}
          <AudioInterface />
        </main>

        {/* Command Bar - Optimized for all devices */}
        <CommandBar />
      </div>
    </div>
  );
};

export default Index;