import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpDown,
  Star, 
  Users, 
  Zap, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ChevronDown,
  Search,
  Wallet,
  Shield,
  Heart,
  MessageCircle,
  Settings,
  Menu,
  X,
  Copy,
  ExternalLink,
  TrendingUp,
  Globe
} from 'lucide-react';

// Header Component
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-2xl font-bold text-white">BUSIMATCH</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">API</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 bg-opacity-95 rounded-lg p-4 mb-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">API</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
                <div className="pt-4 border-t border-gray-700">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Wallet className="w-4 h-4" />
                    <span>Connect Wallet</span>
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Hero Section with Crypto Exchange Interface
export const HeroSection = () => {
  const [sendCurrency, setSendCurrency] = useState('BUSIMATCH');
  const [receiveCurrency, setReceiveCurrency] = useState('USDT');
  const [sendAmount, setSendAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');

  const cryptocurrencies = [
    { symbol: 'BUSIMATCH', name: 'Busimatch Token', icon: '🚀' },
    { symbol: 'BTC', name: 'Bitcoin', icon: '₿' },
    { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ' },
    { symbol: 'USDT', name: 'Tether', icon: '₮' },
    { symbol: 'USDC', name: 'USD Coin', icon: 'Ⓤ' },
    { symbol: 'BNB', name: 'Binance Coin', icon: '🔶' },
    { symbol: 'SOL', name: 'Solana', icon: '◎' },
    { symbol: 'ADA', name: 'Cardano', icon: '₳' },
    { symbol: 'MATIC', name: 'Polygon', icon: '⬢' },
    { symbol: 'AVAX', name: 'Avalanche', icon: '🔺' }
  ];

  const swapCurrencies = () => {
    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);
    const tempAmount = sendAmount;
    setSendAmount(receiveAmount);
    setReceiveAmount(tempAmount);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597315797662-cb81ba54c8b2')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Lightning Cryptocurrency Exchange
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12"
        >
          Instant Busimatch swaps with Lightning Network! Best rates and secure transactions.
        </motion.p>

        {/* Crypto Exchange Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
        >
          <div className="space-y-6">
            {/* Send Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-orange-400">Send</label>
                <span className="text-sm text-gray-400">Balance: 0.00</span>
              </div>
              <div className="flex items-center space-x-4">
                <input 
                  type="number"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  placeholder="0.00"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative">
                  <select 
                    value={sendCurrency}
                    onChange={(e) => setSendCurrency(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[140px]"
                  >
                    {cryptocurrencies.map(crypto => (
                      <option key={crypto.symbol} value={crypto.symbol}>
                        {crypto.icon} {crypto.symbol}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={swapCurrencies}
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
              >
                <ArrowUpDown className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Receive Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-blue-400">Receive</label>
                <span className="text-sm text-gray-400">≈ ${receiveAmount || '0.00'}</span>
              </div>
              <div className="flex items-center space-x-4">
                <input 
                  type="number"
                  value={receiveAmount}
                  onChange={(e) => setReceiveAmount(e.target.value)}
                  placeholder="0.00"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative">
                  <select 
                    value={receiveCurrency}
                    onChange={(e) => setReceiveCurrency(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[140px]"
                  >
                    {cryptocurrencies.map(crypto => (
                      <option key={crypto.symbol} value={crypto.symbol}>
                        {crypto.icon} {crypto.symbol}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Destination Wallet */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Destination Wallet Address</label>
              <input 
                type="text"
                placeholder="Enter wallet address"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Exchange Type */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                Fixed rate (1.0%)
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Float rate (0.5%)
              </button>
            </div>

            {/* Exchange Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Exchange Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <p className="text-xs text-gray-400 mt-4 text-center">
              By using this site and creating an exchange, you agree to the{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Feature Cards Section
export const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Save time",
      description: "Maximum exchange speed due to full automation",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: ArrowUpDown,
      title: "Make an exchange",
      description: "Pick the right strategy and make favourable trades",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: DollarSign,
      title: "Save money",
      description: "Best exchange rates and minimum commissions",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Trusted since 2018
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Recent Transactions Section
export const RecentTransactions = () => {
  const transactions = [
    { from: "0.01296 ETH", to: "USDC", time: "5 sec", address: "0x742d...35Cc" },
    { from: "604 USDT", to: "LTC", time: "1 min", address: "0x8f9a...78Dd" },
    { from: "0.017 SOL", to: "USDC", time: "2 min", address: "0x1b2c...91Ee" },
    { from: "101 USDT", to: "BUSIMATCH", time: "3 min", address: "0x3d4e...12Ff" },
    { from: "1000 BUSIMATCH", to: "SOL", time: "5 min", address: "0x5f6g...34Gg" },
    { from: "4020 USDT", to: "BTC", time: "8 min", address: "0x7h8i...56Hh" },
    { from: "2919 USDT", to: "BTC", time: "12 min", address: "0x9j0k...78Ii" },
    { from: "143 TRX", to: "BTC", time: "15 min", address: "0xbl2m...90Jj" },
    { from: "40.555 TRX", to: "BTC", time: "18 min", address: "0xdn4o...12Kk" },
    { from: "548 USDT", to: "BTC", time: "20 min", address: "0xpq6r...34Ll" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1664526937033-fe2c11f1be25')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Recent transactions
        </motion.h2>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
          {transactions.map((tx, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-700 hover:bg-opacity-30 transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">{tx.time} ago</span>
                <div className="flex items-center space-x-3">
                  <span className="text-white font-medium">{tx.from}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-white font-medium">{tx.to}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-blue-400 font-medium text-sm">{tx.address}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "In three ways: by email, on our website, or by viewing the transactions in the blockchain explorer."
    },
    {
      question: "Why can I trust you?",
      answer: "No registration and no need to share your personal details. We don't hold your funds, all exchanges take place instantly in fully automatic mode."
    },
    {
      question: "Do you have hidden fees?",
      answer: "1% if you opt for a fixed rate, 0.5% if you opt for a floating rate. All fees are transparent and shown upfront."
    },
    {
      question: "What is Busimatch token?",
      answer: "Busimatch is a decentralized cryptocurrency token designed for fast and secure peer-to-peer transactions with low fees and high scalability."
    },
    {
      question: "Which wallets are supported?",
      answer: "We support MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and most other popular cryptocurrency wallets."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700 hover:bg-opacity-30 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// News Section
export const NewsSection = () => {
  const news = [
    {
      title: "Busimatch Token Launches on Lightning Network",
      excerpt: "Enhanced transaction speeds and reduced fees with Lightning Network integration for Busimatch token...",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
      date: "June 15, 2025"
    },
    {
      title: "New DEX Features: Advanced Trading Tools",
      excerpt: "We're introducing limit orders, stop-loss features, and advanced charting tools for better trading experience...",
      image: "https://images.unsplash.com/photo-1566816931809-10aade99aa3a",
      date: "June 10, 2025"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Latest News
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2"
          >
            <span>All news</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{article.date}</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Guides Section
export const GuidesSection = () => {
  const guides = [
    {
      title: "Types of cryptocurrency wallets",
      excerpt: "Learn about different types of crypto wallets and how to choose the right one for storing your coins.",
      image: "https://images.unsplash.com/photo-1664527184222-420bb0fec61a",
      category: "Wallets",
      date: "June 12, 2025"
    },
    {
      title: "How to exchange cryptocurrencies on Busimatch",
      excerpt: "Step-by-step guide to making your first cryptocurrency exchange on our platform safely and efficiently.",
      image: "https://images.unsplash.com/photo-1567910977265-62375d7dba86",
      category: "Tutorial",
      date: "June 8, 2025"
    },
    {
      title: "Understanding DeFi and DEX trading",
      excerpt: "Complete guide to decentralized finance and how decentralized exchanges work in the crypto ecosystem.",
      image: "https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg",
      category: "DeFi",
      date: "June 5, 2025"
    },
    {
      title: "Crypto security best practices",
      excerpt: "Essential security tips to protect your cryptocurrency assets and avoid common scams and threats.",
      image: "https://images.unsplash.com/photo-1572191783453-62f99a6055ce",
      category: "Security",
      date: "June 1, 2025"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Guides and tutorials
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2"
          >
            <span>Read all</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {guide.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {guide.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-3">{guide.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{guide.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const footerSections = [
    {
      title: "Busimatch",
      links: [
        { text: "About", href: "#" },
        { text: "Our brand", href: "#" },
        { text: "Affiliate program", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Affiliate Program Terms", href: "#" },
        { text: "API Terms of Use", href: "#" }
      ]
    },
    {
      title: "Popular",
      links: [
        { text: "Blog", href: "#" },
        { text: "BTC to BUSIMATCH", href: "#" },
        { text: "BUSIMATCH to BTC", href: "#" },
        { text: "ETH to BUSIMATCH", href: "#" },
        { text: "USDT(TRC20) to BUSIMATCH", href: "#" },
        { text: "USDT(ETH) to BUSIMATCH", href: "#" },
        { text: "USDT(TRX) to BUSIMATCH", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "FAQ", href: "#" },
        { text: "Support", href: "#" },
        { text: "API", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2018-2025 Busimatch DEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};