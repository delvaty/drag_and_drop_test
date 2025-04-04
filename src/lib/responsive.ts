
import { useEffect, useState } from 'react';

export enum ScreenSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = '2xl',
}

const breakpoints = {
  [ScreenSize.SM]: 640,
  [ScreenSize.MD]: 768,
  [ScreenSize.LG]: 1024,
  [ScreenSize.XL]: 1280,
  [ScreenSize.XXL]: 1536,
};

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < breakpoints[ScreenSize.SM]) {
        setScreenSize(null); // xs
      } else if (width < breakpoints[ScreenSize.MD]) {
        setScreenSize(ScreenSize.SM);
      } else if (width < breakpoints[ScreenSize.LG]) {
        setScreenSize(ScreenSize.MD);
      } else if (width < breakpoints[ScreenSize.XL]) {
        setScreenSize(ScreenSize.LG);
      } else if (width < breakpoints[ScreenSize.XXL]) {
        setScreenSize(ScreenSize.XL);
      } else {
        setScreenSize(ScreenSize.XXL);
      }
    };

    
    handleResize();
    
    
    window.addEventListener('resize', handleResize);
    
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    screenSize,
    isMobile: screenSize === null || screenSize === ScreenSize.SM,
    isTablet: screenSize === ScreenSize.MD,
    isDesktop: screenSize === ScreenSize.LG || screenSize === ScreenSize.XL || screenSize === ScreenSize.XXL,
  };
}

export function getDefaultLayout(screenSize: ScreenSize | null) {
  if (screenSize === null || screenSize === ScreenSize.SM) {
    return 'mobile';
  } else if (screenSize === ScreenSize.MD) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}