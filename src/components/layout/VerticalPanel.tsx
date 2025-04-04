
import React from 'react';
import DraggablePanel from './DraggablePanel';

interface VerticalPanelProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
  children: React.ReactNode;
  side: 'left' | 'right';
}

const VerticalPanel: React.FC<VerticalPanelProps> = ({
  id,
  className = '',
  onPositionChange,
  children,
  side,
}) => {
  const sideClass = side === 'left' ? 'left-0' : 'right-0';
  
  return (
    <DraggablePanel
      id={id}
      className={`${sideClass} top-12 bottom-12 w-12 ${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
      isVertical={true}
    >
      <div className="h-full w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </DraggablePanel>
  );
};

export default VerticalPanel;