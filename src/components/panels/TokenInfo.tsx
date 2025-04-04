
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface TokenInfoProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const TokenInfo: React.FC<TokenInfoProps> = ({ id, className, onPositionChange }) => {
  return (
    <DraggablePanel 
      id={id} 
      className={`${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-white font-semibold">Token Info</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Symbol</span>
            <span className="text-white text-sm">$TRUMP</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Top N tx</span>
            <span className="text-white text-sm">0.99.42%</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Holders</span>
            <span className="text-white text-sm">672,035</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">LP Burned</span>
            <span className="text-white text-sm">NO</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">...</span>
            <span className="text-white text-sm">...</span>
          </div>
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-400">Wallet: 0xdegf...GPN</div>
          </div>
          
          
        </div>
      </div>
    </DraggablePanel>
  );
};

export default TokenInfo;