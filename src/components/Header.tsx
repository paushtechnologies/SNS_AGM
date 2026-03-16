import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <img src="/SNS Logo.png" alt="SNS Logo" style={{ height: '60px', width: 'auto' }} />
        <div className="header-info">
          <div className="header-name">SNS ABPM DASHBOARD</div>
          <div className="header-tag">Our transformation continues…</div>
        </div>
      </div>
      <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: '22px',
          letterSpacing: '0.5px'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ color: '#4A7FD4' }}>ABPM 2026-27</span>
          </div>
        </div>
        <img
          src="/premium_handshake.png"
          alt="SNS Partnership"
          style={{
            height: '80px',
            borderRadius: '12px',
            boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
            border: '2px solid rgba(212, 175, 55, 0.2)'
          }}
        />
      </div>
    </header>
  );
};

export default Header;
