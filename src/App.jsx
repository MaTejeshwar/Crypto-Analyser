import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatsRow from './components/StatsRow';
import MainChart from './components/MainChart';
import MarketTable from './components/MarketTable';
import PortfolioNews from './components/PortfolioNews';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for skeleton loaders
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      
      <main className="main-content">
        <Topbar />
        
        <AnimatePresence>
          {loading ? (
            <motion.div 
              className="dashboard-loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="skeleton-grid">
                {[1, 2, 3, 4].map(i => <div key={i} className="skeleton stat-skeleton" />)}
                <div className="skeleton chart-skeleton" />
                <div className="skeleton side-skeleton" />
                <div className="skeleton table-skeleton" />
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="dashboard-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="stats-section">
                <StatsRow />
              </div>

              <div className="main-grid">
                <div className="left-column">
                  <MainChart />
                  <MarketTable />
                </div>
                <div className="right-column">
                  <PortfolioNews />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <div className="bg-glow blue"></div>
      <div className="bg-glow purple"></div>
    </div>
  );
}

export default App;
