
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface SearchBarProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ id, className, onPositionChange }) => {
  return (
    <DraggablePanel 
      id={id} 
      className={`top-12 h-8 w-full ${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <div className="flex space-x-2 items-center">
            <button className="bg-gray-800 rounded-md px-2 py-1 text-xs text-white">
              <span>←</span>
            </button>
            <button className="bg-gray-800 rounded-md px-2 py-1 text-xs text-white">
              <span>→</span>
            </button>
          </div>
        </div>
        
        <div className="bg-red-600 rounded-full h-6 w-6 flex items-center justify-center text-white">
          2
        </div>
      </div>
    </DraggablePanel>
  );
};

export default SearchBar;