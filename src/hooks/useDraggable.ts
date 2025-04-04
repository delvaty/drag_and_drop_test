
import { useState, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseDraggableOptions {
  initialPosition?: Position;
  onPositionChange?: (position: Position) => void;
  bounds?: DOMRect | null;
}

export function useDraggable({
  initialPosition = { x: 0, y: 0 },
  onPositionChange,
  bounds,
}: UseDraggableOptions = {}) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<Position>({ x: 0, y: 0 });
  const positionRef = useRef<Position>(initialPosition);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (elementRef.current) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX - positionRef.current.x,
        y: e.clientY - positionRef.current.y,
      };
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    let newX = e.clientX - dragStartRef.current.x;
    let newY = e.clientY - dragStartRef.current.y;

    
    if (bounds && elementRef.current) {
      const elementRect = elementRef.current.getBoundingClientRect();
      
      
      if (newX < bounds.left) {
        newX = bounds.left;
      } else if (newX + elementRect.width > bounds.right) {
        newX = bounds.right - elementRect.width;
      }
      
      
      if (newY < bounds.top) {
        newY = bounds.top;
      } else if (newY + elementRect.height > bounds.bottom) {
        newY = bounds.bottom - elementRect.height;
      }
    }

    positionRef.current = { x: newX, y: newY };
    setPosition(positionRef.current);
    
    if (onPositionChange) {
      onPositionChange(positionRef.current);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      
      if (onPositionChange) {
        onPositionChange(positionRef.current);
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return {
    position,
    elementRef,
    isDragging,
    handleMouseDown,
  };
}