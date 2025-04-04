// src/components/layout/PanelContainer.tsx
import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

interface PanelPosition {
  id: string;
  position: { x: number; y: number };
}

interface PanelContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PanelContainer: React.FC<PanelContainerProps> = ({ children, className = '' }) => {
  const [panelPositions, setPanelPositions] = useState<PanelPosition[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    
    setPanelPositions(prevPositions => {
      const existingPanelIndex = prevPositions.findIndex(p => p.id === active.id);
      
      if (existingPanelIndex >= 0) {
        const updatedPositions = [...prevPositions];
        const currentPosition = updatedPositions[existingPanelIndex].position;
        
        updatedPositions[existingPanelIndex] = {
          ...updatedPositions[existingPanelIndex],
          position: {
            x: currentPosition.x + delta.x,
            y: currentPosition.y + delta.y,
          },
        };
        
        return updatedPositions;
      }
      
      return [
        ...prevPositions,
        {
          id: active.id as string,
          position: { x: delta.x, y: delta.y },
        },
      ];
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={`relative w-full h-full ${className}`}>
        {children}
      </div>
    </DndContext>
  );
};

export default PanelContainer;