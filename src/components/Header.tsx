import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <img src="/SNS Logo.png" alt="SNS Logo" style={{ height: '60px', width: 'auto' }} />
        <div className="header-info">
          <div className="header-name">SNS AGM Dashboard</div>
          <div className="header-tag">Our transformation continues…</div>
        </div>
      </div>
      <div className="header-right">
        <span className="header-badge">Annual General Meeting 2026–27</span>
      </div>
    </header>
  );
};

export default Header;
