import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface IosCapabilities {
  hasCamera: boolean;
  hasMicrophone: boolean;
  hasMotion: boolean;
  requestPermission: (type: 'camera' | 'microphone' | 'motion') => Promise<boolean>;
}

export const useIosCapabilities = (): IosCapabilities => {
  const [hasCamera, setHasCamera] = useState(false);
  const [hasMicrophone, setHasMicrophone] = useState(false);
  const [hasMotion, setHasMotion] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    checkDeviceCapabilities();
  }, []);

  const checkDeviceCapabilities = async () => {
    // Check if running on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if ('mediaDevices' in navigator) {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        setHasCamera(devices.some(device => device.kind === 'videoinput'));
        setHasMicrophone(devices.some(device => device.kind === 'audioinput'));
      } catch (error) {
        console.error('Error checking media devices:', error);
      }
    }

    // Check motion sensors
    if (isIOS && 'DeviceMotionEvent' in window) {
      setHasMotion(true);
    }
  };

  const requestPermission = async (type: 'camera' | 'microphone' | 'motion'): Promise<boolean> => {
    try {
      switch (type) {
        case 'camera':
          const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoStream.getTracks().forEach(track => track.stop());
          setHasCamera(true);
          return true;

        case 'microphone':
          const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          audioStream.getTracks().forEach(track => track.stop());
          setHasMicrophone(true);
          return true;

        case 'motion':
          if (typeof DeviceMotionEvent.requestPermission === 'function') {
            const permission = await DeviceMotionEvent.requestPermission();
            const granted = permission === 'granted';
            setHasMotion(granted);
            return granted;
          }
          return true;

        default:
          return false;
      }
    } catch (error) {
      console.error(`Error requesting ${type} permission:`, error);
      toast({
        title: "Permission Required",
        description: `Please enable ${type} access in your device settings.`,
        variant: "destructive"
      });
      return false;
    }
  };

  return {
    hasCamera,
    hasMicrophone,
    hasMotion,
    requestPermission
  };
};