import React from 'react';
import './App.css';
import { 
  Header, 
  HeroSection, 
  FeaturesSection, 
  RecentMatches, 
  FAQSection, 
  NewsSection, 
  GuidesSection, 
  Footer 
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RecentMatches />
      <FAQSection />
      <NewsSection />
      <GuidesSection />
      <Footer />
    </div>
  );
}

export default App;