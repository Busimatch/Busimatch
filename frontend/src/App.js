import React from 'react';
import './App.css';
import { 
  Header, 
  ExchangeApp, 
  FeaturesSection, 
  RecentTransactions, 
  FAQSection, 
  NewsSection, 
  GuidesSection, 
  Footer 
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <ExchangeApp />
      <FeaturesSection />
      <RecentTransactions />
      <FAQSection />
      <NewsSection />
      <GuidesSection />
      <Footer />
    </div>
  );
}

export default App;