import React from 'react';
import { Plus, Users, Brain, Activity, Network } from 'lucide-react';

const AgencySwarmPanel = () => {
  return (
    <div className="floating-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-secondary">Agency Swarm</h2>
        <button className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors">
          <Plus className="w-5 h-5 text-secondary" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Genesis Agent Card */}
        <div className="glass-panel p-4 animate-fade-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-accent" />
              <div>
                <h3 className="hud-text text-accent">Genesis Agent</h3>
                <p className="text-sm text-muted-foreground">Primary Controller</p>
              </div>
            </div>
            <Activity className="w-4 h-4 text-green-500 animate-pulse" />
          </div>
        </div>

        {/* Swarm Visualization */}
        <div className="glass-panel p-4 h-48 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Network className="w-32 h-32 text-secondary/20 animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Users className="w-12 h-12 text-secondary" />
          </div>
        </div>

        {/* Agent Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-panel p-3">
            <h4 className="text-xs text-muted-foreground">Active Tasks</h4>
            <p className="text-xl font-bold text-accent">3</p>
          </div>
          <div className="glass-panel p-3">
            <h4 className="text-xs text-muted-foreground">Response Time</h4>
            <p className="text-xl font-bold text-accent">0.2s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySwarmPanel;