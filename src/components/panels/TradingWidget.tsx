// src/components/panels/TradingWidget.tsx
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface TradingWidgetProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const TradingWidget: React.FC<TradingWidgetProps> = ({ id, className, onPositionChange }) => {
  return (
    <DraggablePanel 
      id={id} 
      className={`right-0 top-26 w-80 h-80 ${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="mb-4 flex justify-between">
          <div className="flex space-x-8">
            <button className="text-white border-b-2 border-white">Market</button>
            <button className="text-gray-400">Limit</button>
            <button className="text-gray-400">Adv.</button>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-1" />
            <span className="text-white text-xs">0</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">AMOUNT</span>
            <div className="text-white">0.0</div>
          </div>
          
          <div className="grid grid-cols-3 gap-1 mb-4">
            <button className="bg-gray-800 text-white text-xs py-1 rounded">+ 20%</button>
            <button className="bg-gray-800 text-white text-xs py-1 rounded">+ 50%</button>
            <button className="bg-gray-800 text-white text-xs py-1 rounded">+ 100%</button>
          </div>
          
          <div className="bg-gray-800 p-2 rounded mb-2">
            <span className="text-gray-400">Advanced Trading Strategy</span>
          </div>
        </div>
        
        <button className="bg-green-400 text-black py-3 rounded-md font-bold mb-4">
          Buy TRUMP
        </button>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-xs">Bought</span>
            <span className="text-white">$0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-xs">Sold</span>
            <span className="text-white">$0</span>
          </div>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs">P&L $</span>
            <span className="text-green-400">$0.00 (0%)</span>
          </div>
          
        </div>
        
        <div className="grid grid-cols-3 gap-1">
          <button className="bg-gray-800 text-white text-xs py-1 rounded">PRESET 1</button>
          <button className="bg-gray-800 text-white text-xs py-1 rounded">PRESET 2</button>
          <button className="bg-gray-800 text-white text-xs py-1 rounded">PRESET 3</button>
        </div>
      </div>
    </DraggablePanel>
  );
};

export default TradingWidget;