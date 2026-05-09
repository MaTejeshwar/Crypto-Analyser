import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, LineChart, Line
} from 'recharts';
import { Maximize2, RefreshCcw } from 'lucide-react';
import { generateChartData } from '../data';
import './MainChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip glass-panel">
        <p className="label">{label}</p>
        <p className="price">${payload[0].value.toLocaleString()}</p>
        <p className="volume">Vol: {payload[1] ? payload[1].value.toLocaleString() : 'N/A'}</p>
      </div>
    );
  }
  return null;
};

const MainChart = () => {
  const [data, setData] = useState(generateChartData(30));
  const [type, setType] = useState('area');
  const [timeRange, setTimeRange] = useState('1M');

  const refreshData = () => {
    setData(generateChartData(30));
  };

  return (
    <div className="main-chart-container glass-panel">
      <div className="chart-header">
        <div className="chart-title">
          <h3>Market Overview</h3>
          <div className="time-filters">
            {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map((range) => (
              <button 
                key={range} 
                className={`filter-btn ${timeRange === range ? 'active' : ''}`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <div className="chart-actions">
          <div className="type-toggle">
            <button className={type === 'area' ? 'active' : ''} onClick={() => setType('area')}>Area</button>
            <button className={type === 'bar' ? 'active' : ''} onClick={() => setType('bar')}>Bar</button>
          </div>
          <button className="icon-btn" onClick={refreshData}><RefreshCcw size={16} /></button>
          <button className="icon-btn"><Maximize2 size={16} /></button>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          {type === 'area' ? (
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: 'var(--text-muted)', fontSize: 12}} 
              />
              <YAxis 
                hide 
                domain={['dataMin - 1000', 'dataMax + 1000']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="var(--primary)" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorPrice)" 
                animationDuration={1500}
              />
              <Area 
                type="monotone" 
                dataKey="volume" 
                stroke="var(--secondary)" 
                fill="transparent"
                strokeWidth={1}
                strokeDasharray="5 5"
              />
            </AreaChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)', fontSize: 12}} />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
              <Bar dataKey="price" fill="var(--primary)" radius={[4, 4, 0, 0]} animationDuration={1000} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MainChart;
