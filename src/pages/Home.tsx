import React from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const sessions = [
    {
      id: 's1',
      num: '01',
      color: '#4A7FD4',
      sublabel: 'The Why',
      title: 'Momentum Builder',
      points: [
        'Introduce FY2026–27 theme: Tech, Data & Team',
        'Set the stage for the ABPM',
        'Why these three pillars drive our momentum',
        'The foundation for Vision 2031'
      ],
    },
    {
      id: 's2',
      num: '02',
      color: '#2C8FA5',
      sublabel: 'The Process',
      title: 'Awake & Ignite',
      points: [
        'Standardizing the ICMM for all RMs',
        'End-to-end client journey map',
        'Unified delivery across the organization',
        'Tech, Data & Team as ICMM enablers'
      ],
    },
    {
      id: 's3',
      num: '03',
      color: '#6B4FA0',
      sublabel: 'The Transformation',
      title: 'Align & Accelerate',
      points: [
        'AI as a competitive necessity',
        'CRM optimization roadmap',
        'CEO Dashboard & goal sheets',
        'Data-led conviction in client conversations'
      ],
    },
    {
      id: 's4',
      num: '04',
      color: '#C9922A',
      sublabel: 'The Vision',
      title: 'Elevate, Multiply & Scale',
      points: [
        'The 10,000 Crore Mindset',
        'Behavioural & skill transformation',
        'Milestone trajectory to 2031',
        'The Next Chapter of SNS Group'
      ],
    },
  ];

  return (
    <div id="page-home" className="page active">
      <div className="hero" style={{
        background: 'linear-gradient(165deg, #FBF8F0 0%, #F3EBD9 60%, #E6D5B8 100%)',
        textAlign: 'left',
        boxShadow: 'none',
        borderBottom: '1px solid var(--border)',
        padding: '50px 60px',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        borderRadius: '32px',
        margin: '0 0 32px'
      }}>
        <div className="hero-text" style={{ flex: '1.2', margin: '0', maxWidth: 'none' }}>
          <h1 style={{
            color: 'var(--navy)',
            fontSize: '72px',
            lineHeight: '1.1',
            marginBottom: '16px',
            letterSpacing: '-2px'
          }}>
            Annual Business <br />
            <span style={{ color: 'var(--gold)', display: 'block', marginTop: '4px' }}>Plan Meet 2026</span>
          </h1>
          <div style={{ width: '60px', height: '4px', background: 'var(--gold)', marginBottom: '24px' }}></div>
          <p style={{
            margin: '0',
            color: 'var(--text)',
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: '1.4',
            maxWidth: '550px',
            opacity: 0.9
          }}>
            Navigating the next chapter of SNS Group. <br />
            Building the standards that define our ₹10,000 Crore future.
          </p>
        </div>
        <div className="hero-img" style={{
          flex: '1',
          boxShadow: 'var(--sh3)',
          borderRadius: '24px',
          transform: 'rotate(-1deg)',
          transition: 'transform 0.5s ease'
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-1deg) scale(1)'}>
          <img src="/HomeImage.png" alt="SNS Dashboard Home" style={{ borderRadius: '24px' }} />
        </div>
      </div>

      <div className="label">Navigate the Sessions</div>
      <div className="section-title" style={{ marginBottom: '22px' }}>Four Key Sessions</div>

      <div className="sessions-grid">
        {sessions.map((session) => {
          // Define a light tinted background based on the session's theme color
          const lightBg = session.id === 's1' ? '#F0F5FF' :
            session.id === 's2' ? '#F0F9FB' :
              session.id === 's3' ? '#F6F2FF' :
                '#FEFAF0';

          return (
            <div
              key={session.id}
              className="session-card"
              style={{
                background: lightBg,
                borderTop: `6px solid ${session.color}`,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                borderBottom: '1px solid rgba(0,0,0,0.08)'
              }}
              onClick={() => onNavigate(session.id)}
            >
              <div className="s-head">
                <div className="s-meta">
                  <div className="s-sublabel" style={{
                    color: session.color,
                    fontWeight: 900,
                    fontSize: '13px'
                  }}>{session.sublabel}</div>
                  <h3 style={{
                    color: 'var(--navy)',
                    marginTop: '4px'
                  }}>{session.title}</h3>
                  <p style={{ color: 'var(--text3)' }}>Click to explore &rarr;</p>
                </div>
                <div className="s-num" style={{
                  color: session.color,
                  opacity: 0.4,
                  fontSize: '110px',
                  bottom: '5px',
                  right: '15px',
                  lineHeight: '1',
                  pointerEvents: 'none',
                  fontWeight: 900
                }}>{session.num}</div>
              </div>
              <div className="s-body">
                <ul className="s-points">
                  {session.points.map((point, index) => (
                    <li key={index} style={{
                      color: 'var(--text2)',
                      borderColor: 'rgba(0,0,0,0.05)',
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '16px'
                    }}>
                      <span style={{
                        color: session.color,
                        fontWeight: 900,
                        fontSize: '18px',
                        minWidth: '24px'
                      }}>{index + 1}.</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
