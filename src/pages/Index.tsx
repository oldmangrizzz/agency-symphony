import React from 'react';
import AgencySwarmPanel from '../components/AgencySwarmPanel';
import CommandBar from '../components/CommandBar';
import AudioInterface from '../components/AudioInterface';
import { useMediaQuery } from '@/hooks/use-mobile';

const Index = () => {
  const isWatchSize = window.innerWidth < 200;

  return (
    <div className="min-h-screen bg-primary text-primary-foreground p-2">
      <div className="container mx-auto space-y-4">
        {/* Header - Hide on watch */}
        {!isWatchSize && (
          <header className="glass-panel p-4 animate-fade-down">
            <h1 className="text-xl font-bold text-accent">Agency Swarm</h1>
            <p className="text-sm text-muted-foreground">Voice Control Active</p>
          </header>
        )}

        {/* Main Content - Simplified for watch */}
        <main className={`grid grid-cols-1 gap-4 ${isWatchSize ? 'mt-2' : 'md:grid-cols-2'}`}>
          {!isWatchSize && <AgencySwarmPanel />}
          <AudioInterface />
        </main>

        {/* Command Bar - Optimized for watch */}
        <CommandBar />
      </div>
    </div>
  );
};

export default Index;