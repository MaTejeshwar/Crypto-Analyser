import React from 'react';
import { COINS } from '../data';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import './MarketTable.css';

const MarketTable = () => {
  return (
    <div className="market-table-container glass-panel">
      <div className="table-header">
        <h3>Market Assets</h3>
        <button className="view-all">View All <ChevronRight size={16} /></button>
      </div>
      <table className="market-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {COINS.map((coin) => (
            <tr key={coin.id}>
              <td>
                <div className="asset-info">
                  <div className="asset-logo" style={{ backgroundColor: `${coin.color}20`, color: coin.color }}>
                    {coin.symbol[0]}
                  </div>
                  <div>
                    <div className="asset-name">{coin.name}</div>
                    <div className="asset-symbol">{coin.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="font-mono">${coin.price.toLocaleString()}</td>
              <td>
                <span className={`change-pill ${coin.change24h >= 0 ? 'up' : 'down'}`}>
                  {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                </span>
              </td>
              <td className="text-muted">${coin.cap}</td>
              <td>
                <button className="trade-btn">Trade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
