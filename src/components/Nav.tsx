import React from 'react';

interface NavProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Nav: React.FC<NavProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 's1', label: '01 Momentum Builder' },
    { id: 's2', label: '02 Frontline Connect' },
    { id: 's3', label: '03 Awake & Ignite' },
    { id: 's4', label: '04 Align & Accelerate' },
    { id: 's5', label: '05 Elevate, Multiply & Scale' },
    { id: 's6', label: '06 Convergence' },
  ];

  return (
    <nav className="nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-btn ${activePage === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
