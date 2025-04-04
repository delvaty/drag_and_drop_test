// src/components/panels/TopBar.tsx
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface TopBarProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const TopBar: React.FC<TopBarProps> = ({ id, className, onPositionChange }) => {
  return (
    <DraggablePanel 
      id={id} 
      className={`top-0 h-12 w-full ${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <img src="/images/axiom-logo.svg" alt="AXIOM Pro" className="h-6" />
            <span className="text-white font-bold ml-2">AXIOM Pro</span>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            <span className="text-white hover:text-red-500 cursor-pointer">Discover</span>
            <span className="text-white hover:text-red-500 cursor-pointer">Pulse</span>
            <span className="text-white hover:text-red-500 cursor-pointer">Trackers</span>
            <span className="text-white hover:text-red-500 cursor-pointer">Perpetuals</span>
            <span className="text-white hover:text-red-500 cursor-pointer">Yield</span>
            <span className="text-white hover:text-red-500 cursor-pointer">Portfolio</span>
            <span className="text-white hover:text-red-500 cursor-pointer">Rewards</span>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md">
            Deposit
          </button>
        </div>
      </div>
    </DraggablePanel>
  );
};

export default TopBar;