import React from 'react';
import { motion } from 'framer-motion';

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
      color: '#E63946',
      sublabel: 'The People',
      title: 'Frontline Connect',
      points: [
        'One-on-one interactions with RMs',
        'Review individual FY25 performance',
        'Align individual goals for FY26',
        'Clarifying roles in SNS growth journey'
      ],
    },
    {
      id: 's3',
      num: '03',
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
      id: 's4',
      num: '04',
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
      id: 's5',
      num: '05',
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
    {
      id: 's6',
      num: '06',
      color: '#2E7D5B',
      sublabel: 'The Result',
      title: 'Convergence',
      points: [
        'Reconnect to the core purpose',
        'Identify key strategic priorities',
        'Clarify decisions and ownership',
        'Personal reflections and closing thoughts'
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as any }
    }
  };

  const heroImageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: -1,
      transition: { duration: 1, ease: "backOut" as any }
    }
  };

  return (
    <motion.div
      id="page-home"
      className="page active"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="hero"
        style={{
          background: 'linear-gradient(165deg, #FBF8F0 0%, #F3EBD9 60%, #E6D5B8 100%)',
          textAlign: 'left',
          boxShadow: 'none',
          borderBottom: '1px solid var(--border)',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          borderRadius: '32px',
          margin: '60px 0 20px',
          position: 'relative',
          overflow: 'hidden'
        }}
        variants={itemVariants}
      >
        {/* Floating background elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            filter: 'blur(30px)',
            zIndex: 0
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74, 127, 212, 0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
            zIndex: 0
          }}
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="hero-text" style={{ flex: '1.2', margin: '0', maxWidth: 'none' }}>
          <motion.h1
            style={{
              color: 'var(--navy)',
              fontSize: '72px',
              lineHeight: '1.05',
              marginBottom: '12px',
              letterSpacing: '-1.5px'
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Annual Business <br />
            <span style={{ color: 'var(--gold)', display: 'block', marginTop: '4px' }}>Plan Meet 2026-27</span>
          </motion.h1>
          <motion.div
            style={{ width: '80px', height: '5px', background: 'var(--gold)', marginBottom: '24px', borderRadius: '10px' }}
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
          <motion.p
            style={{
              margin: '0',
              color: 'var(--text)',
              fontSize: '24px',
              fontWeight: 500,
              lineHeight: '1.45',
              maxWidth: '500px',
              opacity: 0.9
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Navigating the next chapter of SNS Group. <br />
            Building the standards that define our ₹10,000 Crore future.
          </motion.p>
        </div>
        <motion.div
          className="hero-img"
          style={{
            flex: '1',
            boxShadow: 'var(--sh3)',
            borderRadius: '32px',
            position: 'relative',
            overflow: 'hidden'
          }}
          variants={heroImageVariants}
          whileHover={{ rotate: 0, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/HomeImage.png" alt="SNS Dashboard Home" style={{ borderRadius: '32px', display: 'block', width: '100%' }} />
        </motion.div>
      </motion.div>

      <motion.div className="label" style={{ opacity: 0.6 }} variants={itemVariants}>Navigate the Sessions</motion.div>
      <motion.h2 className="section-title" style={{ fontSize: '56px', marginBottom: '32px' }} variants={itemVariants}>Six Sessions</motion.h2>

      <motion.div
        className="sessions-grid"
        variants={containerVariants}
      >
        {sessions.map((session) => {
          const lightBg = session.id === 's1' ? '#F0F5FF' :
            session.id === 's2' ? '#FFF5F5' :
              session.id === 's3' ? '#F0F9FB' :
                session.id === 's4' ? '#F6F2FF' :
                  session.id === 's5' ? '#FEFAF0' :
                    '#F0FDF4';

          return (
            <motion.div
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
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                borderTopWidth: '10px'
              }}
              onClick={() => onNavigate(session.id)}
            >
              <div className="s-head" style={{ padding: '24px 30px' }}>
                <div className="s-meta">
                  <div className="s-sublabel" style={{
                    color: session.color,
                    fontWeight: 900,
                    fontSize: '16px'
                  }}>{session.sublabel}</div>
                  <h3 style={{
                    color: 'var(--navy)',
                    marginTop: '4px',
                    fontSize: '36px'
                  }}>{session.title}</h3>
                  <p style={{ color: 'var(--text3)', fontSize: '16px' }}>Click to explore &rarr;</p>
                </div>
                <motion.div
                  className="s-num"
                  style={{
                    color: session.color,
                    opacity: 0.25,
                    fontSize: '100px',
                    bottom: '0px',
                    right: '15px',
                    lineHeight: '1',
                    pointerEvents: 'none',
                    fontWeight: 900,
                    position: 'absolute'
                  }}
                  whileHover={{ opacity: 0.4, scale: 1.1 }}
                >{session.num}</motion.div>
              </div>
              <div className="s-body" style={{ padding: '0 30px 24px' }}>
                <ul className="s-points">
                  {session.points.map((point, index) => (
                    <motion.li
                      key={index}
                      style={{
                        color: 'var(--text2)',
                        borderColor: 'rgba(0,0,0,0.05)',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '12px',
                        fontSize: '19px',
                        padding: '10px 0'
                      }}
                      whileHover={{ x: 5, color: '#000' }}
                    >
                      <span style={{
                        color: session.color,
                        fontWeight: 900,
                        fontSize: '18px',
                        minWidth: '20px'
                      }}>{index + 1}.</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Home;
