import { format, subDays, startOfDay } from 'date-fns';

export const COINS = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: 64230.50, change24h: 2.4, volume: '34.2B', cap: '1.2T', color: '#f7931a' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: 3450.20, change24h: -1.2, volume: '18.5B', cap: '415B', color: '#627eea' },
  { id: 'solana', symbol: 'SOL', name: 'Solana', price: 145.80, change24h: 5.7, volume: '4.1B', cap: '65B', color: '#14f195' },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: 0.45, change24h: -0.5, volume: '800M', cap: '16B', color: '#0033ad' },
  { id: 'polkadot', symbol: 'DOT', name: 'Polkadot', price: 7.20, change24h: 1.8, volume: '300M', cap: '10B', color: '#e6007a' },
  { id: 'ripple', symbol: 'XRP', name: 'Ripple', price: 0.62, change24h: 0.2, volume: '1.2B', cap: '34B', color: '#23292f' },
];

export const generateChartData = (days = 7) => {
  const data = [];
  const now = new Date();
  for (let i = days; i >= 0; i--) {
    const date = subDays(now, i);
    data.push({
      date: format(date, 'MMM dd'),
      price: Math.random() * 5000 + 60000,
      volume: Math.random() * 1000 + 500,
      open: 60000 + Math.random() * 1000,
      close: 60000 + Math.random() * 1000,
      high: 62000 + Math.random() * 1000,
      low: 59000 + Math.random() * 1000,
    });
  }
  return data;
};

export const PORTFOLIO = {
  totalBalance: 42500.25,
  totalProfit: 8400.10,
  profitPercentage: 24.6,
  assets: [
    { name: 'Bitcoin', amount: 0.45, value: 28903.72, allocation: 68, color: '#f7931a' },
    { name: 'Ethereum', amount: 3.2, value: 11040.64, allocation: 26, color: '#627eea' },
    { name: 'Solana', amount: 15, value: 2187.00, allocation: 5, color: '#14f195' },
    { name: 'Others', amount: 0, value: 368.89, allocation: 1, color: '#94a3b8' },
  ]
};

export const TRANSACTIONS = [
  { id: 1, type: 'Buy', asset: 'BTC', amount: '0.05', value: '3,211.50', date: '2024-05-08 14:20', status: 'Completed' },
  { id: 2, type: 'Sell', asset: 'SOL', amount: '10.00', value: '1,458.00', date: '2024-05-07 09:15', status: 'Completed' },
  { id: 3, type: 'Buy', asset: 'ETH', amount: '1.50', value: '5,175.30', date: '2024-05-06 18:45', status: 'Completed' },
  { id: 4, type: 'Receive', asset: 'USDT', amount: '500.00', value: '500.00', date: '2024-05-05 11:30', status: 'Completed' },
];

export const NEWS = [
  { id: 1, title: 'Bitcoin Hits New Monthly High as Institutional Interest Surges', source: 'CryptoDaily', time: '2h ago', image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=250&fit=crop' },
  { id: 2, title: 'Ethereum Layer-2 Solutions See Record Transaction Volume', source: 'BlockNews', time: '5h ago', image: 'https://images.unsplash.com/photo-1622790698141-94e304bcbbad?w=400&h=250&fit=crop' },
  { id: 3, title: 'Solana Ecosystem Grows with New DeFi Protocol Launch', source: 'CoinDesk', time: '8h ago', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop' },
];
