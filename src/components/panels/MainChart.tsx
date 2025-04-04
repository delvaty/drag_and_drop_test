// src/components/panels/MainChart.tsx
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface MainChartProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const MainChart: React.FC<MainChartProps> = ({ id, className, onPositionChange }) => {
  return (
    <DraggablePanel 
      id={id} 
      className={`${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="text-white text-sm mb-2">
          TRUMP/USD on Radium CPMM • 1 • axiom.trade
        </div>
        
        <div className="flex-grow bg-black relative">
          {/* Placeholder for chart */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-600">Chart Area</div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-red-600 rounded-full h-10 w-10 flex items-center justify-center text-white text-xl">
              4
            </div>
          </div>
        </div>
        
        <div className="mt-2 flex justify-between">
          <div className="text-xs text-gray-400">3m 1m 5d 1d</div>
          <div className="text-xs text-gray-400">21:14:07 (UTC-8)</div>
        </div>
      </div>
    </DraggablePanel>
  );
};

export default MainChart;