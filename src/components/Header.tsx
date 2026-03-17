import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <img src="/SNS Logo.png" alt="SNS Logo" className="header-logo" />
        <div className="header-info">
          <div className="header-name">SNS ABPM DASHBOARD</div>
          {/* <div className="header-tag">Our transformation continues…</div> */}
        </div>
      </div>
      <div className="header-right">
        <div className="header-abpm-text">
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ color: '#4A7FD4' }}>ABPM 2026-27</span>
          </div>
        </div>
        <img
          src="/premium_handshake.png"
          alt="SNS Partnership"
          className="header-handshake"
        />
      </div>
    </header>
  );
};

export default Header;
