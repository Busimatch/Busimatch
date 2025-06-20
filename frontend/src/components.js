import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Zap, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ChevronDown,
  Search,
  Building,
  Handshake,
  Globe,
  TrendingUp,
  Shield,
  Heart,
  MessageCircle,
  Settings,
  Menu,
  X
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
              <Building className="w-5 h-5 text-white" />
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
              <button className="text-gray-300 hover:text-white transition-colors">
                Sign in
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                Sign up
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
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
                  <button className="text-left text-gray-300 hover:text-white transition-colors">
                    Sign in
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-left">
                    Sign up
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

// Hero Section with Business Matching Interface
export const HeroSection = () => {
  const [lookingFor, setLookingFor] = useState('Investor');
  const [offering, setOffering] = useState('Startup');

  const businessTypes = [
    'Investor', 'Startup', 'Supplier', 'Customer', 'Partner', 'Mentor', 'Service Provider', 'Distributor'
  ];

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
          Lightning Business Matching
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12"
        >
          Connect with the perfect business partners instantly
        </motion.p>

        {/* Business Matching Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Looking For */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Looking For</label>
              <div className="relative">
                <select 
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Offering */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Offering</label>
              <div className="relative">
                <select 
                  value={offering}
                  onChange={(e) => setOffering(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Industry Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Industry/Sector</label>
            <input 
              type="text"
              placeholder="e.g., Technology, Healthcare, Finance"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Match Type */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
              Quick Match (0.5%)
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Premium Match (1.0%)
            </button>
          </div>

          {/* Match Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Find Match Now</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            By using our service, you agree to the{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
          </p>
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
      description: "Maximum matching speed due to AI-powered automation",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Handshake,
      title: "Make connections",
      description: "Find the right partners and build valuable business relationships",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: DollarSign,
      title: "Save money",
      description: "Best matching rates and minimum commission fees",
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
          Trusted since 2020
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

// Recent Matches Section
export const RecentMatches = () => {
  const matches = [
    { from: "Tech Startup", to: "VC Fund", time: "5 sec", amount: "$2M Series A" },
    { from: "Restaurant Chain", to: "Food Supplier", time: "1 min", amount: "Supply Contract" },
    { from: "SaaS Company", to: "Marketing Agency", time: "2 min", amount: "Growth Partnership" },
    { from: "Manufacturer", to: "Distributor", time: "3 min", amount: "Distribution Deal" },
    { from: "E-commerce", to: "Logistics", time: "5 min", amount: "Fulfillment Partner" },
    { from: "Fintech", to: "Bank", time: "8 min", amount: "Banking Partnership" },
    { from: "Healthcare", to: "Insurance", time: "12 min", amount: "Coverage Deal" },
    { from: "EdTech", to: "School District", time: "15 min", amount: "Education Contract" }
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
          Recent matches
        </motion.h2>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
          {matches.map((match, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-700 hover:bg-opacity-30 transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">{match.time} ago</span>
                <div className="flex items-center space-x-3">
                  <span className="text-white font-medium">{match.from}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-white font-medium">{match.to}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-blue-400 font-medium">{match.amount}</span>
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
      question: "How can I track my match requests?",
      answer: "You can track your match requests in three ways: through email notifications, on our website dashboard, or by viewing the match history in your profile."
    },
    {
      question: "Why should I trust Busimatch?",
      answer: "We don't require extensive personal details upfront. We use verified business profiles and secure matching algorithms. All connections are made through our platform with built-in security measures."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees. We charge 1% for premium matches with dedicated support, 0.5% for quick matches. All fees are transparent and shown upfront."
    },
    {
      question: "How does the matching algorithm work?",
      answer: "Our AI-powered algorithm analyzes business profiles, industry compatibility, geographic preferences, deal size, and partnership history to find the most relevant matches."
    },
    {
      question: "What types of businesses can I find matches for?",
      answer: "We support all types of business partnerships: investors, suppliers, customers, distributors, service providers, mentors, and strategic partners across various industries."
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
      title: "AI-Powered Matching Reaches 99% Success Rate",
      excerpt: "Our new machine learning algorithm has achieved unprecedented accuracy in business matching...",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
      date: "June 15, 2025"
    },
    {
      title: "Global Expansion: Busimatch Now in 50+ Countries",
      excerpt: "We're excited to announce our expansion into new markets across Asia and Europe...",
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
      title: "Types of Business Partnerships",
      excerpt: "Learn about different types of business partnerships and how to choose the right one for your company.",
      image: "https://images.unsplash.com/photo-1664527184222-420bb0fec61a",
      category: "Partnerships",
      date: "June 12, 2025"
    },
    {
      title: "How to Create a Winning Business Profile",
      excerpt: "Step-by-step guide to creating an attractive business profile that gets noticed by potential partners.",
      image: "https://images.unsplash.com/photo-1567910977265-62375d7dba86",
      category: "Profile Tips",
      date: "June 8, 2025"
    },
    {
      title: "Negotiating Partnership Deals",
      excerpt: "Best practices for negotiating successful partnership agreements that benefit all parties involved.",
      image: "https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg",
      category: "Negotiation",
      date: "June 5, 2025"
    },
    {
      title: "Building Long-term Business Relationships",
      excerpt: "Strategies for maintaining and growing successful business partnerships over time.",
      image: "https://images.unsplash.com/photo-1572191783453-62f99a6055ce",
      category: "Relationships",
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
        { text: "Investor to Startup", href: "#" },
        { text: "Startup to Investor", href: "#" },
        { text: "Supplier to Business", href: "#" },
        { text: "Business to Supplier", href: "#" },
        { text: "Customer to Service", href: "#" },
        { text: "Service to Customer", href: "#" }
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
            © 2020-2025 Busimatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};