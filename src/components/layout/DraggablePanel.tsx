// src/components/layout/DraggablePanel.tsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DraggablePanelProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
  borderColor?: string;
  isVertical?: boolean;
}

const DraggablePanel: React.FC<DraggablePanelProps> = ({
  id,
  className = '',
  children,
  defaultPosition = { x: 0, y: 0 },
  onPositionChange,
  borderColor = 'border-red-600',
  isVertical = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);

  return (
    <motion.div
      ref={constraintsRef}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      dragMomentum={false}
      initial={defaultPosition}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(event, info) => {
        setIsDragging(false);
        if (onPositionChange) {
          onPositionChange(id, { x: info.point.x, y: info.point.y });
        }
      }}
      className={`
        absolute rounded-md border-2 ${borderColor} bg-black bg-opacity-80
        ${isVertical ? 'h-full flex flex-col' : 'w-full'}
        ${isDragging ? 'z-50 cursor-grabbing' : 'cursor-grab'}
        ${className}
      `}
    >
      <div className="drag-handle absolute top-0 right-0 w-4 h-4 cursor-move bg-red-500 rounded-full m-1" />
      {children}
    </motion.div>
  );
};

export default DraggablePanel;