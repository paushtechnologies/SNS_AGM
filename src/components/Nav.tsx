import React from 'react';

interface NavProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Nav: React.FC<NavProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 's1', label: '01 Momentum Builder' },
    { id: 's2', label: '02 Awake & Ignite' },
    { id: 's3', label: '03 Align & Accelerate' },
    { id: 's4', label: '04 Elevate, Multiply & Scale' },
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
