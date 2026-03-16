import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Infinity,
  History,
  Users
} from 'lucide-react';

const Session04: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div id="page-s4" className="page active" style={{ background: '#F8F9FB', color: '#1E293B', paddingBottom: '100px' }}>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: 'linear-gradient(135deg, #2D343E 0%, #454E59 40%, #BFA169 100%)',
          padding: '70px 80px',
          borderRadius: '40px',
          marginBottom: '50px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
        }}
      >
        <div style={{ flex: '1.2', zIndex: 1 }}>
          <div className="label" style={{ color: '#D4AF37', marginBottom: '16px', letterSpacing: '4px', fontSize: '13px', fontWeight: 800 }}>SESSION 04 • THE VISION</div>
          <h1 style={{
            fontSize: '60px',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
            fontWeight: 900,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 25%, #D4AF37 75%, #B8860B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Elevate, Multiply & Scale.
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', maxWidth: '550px', lineHeight: 1.6, fontWeight: 500 }}>
            Building the ₹10,000 Crore Mindset. The next chapter of SNS Group starts with a transformation in how we behave.
          </p>
        </div>
        <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            width: '200px', height: '200px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 0 50px rgba(212, 175, 55, 0.15)',
            backdropFilter: 'blur(10px)'
          }}>
            <TrendingUp size={90} color="#D4AF37" />
          </div>
        </div>
      </motion.div>

      {/* ORIGIN STORY: THE BEHAVIOURAL GAP */}
      <motion.div className="mb" style={{ padding: '60px 0', maxWidth: '1000px', margin: '0 auto' }} {...fadeIn}>
        <div className="label" style={{ textAlign: 'center', marginBottom: '40px', color: '#64748B' }}>ORIGIN STORY: MARCH 2020</div>
        <div className="grid2" style={{ gap: '24px' }}>
          <div style={{ background: '#fff', padding: '40px 30px', borderRadius: '24px', textAlign: 'center', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '14px', fontWeight: 900, color: '#C53030', marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>INVESTOR A</div>
            <XCircle size={48} color="#C53030" style={{ marginBottom: '20px', opacity: 0.8 }} />
            <p style={{ fontSize: '18px', fontWeight: 800, color: '#1E293B', marginBottom: '20px', lineHeight: 1.4 }}>Panicked and exited <br />the market</p>
            <div style={{ background: '#FFF5F5', color: '#C53030', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 800 }}>Outcome: Missed recovery ✗</div>
          </div>
          <div style={{ background: '#fff', padding: '40px 30px', borderRadius: '24px', textAlign: 'center', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '14px', fontWeight: 900, color: '#2F855A', marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>INVESTOR B</div>
            <CheckCircle2 size={48} color="#2F855A" style={{ marginBottom: '20px', opacity: 0.8 }} />
            <p style={{ fontSize: '18px', fontWeight: 800, color: '#1E293B', marginBottom: '20px', lineHeight: 1.4 }}>Stayed invested and <br />continued</p>
            <div style={{ background: '#F0FFF4', color: '#2F855A', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 800 }}>Outcome: Created Wealth ✓</div>
          </div>
        </div>
        <div style={{ marginTop: '40px', textAlign: 'center', color: '#475569', fontSize: '20px', fontStyle: 'italic', maxWidth: '700px', margin: '40px auto 0', lineHeight: 1.5 }}>
          "The difference was behaviour — and behaviour is shaped by guidance."
        </div>
      </motion.div>

      {/* WHAT WE ACTUALLY DO */}
      <div style={{ padding: '80px 0' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>What We Actually Do</h2>
        <h6 className="label" style={{ textAlign: 'center', marginBottom: '50px', fontSize: '16px' }}>Our role is to help clients stay rational and disciplined.</h6>
        <div className="grid3" style={{ gap: '30px' }}>
          {[
            { icon: <ShieldCheck size={48} />, t: 'Guidance', d: 'Helping clients make sound decisions in volatile markets.' },
            { icon: <TrendingUp size={48} />, t: 'Perspective', d: 'Framing short-term noise against long-term wealth goals.' },
            { icon: <Users size={48} />, t: 'Understanding', d: 'Knowing each client\'s behaviour, goals, and fears.' }
          ].map(item => (
            <div key={item.t} style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
              padding: '50px 35px',
              borderRadius: '32px',
              textAlign: 'center',
              border: '1px solid #E2E8F0',
              boxShadow: '0 15px 35px rgba(0,0,0,0.03)'
            }}>
              <div style={{ color: '#1A2744', marginBottom: '24px', display: 'flex', justifyContent: 'center', opacity: 0.9 }}>{item.icon}</div>
              <h4 style={{ fontSize: '26px', fontWeight: 900, color: '#1E293B', marginBottom: '18px' }}>{item.t}</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '18px', fontWeight: 500 }}>{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* OUR FOUNDATION CARDS */}
      <motion.div className="mb" style={{ padding: '80px 0' }} {...fadeIn}>
        <div className="label" style={{ color: '#64748B', textAlign: 'center', marginBottom: '50px', fontSize: '16px' }}>OUR FOUNDATION</div>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>The Foundation of SNS</div>
        <div className="grid3" style={{ gap: '30px' }}>
          {[
            { icon: <History size={64} />, label: '60+ Years of Legacy' },
            { icon: <Users size={64} />, label: '3 Generations of Trust' },
            { icon: <Infinity size={64} />, label: 'Infinite Relationships' }
          ].map(item => (
            <>
              <div key={item.label} style={{
                background: '#fff',
                padding: '60px 24px',
                borderRadius: '40px',
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
              }}>
                <div style={{ color: '#D4AF37', marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                <div style={{ color: '#1E293B', fontSize: '24px', fontWeight: 900 }}>{item.label}</div>
              </div>
            </>
          ))}
        </div>
        <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '18px', fontWeight: 500 }}>Trust is our strongest asset. Mindset converts trust into scale.</p>
      </motion.div>

      <motion.div className="mb" style={{ padding: '80px 0' }} {...fadeIn}>
        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Why do most distribution firms never scale?</h1>
        <span className="label" style={{ color: '#64748B', textAlign: 'center', marginBottom: '50px', fontSize: '16px' }}>✗  Not markets!</span>
        <span className="label" style={{ color: '#64748B', textAlign: 'center', marginBottom: '50px', fontSize: '16px' }}>✗  Not products!</span>
        <p>The biggest limitation is MINDSET.</p>
      </motion.div>


      <motion.div>
        <div>
          <p>KEY CONCEPT</p>
        </div>

        <h1>Grow vs Scale</h1>

        <div>

          <div>
            <h2>Growth</h2>
            <ul>
              <li>Linear expansion</li>
              <li>Requires more effort & resources</li>
              <li>Driven by transactions</li>
              <li>More clients → more meetings → more AUM</li>
            </ul>
          </div>

          <div>
            <span>→</span>
          </div>

          <div>
            <h2>Scale</h2>
            <ul>
              <li>Exponential expansion</li>
              <li>Driven by systems & reputation</li>
              <li>Powered by relationships & referrals</li>
              <li>Trust + Referrals + Systems → Exponential AUM</li>
            </ul>
          </div>

        </div>
      </motion.div>
      {/* THE DISTRIBUTION TRAP */}
      <div style={{ padding: '80px 0' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>The Distribution Trap</h2>
        <div className="grid2" style={{ gap: '40px' }}>
          <div style={{ background: '#fff', padding: '60px 40px', borderRadius: '32px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#C53030', marginBottom: '32px', fontSize: '26px', fontWeight: 900 }}>Trapped Firms</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '18px', fontWeight: 800, color: '#475569' }}>
              Product <ArrowRight size={18} color="#94A3B8" /> Transaction <ArrowRight size={18} color="#94A3B8" /> Commission
            </div>
          </div>
          <div style={{ background: '#fff', padding: '60px 40px', borderRadius: '32px', border: '2px solid #D4AF37', boxShadow: '0 15px 40px rgba(212, 175, 55, 0.1)' }}>
            <h4 style={{ color: '#2F855A', marginBottom: '32px', fontSize: '26px', fontWeight: 900 }}>Scaling Firms</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '18px', fontWeight: 800, color: '#1E293B' }}>
              Client <ArrowRight size={18} color="#94A3B8" /> Relationship <ArrowRight size={18} color="#94A3B8" /> Compounding
            </div>
          </div>
        </div>
      </div>

      {/* TRUST FORMULA */}
      <motion.div className="mb" style={{ padding: '80px 0', textAlign: 'center' }} {...fadeIn}>
        <div className="label" style={{ color: '#64748B' }}>THE EQUATION</div>
        <h2 style={{ fontSize: '42px', margin: '40px 0', fontWeight: 900, color: '#1E293B' }}>Trust Compounding Formula</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '28px', fontWeight: 800, color: '#1E293B' }}>
          <span style={{ color: '#D4AF37' }}>Clarity</span> + <span style={{ color: '#D4AF37' }}>Consistency</span> + <span style={{ color: '#D4AF37' }}>Communication</span> + <span style={{ color: '#D4AF37' }}>Time</span>
          <span style={{ margin: '0 20px', color: '#94A3B8' }}>=</span>
          <span style={{ fontSize: '56px', borderBottom: '6px solid #D4AF37', letterSpacing: '4px', color: '#1E293B' }}>TRUST</span>
        </div>
      </motion.div>

      {/* FLYWHEEL SECTION */}
      <div style={{ padding: '100px 0' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>The Wealth Flywheel</h2>
        <p style={{ textAlign: 'center', color: '#64748B', fontSize: '20px', marginBottom: '60px' }}>Once the flywheel spins, growth becomes self-reinforcing.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {[
            'Client Trust', 'Better Guidance', 'Better Behaviour', 'Better Outcomes',
            'Client Confidence', 'Referrals', 'Net Inflows', 'AUM Growth'
          ].map((text, i) => (
            <div key={text} style={{ background: '#fff', padding: '30px 20px', borderRadius: '24px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <div style={{ color: '#D4AF37', fontWeight: 900, marginBottom: '8px' }}>{i + 1}</div>
              <div style={{ fontWeight: 800, color: '#0F172A' }}>{text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL MANTRA */}
      <motion.div className="mb" style={{ background: '#D4AF37', color: '#fff', padding: '100px 60px', borderRadius: '40px', textAlign: 'center' }} {...fadeIn}>
        <h2 style={{ fontSize: '48px', marginBottom: '32px', fontWeight: 900 }}>The ₹10,000 Crore Mindset</h2>
        <p style={{ fontSize: '32px', maxWidth: '850px', margin: '0 auto', fontStyle: 'italic', fontWeight: 500 }}>
          "If SNS was already a ₹10,000 Crore firm, how would we behave tomorrow morning?"
        </p>
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        #page-s4 .section-title { font-size: 52px !important; color: #0F172A !important; font-weight: 900 !important; }
        #page-s4 .label { font-size: 15px; font-weight: 800; text-transform: uppercase; letter-spacing: 4px; }
      `}} />
    </div>
  );
};

export default Session04;
