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
  Footer,
  LanguageProvider
} from './components';

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;