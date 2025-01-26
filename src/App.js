import React from 'react';
import { HashRouter } from 'react-router-dom';  
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <HashRouter> 
      <div className="App">
        <Header />
        <HeroSection />
        <Services />
        <About />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;