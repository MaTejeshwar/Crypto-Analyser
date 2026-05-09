import React from 'react';
import { Search, Bell, User, Wallet } from 'lucide-react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search assets, news, or traders..." />
      </div>

      <div className="topbar-actions">
        <div className="wallet-badge glass-panel">
          <Wallet size={16} />
          <span>$42,500.25</span>
        </div>
        
        <div className="icon-button">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </div>

        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <div className="user-info">
            <span className="username">Matej Kovac</span>
            <span className="status">Pro Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
