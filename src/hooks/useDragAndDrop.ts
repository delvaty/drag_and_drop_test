import { useState, useRef } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

interface UseDragAndDropProps {
  id: string;
  initialPosition?: { x: number; y: number };
  onDragEnd?: (id: string, position: { x: number; y: number }) => void;
  containerRef?: React.RefObject<HTMLElement>;
}

export function useDragAndDrop({
  id,
  initialPosition = { x: 0, y: 0 },
  onDragEnd,
  containerRef,
}: UseDragAndDropProps) {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(initialPosition.x);
  const y = useMotionValue(initialPosition.y);
  
  
  const scale = useTransform(
    [x, y],
    () => isDragging ? 1.02 : 1
  );
  
  const panelRef = useRef<HTMLDivElement>(null);
  const dragConstraints = containerRef?.current ? { current: containerRef.current } : undefined;

  
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (onDragEnd) {
      onDragEnd(id, { x: x.get(), y: y.get() });
    }
  };

  
  const resetPosition = () => {
    x.set(initialPosition.x);
    y.set(initialPosition.y);
  };

 
  return {
    x,
    y,
    scale,
    isDragging,
    panelRef,
    dragConstraints,
    dragHandlers: {
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
    },
    resetPosition,
  };
}