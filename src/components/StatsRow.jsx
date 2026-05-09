import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';
import './Stats.css';

const StatCard = ({ title, value, change, icon: Icon, color }) => (
  <motion.div 
    className="stat-card glass-panel"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="stat-header">
      <div className="stat-icon" style={{ backgroundColor: `${color}20`, color: color }}>
        <Icon size={20} />
      </div>
      <span className={`stat-change ${change >= 0 ? 'up' : 'down'}`}>
        {change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        {Math.abs(change)}%
      </span>
    </div>
    <div className="stat-body">
      <span className="stat-title">{title}</span>
      <h2 className="stat-value">{value}</h2>
    </div>
  </motion.div>
);

const StatsRow = () => {
  return (
    <div className="stats-row">
      <StatCard title="Total Balance" value="$42,500.25" change={2.4} icon={DollarSign} color="var(--primary)" />
      <StatCard title="24h Profit" value="+$1,240.10" change={5.7} icon={Activity} color="var(--success)" />
      <StatCard title="Top Gainer" value="Solana (SOL)" change={12.8} icon={TrendingUp} color="var(--secondary)" />
      <StatCard title="Asset Diversity" value="8 Assets" change={-0.5} icon={PieChart} color="var(--warning)" />
    </div>
  );
};

export default StatsRow;
