// src/components/panels/StockInfo.tsx
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface StockInfoProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const StockInfo: React.FC<StockInfoProps> = ({ id, className, onPositionChange }) => {
  return (
    <DraggablePanel 
      id={id} 
      className={`top-12 h-14 w-full ${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="flex items-center h-full px-4 justify-between">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-bold text-white">TRUMP</span>
              <span className="text-gray-400 text-xs ml-1">OFFICIAL TRUMP</span>
              <div className="ml-2 flex items-center space-x-2">
                <span className="bg-blue-600 text-white text-xs px-1 rounded">24h</span>
                <span className="text-white">$9.45B</span>
              </div>
            </div>
            <div className="flex text-xs text-gray-400">
              <span>Volume: 137.1k</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-6">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Price</span>
            <span className="text-white">$9.464</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Liquidity</span>
            <span className="text-white">$41.19M</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Supply</span>
            <span className="text-white">1B</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Tax</span>
            <span className="text-white">0.25%</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400"></span>
            <span className="text-white flex items-center">
              <span>0</span>
              <div className="rounded-full bg-white h-6 w-6 ml-1"></div>
            </span>
          </div>
        </div>
        
        <div className="flex items-center">
          
        </div>
      </div>
    </DraggablePanel>
  );
};

export default StockInfo;