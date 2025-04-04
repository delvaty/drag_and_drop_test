'use client'

import { useState } from 'react';
import PanelContainer from '@/components/layout/PanelContainer';
import TopBar from '@/components/panels/TopBar';
import SearchBar from '@/components/panels/SearchBar';
import StockInfo from '@/components/panels/StockInfo';
import MainChart from '@/components/panels/MainChart';
import TradesTable from '@/components/panels/TradesTable';
import TradingWidget from '@/components/panels/TradingWidget';
import TokenInfo from '@/components/panels/TokenInfo';
import BottomBar from '@/components/panels/BottomBar';
import PresetButtons from '@/components/panels/PresetButtons';

interface PanelPosition {
  id: string;
  position: { x: number; y: number };
}

export default function Home() {
  const [panelPositions, setPanelPositions] = useState<PanelPosition[]>([]);

  const handlePanelPositionChange = (id: string, position: { x: number; y: number }) => {
    setPanelPositions(prevPositions => {
      const existingPanelIndex = prevPositions.findIndex(p => p.id === id);
      
      if (existingPanelIndex >= 0) {
        const updatedPositions = [...prevPositions];
        updatedPositions[existingPanelIndex] = { id, position };
        return updatedPositions;
      }
      
      return [...prevPositions, { id, position }];
    });
  };

  return (
    <main className="flex min-h-screen flex-col">
      <PanelContainer>
        <TopBar 
          id="top-bar" 
          onPositionChange={handlePanelPositionChange} 
        />
        <SearchBar 
          id="search-bar" 
          onPositionChange={handlePanelPositionChange} 
        />
        <StockInfo 
          id="stock-info" 
          onPositionChange={handlePanelPositionChange} 
        />
        <MainChart 
          id="main-chart" 
          onPositionChange={handlePanelPositionChange} 
          className="top-26 left-0 right-80 h-96"
        />
        <TradesTable 
          id="trades-table" 
          onPositionChange={handlePanelPositionChange} 
          className="top-122 left-0 right-80 h-80"
        />
        <TradingWidget 
          id="trading-widget" 
          onPositionChange={handlePanelPositionChange} 
        />
        <TokenInfo 
          id="token-info" 
          onPositionChange={handlePanelPositionChange} 
          className="top-26 right-0 w-80 h-80"
        />
        <PresetButtons 
          id="preset-buttons" 
          onPositionChange={handlePanelPositionChange} 
          className="bottom-12 left-0 right-0 h-12"
        />
        <BottomBar 
          id="bottom-bar" 
          onPositionChange={handlePanelPositionChange} 
          className="bottom-0 left-0 right-0 h-12"
        />
      </PanelContainer>
    </main>
  )
}