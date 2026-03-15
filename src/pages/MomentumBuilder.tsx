import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Users } from 'lucide-react';

const MomentumBuilder: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div id="page-s1" className="page active" style={{ background: '#F8F9FB' }}>
      {/* SECTION 1: Tech. Data. Team. Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: 'linear-gradient(135deg, #B1C9E8 0%, #C9D8E9 50%, #E2E8F0 100%)',
          padding: '60px 80px',
          borderRadius: '32px',
          marginBottom: '50px',
          color: '#1A2744',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: '0 25px 60px rgba(109, 141, 177, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Background Elements */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

        <div style={{ flex: '1.5', zIndex: 1, minWidth: '500px' }}>
          <div className="label" style={{ color: 'var(--navy)', marginBottom: '16px', letterSpacing: '4px', fontSize: '12px', opacity: 0.6, fontWeight: 800 }}>SESSION 01 • THE MOMENTUM</div>
          <h1 style={{
            color: '#1A2744',
            fontSize: '64px',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '16px',
            fontWeight: 900,
            letterSpacing: '-2px',
            lineHeight: '1.05'
          }}>
            <span style={{ color: '#0F172A' }}>Tech. Data.</span> <span style={{ color: '#D4AF37' }}>Team.</span>
          </h1>
          <p style={{
            fontSize: '19px',
            maxWidth: '540px',
            marginBottom: '32px',
            color: '#1A2744',
            lineHeight: '1.6',
            fontWeight: 500,
            opacity: 0.9
          }}>
            Human Wisdom Meets Digital Intelligence. <br />
            Our transformation continues — powering the journey toward Vision 2031 with precision and purpose.
          </p>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {[
              { icon: <Zap size={14} />, label: 'Technology Enablement', color: '#4A7FD4' },
              { icon: <BarChart3 size={14} />, label: 'Data Intelligence', color: '#2C8FA5' },
              { icon: <Users size={14} />, label: 'Team Excellence', color: 'var(--gold)' }
            ].map(item => (
              <div key={item.label} style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.8)',
                padding: '10px 22px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '12.5px',
                color: '#1A2744',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
              }}>
                <span style={{
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.5)',
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                }}>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '0 0 auto', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              position: 'relative',
              padding: '24px',
              background: 'rgba(255,255,255,0.4)',
              borderRadius: '40px',
              backdropFilter: 'blur(15px)',
              border: '2px solid rgba(255,255,255,0.6)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}
          >
            <img
              src="/premium_handshake.png"
              alt="Human Wisdom meets Digital Intelligence"
              style={{
                width: '100%',
                maxWidth: '520px',
                borderRadius: '24px',
                display: 'block',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 2: Our Strategic Framework */}
      <div style={{ padding: '40px 0 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="label" style={{ color: 'var(--text3)', letterSpacing: '4px' }}>THE THREE PILLARS</div>
          <h2 style={{
            fontSize: '42px',
            color: 'var(--navy)',
            marginTop: '10px',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800
          }}>Our Strategic Framework</h2>
        </div>

        <div className="grid3" style={{ gap: '24px' }}>
          {/* Tech Card */}
          <motion.div
            className="card"
            {...fadeIn}
            whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(74, 127, 212, 0.2)' }}
            style={{
              padding: '60px 40px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)',
              textAlign: 'center',
              border: '3px solid rgba(74, 127, 212, 0.4)',
              borderTop: '12px solid #4A7FD4',
              borderRadius: '40px',
              position: 'relative',
              boxShadow: '0 15px 35px rgba(74, 127, 212, 0.1)'
            }}
          >
            <div style={{
              width: '90px', height: '90px',
              background: 'rgba(74,127,212,0.1)',
              color: '#4A7FD4', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 32px',
              border: '2px dashed rgba(74,127,212,0.3)',
              boxShadow: '0 8px 16px rgba(74,127,212,0.1)'
            }}><Zap size={48} strokeWidth={2.5} /></div>
            <h3 style={{ fontSize: '32px', marginBottom: '20px', color: '#1A2744', fontWeight: 950 }}>Tech</h3>
            <p style={{ fontSize: '18px', color: '#334155', lineHeight: '1.7', fontWeight: 600 }}>
              Empowers our team with AI-driven tools, CRM optimization, and intelligent automation to deliver client experiences at scale.
            </p>
          </motion.div>

          {/* Data Card */}
          <motion.div
            className="card"
            {...fadeIn}
            whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(44, 143, 165, 0.2)' }}
            style={{
              padding: '60px 40px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FBFC 100%)',
              textAlign: 'center',
              border: '3px solid rgba(44, 143, 165, 0.4)',
              borderTop: '12px solid #2C8FA5',
              borderRadius: '40px',
              position: 'relative',
              boxShadow: '0 15px 35px rgba(44, 143, 165, 0.1)'
            }}
          >
            <div style={{
              width: '90px', height: '90px',
              background: 'rgba(44,143,165,0.1)',
              color: '#2C8FA5', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 32px',
              border: '2px dashed rgba(44,143,165,0.3)',
              boxShadow: '0 8px 16px rgba(44,143,165,0.1)'
            }}><BarChart3 size={48} strokeWidth={2.5} /></div>
            <h3 style={{ fontSize: '32px', marginBottom: '20px', color: '#1A2744', fontWeight: 950 }}>Data</h3>
            <p style={{ fontSize: '18px', color: '#334155', lineHeight: '1.7', fontWeight: 600 }}>
              Guides every decision. With ₹1,900+ Cr of AUM history, we transform raw data into actionable intelligence that builds conviction.
            </p>
          </motion.div>

          {/* Team Card */}
          <motion.div
            className="card"
            {...fadeIn}
            whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(212, 175, 55, 0.2)' }}
            style={{
              padding: '60px 40px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFCEB 100%)',
              textAlign: 'center',
              border: '3px solid rgba(212, 175, 55, 0.4)',
              borderTop: '12px solid var(--gold)',
              borderRadius: '40px',
              position: 'relative',
              boxShadow: '0 15px 35px rgba(212, 175, 55, 0.1)'
            }}
          >
            <div style={{
              width: '90px', height: '90px',
              background: 'rgba(212,175,55,0.1)',
              color: 'var(--gold)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 32px',
              border: '2px dashed rgba(212,175,55,0.3)',
              boxShadow: '0 8px 16px rgba(212,175,55,0.1)'
            }}><Users size={48} strokeWidth={2.5} /></div>
            <h3 style={{ fontSize: '32px', marginBottom: '20px', color: '#1A2744', fontWeight: 950 }}>Team</h3>
            <p style={{ fontSize: '18px', color: '#334155', lineHeight: '1.7', fontWeight: 600 }}>
              Delivers the relationship. Skilled RMs, unified standards, and the 10,000 Crore mindset create lasting client loyalty.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MomentumBuilder;
