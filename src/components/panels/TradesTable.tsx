// src/components/panels/TradesTable.tsx
import React from 'react';
import DraggablePanel from '../layout/DraggablePanel';

interface TradesTableProps {
  id: string;
  className?: string;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const TradesTable: React.FC<TradesTableProps> = ({ id, className, onPositionChange }) => {
  // Datos de muestra para la tabla
  const trades = [
    { age: '1s', type: 'Sell', price: '$9.428', amount: '19.59', total: '$99.5' },
    { age: '15s', type: 'Sell', price: '$9.428', amount: '53.83', total: '$500.1' },
    { age: '49s', type: 'Sell', price: '$9.428', amount: '13.22', total: '$115.2' },
    { age: '1m', type: 'Sell', price: '$9.428', amount: '53.83', total: '$500.1' },
    { age: '2m', type: 'Sell', price: '$9.468', amount: '46.43', total: '$428.7' },
    { age: '3s', type: 'Sell', price: '$9.468', amount: '52.96', total: '$500' },
    { age: '3s', type: 'Sell', price: '$9.428', amount: '52', total: '$500' }
  ];

  return (
    <DraggablePanel 
      id={id} 
      className={`${className}`}
      borderColor="border-red-600"
      onPositionChange={onPositionChange}
    >
      <div className="h-full flex flex-col">
        <div className="flex border-b border-gray-700 text-xs">
          <button className="px-4 py-2 text-white border-b-2 border-white">Trades</button>
          <button className="px-4 py-2 text-gray-400">Positions</button>
          <button className="px-4 py-2 text-gray-400">Orders</button>
          <button className="px-4 py-2 text-gray-400">Holders (673188)</button>
          <button className="px-4 py-2 text-gray-400">Top Traders</button>
          <button className="px-4 py-2 text-gray-400">Dex Tokens</button>
        </div>
        
        <div className="flex-grow overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 text-xs">
                <th className="p-2 text-left">Age</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="p-2 text-xs text-gray-400">{trade.age}</td>
                  <td className="p-2 text-xs text-red-500">{trade.type}</td>
                  <td className="p-2 text-xs text-white">{trade.price}</td>
                  <td className="p-2 text-xs text-white">{trade.amount}</td>
                  <td className="p-2 text-xs text-red-500">{trade.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="absolute bottom-4 right-4">
          
        </div>
      </div>
    </DraggablePanel>
  );
};

export default TradesTable;