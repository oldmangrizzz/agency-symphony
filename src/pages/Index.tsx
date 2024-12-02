import React from 'react';
import AgencySwarmPanel from '../components/AgencySwarmPanel';
import CommandBar from '../components/CommandBar';
import AudioInterface from '../components/AudioInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground p-4">
      <div className="container mx-auto space-y-6">
        {/* Header */}
        <header className="glass-panel p-6 animate-fade-down">
          <h1 className="text-3xl font-bold text-accent">Agency Swarm HUD</h1>
          <p className="text-muted-foreground">Genesis Agent Creation Interface</p>
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AgencySwarmPanel />
          <AudioInterface />
        </main>

        {/* Command Bar */}
        <CommandBar />
      </div>
    </div>
  );
};

export default Index;