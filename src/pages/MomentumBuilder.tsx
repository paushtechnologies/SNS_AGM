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
          <div className="slide-label">SESSION 01 • THE MOMENTUM</div>
          <h1 className="slide-title">Momentum Builder</h1>
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
          <div className="slide-label">The Strategy</div>
          <h1 className="slide-title">The Three Pillars</h1>
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
                  whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                >
                    <div className="pillar-icon" style={{ color: pillar.c }}>{React.cloneElement(pillar.icon as React.ReactElement, { size: 40 } as any)}</div>
                    <h3 style={{ fontSize: '32px', color: '#1E293B', marginBottom: '16px' }}>{pillar.t}</h3>
                    <p style={{ color: '#64748B', lineHeight: '1.6', fontSize: '19px' }}>{pillar.d}</p>
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
          <div className="slide-label">The Goals</div>
          <h1 className="slide-title">Core Objectives</h1>
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
        style={{ textAlign: 'center', background: 'linear-gradient(135deg, #1A2744 0%, #1E293B 100%)', padding: '40px' }}
        {...slideIn}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="slide-label" style={{ color: '#D4AF37' }}>THE VISION</div>
          <h1 className="slide-title">Human Wisdom Meets <br /> Digital Intelligence</h1>
          <p className="slide-subtitle" style={{ fontSize: '20px', opacity: 0.8, maxWidth: '800px', margin: '0 auto 20px' }}>
              "Navigating the next chapter of SNS Group. Building the standards that define our ₹10,000 Crore future."
          </p>
          
          <motion.div 
            style={{ marginTop: '30px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 32px', background: '#D4AF37', color: '#1A2744', borderRadius: '100px', fontWeight: 900, fontSize: '18px', cursor: 'pointer' }}>
                  Build the Future <TrendingUp size={20} />
              </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MomentumBuilder;
