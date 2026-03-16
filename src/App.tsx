import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import MomentumBuilder from './pages/MomentumBuilder';
import FrontlineConnect from './pages/frontline.tsx';
import Session02 from './pages/Session02';
import Session03 from './pages/Session03';
import Session04 from './pages/Session04.tsx';
import Convergence from './pages/convergence';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 's1': return <MomentumBuilder />;
      case 's2': return <FrontlineConnect />;
      case 's3': return <Session02 />;
      case 's4': return <Session03 />;
      case 's5': return <Session04 />;
      case 's6': return <Convergence />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={`app-container ${scrolled ? 'scrolled' : ''}`}>
      <Header />
      <Nav activePage={currentPage} onNavigate={setCurrentPage} />
      <main className="main">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
