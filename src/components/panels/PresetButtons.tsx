
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface PresetButtonsProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const PresetButtons: React.FC<PresetButtonsProps> = ({ id, className, onPositionChange }) => {
  return (
    <DraggablePanel 
      id={id} 
      className={`${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="flex items-center justify-center h-full px-4 space-x-2">
        <button className="bg-purple-600 text-white text-xs px-4 py-1 rounded">
          PRESET 1
        </button>
        <button className="bg-gray-700 text-white text-xs px-4 py-1 rounded">
          PRESET 2
        </button>
        <button className="bg-gray-700 text-white text-xs px-4 py-1 rounded">
          PRESET 3
        </button>
        
        <div className="bg-red-600 rounded-full h-6 w-6 flex items-center justify-center text-white ml-4">
          9
        </div>
      </div>
    </DraggablePanel>
  );
};

export default PresetButtons;