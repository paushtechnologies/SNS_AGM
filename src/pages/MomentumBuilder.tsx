import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Users, Rocket, TrendingUp } from 'lucide-react';
import './MomentumBuilder.css';

const MomentumBuilder: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as any }
  };

  return (
    <div className="momentum-container">
      {/* HERO SLIDE */}
      <motion.div
        className="slide-section dark"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ background: 'linear-gradient(135deg, #1A2744 0%, #4A7FD4 100%)' }}
      >
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.1 }}><Rocket size={400} /></div>

        <div className="slide-header">
          <div className="slide-label" style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 900 }}>SESSION 01 • THE MOMENTUM</div>
          <h1 className="slide-title" style={{ marginTop: '0px' }}>Momentum Builder</h1>
          <p className="slide-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Powering the journey toward Vision 2031 with precision, purpose, and professional excellence.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
          {[
            { icon: <Zap size={18} />, label: 'Technology Enablement', color: '#4A7FD4' } as any,
            { icon: <BarChart3 size={18} />, label: 'Data Intelligence', color: '#2C8FA5' } as any,
            { icon: <Users size={18} />, label: 'Team Excellence', color: '#D4AF37' } as any
          ].map((item: any) => (
            <div key={item.label} style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '12px 24px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '19px',
              color: '#fff',
              fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <span style={{ color: item.color }}>{item.icon}</span> {item.label}
            </div>
          ))}
        </div>
      </motion.div>

      {/* THE THREE PILLARS SLIDE */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header">
          <div className="slide-label" style={{ fontSize: '28px', marginBottom: '0px', fontWeight: 900 }}>The Strategy</div>
          <h1 className="slide-title" style={{ marginTop: '0px', fontWeight: 900 }}>The Three Pillars</h1>
          <p className="slide-subtitle">
            Introduce FY2026–27 theme: Tech, Data & Team as the foundation for our momentum.
          </p>
        </div>

        <motion.div
          className="pillar-grid"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Zap />,
              t: 'Tech',
              d: 'Empowers our team with AI-driven tools, CRM optimization, and intelligent automation.',
              c: '#4A7FD4'
            },
            {
              icon: <BarChart3 />,
              t: 'Data',
              d: 'Guides every decision. Transforming raw data into actionable intelligence with conviction.',
              c: '#2C8FA5'
            },
            {
              icon: <Users />,
              t: 'Team',
              d: 'Delivers the relationship. Skilled RMs and unified standards create lasting loyalty.',
              c: '#D4AF37'
            }
          ].map((pillar: any) => (
            <motion.div
              key={pillar.t}
              className="pillar-card"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -5 }}
            >
              {/* Background Glow */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-20%',
                width: '140px',
                height: '140px',
                background: pillar.c,
                opacity: 0.03,
                filter: 'blur(50px)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '6px',
                background: pillar.c,
                opacity: 0.8
              }}></div>

              <div className="pillar-icon" style={{
                color: pillar.c,
                background: `${pillar.c}08`,
                borderRadius: '16px',
                marginBottom: '16px'
              }}>
                {React.cloneElement(pillar.icon as React.ReactElement, { size: 36 } as any)}
              </div>

              <h3 style={{
                fontSize: '30px',
                color: '#1E293B',
                marginBottom: '10px',
                fontWeight: 900,
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '-0.5px'
              }}>
                {pillar.t}
              </h3>

              <div style={{
                width: '40px',
                height: '2px',
                background: '#e2e8f0',
                margin: '0 auto 12px'
              }}></div>

              <div style={{
                background: '#f8fafc',
                padding: '12px 20px',
                borderRadius: '16px',
                border: '1px solid #f1f5f9'
              }}>
                <p style={{
                  color: '#475569',
                  lineHeight: '1.6',
                  fontSize: '18px',
                  fontWeight: 500,
                  margin: 0
                }}>
                  {pillar.d}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CORE OBJECTIVES SLIDE */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header">
          <div className="slide-label" style={{ fontSize: '28px', marginBottom: '0px', fontWeight: 900 }}>The Goals</div>
          <h1 className="slide-title" style={{ marginTop: '0px', fontWeight: 900 }}>Core Objectives</h1>
        </div>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            'Introduce FY2026–27 theme: Tech, Data & Team',
            'Set the stage for the Annual Business Plan Meet',
            'Why these three pillars drive our momentum',
            'The foundation for Vision 2031 and beyond'
          ].map((obj, idx) => (
            <motion.div
              key={idx}
              style={{ padding: '20px', background: '#F8FAFC', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #E2E8F0' }}
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              whileHover={{ x: 10, background: '#fff' }}
            >
              <div style={{ width: '32px', height: '32px', background: '#4A7FD4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '14px' }}>
                {idx + 1}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1E293B' }}>{obj}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* VISION SLIDE */}
      <motion.div
        className="slide-section dark"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '30px 40px',
          position: 'relative',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          alignItems: 'center',
          gap: '40px',
          minHeight: '400px'
        }}
        {...slideIn}
      >
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'left', zIndex: 2 }}
        >
          <div className="slide-label" style={{ color: '#D4AF37', letterSpacing: '6px', marginBottom: '0px', fontSize: '16px', fontWeight: 900, textAlign: 'left' }}>THE VISION</div>
          <h1 className="slide-title" style={{ fontSize: '56px', fontWeight: 900, marginBottom: '20px', lineHeight: '1.1', marginTop: '0px', textAlign: 'left' }}>
            Human Wisdom Meets <br />
            <span style={{ color: 'var(--gold)' }}>Digital Intelligence</span>
          </h1>
          <p className="slide-subtitle" style={{ fontSize: '20px', opacity: 0.9, maxWidth: '600px', margin: '0 0 32px 0', lineHeight: '1.6', textAlign: 'left' }}>
            "Navigating the next chapter of SNS Group. Building the standards that define our <span style={{ color: '#D4AF37', fontWeight: 900 }}>₹10,000 Crore</span> future."
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 40px', background: '#D4AF37', color: '#1A2744', borderRadius: '100px', fontWeight: 900, fontSize: '18px', cursor: 'pointer', boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)' }}>
              Build the Future <TrendingUp size={24} />
            </div>
          </motion.div>
        </motion.div>

        {/* High-Impact Feathered Atmospheric Image */}
        <div style={{ position: 'absolute', right: '-10%', top: '50%', transform: 'translateY(-50%)', width: '60%', height: '120%', zIndex: 1, pointerEvents: 'none' }}>
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/premium_handshake.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat',
              opacity: 0.6,
              mixBlendMode: 'plus-lighter', // Creates a "glowing" effect on dark bg
              maskImage: 'radial-gradient(circle at center, black 10%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 70%)',
              filter: 'grayscale(100%) brightness(1.2) contrast(1.1)'
            }}
          />
          {/* Soft Ambient Radiance */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
            zIndex: -1
          }}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default MomentumBuilder;
