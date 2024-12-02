import AgencySwarmPanel from '../components/AgencySwarmPanel';
import CommandBar from '../components/CommandBar';
import AudioInterface from '../components/AudioInterface';
import { useIsMobile } from '@/hooks/use-mobile';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const isWatchSize = window.innerWidth < 200;
  const isMobile = useIsMobile();

  const handleWebhookSetup = () => {
    toast({
      title: "Webhook Configuration",
      description: "Enter your n8n webhook URL in the settings to enable external actions.",
    });
  };

  return (
    <div className="min-h-screen bg-primary text-primary-foreground p-2">
      <div className="container mx-auto space-y-4">
        {/* Header - Enhanced for desktop, hidden on watch */}
        {!isWatchSize && (
          <header className={`glass-panel p-4 animate-fade-down ${isMobile ? 'rounded-xl' : 'rounded-lg'} flex justify-between items-center`}>
            <div>
              <h1 className="text-xl font-bold text-accent">Agency Swarm</h1>
              <p className="text-sm text-muted-foreground">Voice Control Active</p>
            </div>
            {!isMobile && (
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 text-accent hover:text-accent/80"
                onClick={handleWebhookSetup}
              >
                <ExternalLink size={16} />
                Configure Webhooks
              </Button>
            )}
          </header>
        )}

        {/* Main Content - Adaptive Layout with KDE-style for desktop */}
        <main className={`grid gap-4 ${
          isWatchSize 
            ? 'grid-cols-1 mt-2' 
            : isMobile 
              ? 'grid-cols-1 space-y-4'
              : 'grid-cols-2 auto-rows-min'
        }`}>
          {/* Desktop-only floating panels */}
          {!isWatchSize && !isMobile && (
            <>
              <div className="col-span-2 grid grid-cols-3 gap-4 mb-4">
                <div className="glass-panel p-4 animate-fade-up">
                  <h3 className="text-sm font-medium text-secondary">System Status</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">All systems operational</span>
                  </div>
                </div>
                <div className="glass-panel p-4 animate-fade-up">
                  <h3 className="text-sm font-medium text-secondary">Active Agents</h3>
                  <p className="mt-2 text-2xl font-bold text-accent">3</p>
                </div>
                <div className="glass-panel p-4 animate-fade-up">
                  <h3 className="text-sm font-medium text-secondary">Network Status</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-muted-foreground">Connected to swarm</span>
                  </div>
                </div>
              </div>
            </>
          )}

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