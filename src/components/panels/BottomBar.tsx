
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface BottomBarProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ id, className, onPositionChange }) => {
  return (
    <DraggablePanel 
      id={id} 
      className={`${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
            PRESET 1
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-white text-xs">
              <span>0</span>
              <span className="mx-1">|</span>
              <span>0</span>
            </div>
            
            <button className="text-gray-400 text-xs px-2 py-1 rounded border border-gray-700">
              Wallet Trades
            </button>
            
            <button className="text-gray-400 text-xs px-2 py-1 rounded border border-gray-700">
              Twitter Trades
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-400 text-xs">
            <span>$49.4B</span>
            <span className="mx-1">|</span>
            <span>10,528</span>
            <span className="mx-1">|</span>
            <span>4,124</span>
          </div>
          
          <div className="text-green-400 text-xs">
            Connected: ✓ (SOL)
          </div>
        </div>
        
        <div className="bg-red-600 rounded-full h-6 w-6 flex items-center justify-center text-white">
          11
        </div>
      </div>
    </DraggablePanel>
  );
};

export default BottomBar;