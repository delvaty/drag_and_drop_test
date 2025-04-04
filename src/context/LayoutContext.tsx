
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PanelPosition {
  id: string;
  position: { x: number; y: number };
}

interface PanelLayout {
  positions: PanelPosition[];
  isVertical: Record<string, boolean>;
  zIndex: Record<string, number>;
}

interface LayoutContextType {
  layout: PanelLayout;
  updatePanelPosition: (id: string, position: { x: number; y: number }) => void;
  togglePanelOrientation: (id: string) => void;
  bringToFront: (id: string) => void;
  resetLayout: () => void;
  savePanelsState: () => void;
  loadPanelsState: () => void;
}

const defaultLayout: PanelLayout = {
  positions: [],
  isVertical: {
    'top-bar': false,
    'bottom-bar': false,
  },
  zIndex: {}
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [layout, setLayout] = useState<PanelLayout>(defaultLayout);
  const [nextZIndex, setNextZIndex] = useState(100);

  const updatePanelPosition = (id: string, position: { x: number; y: number }) => {
    setLayout(prevLayout => {
      const existingIndex = prevLayout.positions.findIndex(p => p.id === id);

      if (existingIndex >= 0) {
        const newPositions = [...prevLayout.positions];
        newPositions[existingIndex] = { id, position };
        return { ...prevLayout, positions: newPositions };
      }

      return {
        ...prevLayout,
        positions: [...prevLayout.positions, { id, position }],
      };
    });
  };

  const togglePanelOrientation = (id: string) => {
    setLayout(prevLayout => ({
      ...prevLayout,
      isVertical: {
        ...prevLayout.isVertical,
        [id]: !prevLayout.isVertical[id],
      },
    }));
  };

  const bringToFront = (id: string) => {
    setLayout(prevLayout => {
      const newZIndex = { ...prevLayout.zIndex, [id]: nextZIndex };
      setNextZIndex(nextZIndex + 1);
      return { ...prevLayout, zIndex: newZIndex };
    });
  };

  const resetLayout = () => {
    setLayout(defaultLayout);
    setNextZIndex(100);
  };

  const savePanelsState = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tradingPlatformLayout', JSON.stringify(layout));
    }
  };

  const loadPanelsState = () => {
    if (typeof window !== 'undefined') {
      const savedLayout = localStorage.getItem('tradingPlatformLayout');
      if (savedLayout) {
        try {
          setLayout(JSON.parse(savedLayout));
        } catch (error) {
          console.error('Failed to load saved layout', error);
        }
      }
    }
  };

  return (
    <LayoutContext.Provider 
      value={{ 
        layout, 
        updatePanelPosition, 
        togglePanelOrientation,
        bringToFront,
        resetLayout,
        savePanelsState,
        loadPanelsState
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}