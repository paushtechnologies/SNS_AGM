import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import MomentumBuilder from './pages/MomentumBuilder';
import Session02 from './pages/Session02';
import Session03 from './pages/Session03';
import Session04 from './pages/Session04';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 's1': return <MomentumBuilder />;
      case 's2': return <Session02 />;
      case 's3': return <Session03 />;
      case 's4': return <Session04 />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
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
