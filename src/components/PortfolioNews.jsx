import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { NEWS, PORTFOLIO } from '../data';
import { ExternalLink, Clock } from 'lucide-react';
import './PortfolioNews.css';

const PortfolioNews = () => {
  return (
    <div className="side-content">
      {/* Portfolio Card */}
      <div className="portfolio-card glass-panel">
        <h3>Asset Allocation</h3>
        <div className="pie-container">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={PORTFOLIO.assets}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {PORTFOLIO.assets.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '8px' }}
                itemStyle={{ color: 'white' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-center">
            <span className="total-label">Total</span>
            <span className="total-value">$42.5K</span>
          </div>
        </div>
        <div className="asset-list">
          {PORTFOLIO.assets.map((asset, i) => (
            <div key={i} className="asset-item">
              <div className="asset-dot" style={{ background: asset.color }}></div>
              <span className="asset-name">{asset.name}</span>
              <span className="asset-perc">{asset.allocation}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* News Card */}
      <div className="news-card glass-panel">
        <div className="card-header">
          <h3>Market News</h3>
          <button className="icon-btn"><ExternalLink size={16} /></button>
        </div>
        <div className="news-list">
          {NEWS.map((item) => (
            <div key={item.id} className="news-item">
              <img src={item.image} alt={item.title} className="news-thumb" />
              <div className="news-content">
                <h4>{item.title}</h4>
                <div className="news-meta">
                  <span>{item.source}</span>
                  <span className="dot"></span>
                  <span className="time"><Clock size={12} /> {item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioNews;
