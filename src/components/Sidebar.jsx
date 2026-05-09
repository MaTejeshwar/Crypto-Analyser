import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Wallet, 
  Newspaper, 
  Settings, 
  TrendingUp, 
  ShieldCheck,
  LogOut
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <BarChart3 size={20} />, label: 'Market' },
    { icon: <Wallet size={20} />, label: 'Portfolio' },
    { icon: <Newspaper size={20} />, label: 'News' },
    { icon: <TrendingUp size={20} />, label: 'Analysis' },
  ];

  return (
    <aside className="sidebar glass-panel">
      <div className="logo-container">
        <div className="logo-icon">
          <ShieldCheck size={24} color="var(--primary)" />
        </div>
        <span className="logo-text">CryptoPulse</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </div>
        <div className="nav-item logout">
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
