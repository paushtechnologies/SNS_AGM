import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Infinity as InfiniteIcon,
  History,
  Users
} from 'lucide-react';
import './Session04.css';

const Session04: React.FC = () => {
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
    <div className="page active session04-container">

      {/* HERO SECTION */}
      <motion.div
        className="slide-section"
        style={{
          background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
          color: '#FFFFFF',
          border: 'none'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ flex: '1.2' }}>
            <div className="slide-label" style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37' }}>SESSION 04 • THE VISION</div>
            <h1 className="slide-title" style={{
              fontSize: '72px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '32px'
            }}>
              Elevate, Multiply & Scale.
            </h1>
            <p className="slide-subtitle" style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'left', margin: '0' }}>
              Building the ₹10,000 Crore Mindset. The next chapter of SNS Group starts with a transformation in how we behave.
            </p>
          </div>
          <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                width: '300px', height: '300px',
                borderRadius: '50%',
                border: '1px dashed rgba(212,175,55,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                width: '220px', height: '220px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <TrendingUp size={100} color="#D4AF37" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ORIGIN STORY: THE BEHAVIOURAL GAP */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">ORIGIN STORY: MARCH 2020</div>
          <h2 className="slide-title">The Behavioural Gap</h2>
        </div>
        <div className="comparison-container" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="comparison-card" style={{ borderTop: '4px solid #C53030' }}>
            <div style={{ fontSize: '14px', fontWeight: 900, color: '#C53030', marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>INVESTOR A</div>
            <XCircle size={64} color="#C53030" style={{ marginBottom: '24px', opacity: 0.8 }} />
            <p style={{ fontSize: '24px', fontWeight: 800, color: '#1E293B', marginBottom: '24px', lineHeight: 1.4 }}>Panicked and exited <br />the market</p>
            <div style={{ background: '#FFF5F5', color: '#C53030', padding: '16px', borderRadius: '12px', fontSize: '16px', fontWeight: 800 }}>Outcome: Missed recovery ✗</div>
          </div>
          <div className="comparison-card" style={{ borderTop: '4px solid #2F855A' }}>
            <div style={{ fontSize: '14px', fontWeight: 900, color: '#2F855A', marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>INVESTOR B</div>
            <CheckCircle2 size={64} color="#2F855A" style={{ marginBottom: '24px', opacity: 0.8 }} />
            <p style={{ fontSize: '24px', fontWeight: 800, color: '#1E293B', marginBottom: '24px', lineHeight: 1.4 }}>Stayed invested and <br />continued</p>
            <div style={{ background: '#F0FFF4', color: '#2F855A', padding: '16px', borderRadius: '12px', fontSize: '16px', fontWeight: 800 }}>Outcome: Created Wealth ✓</div>
          </div>
        </div>
        <div style={{ marginTop: '60px', textAlign: 'center', color: '#475569', fontSize: '24px', fontStyle: 'italic', maxWidth: '800px', margin: '60px auto 0', lineHeight: 1.5 }}>
          "The difference was behaviour — and behaviour is shaped by guidance."
        </div>
      </motion.div>

      {/* WHAT WE ACTUALLY DO */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">OUR CORE ROLE</div>
          <h2 className="slide-title">What We Actually Do</h2>
          <p className="slide-subtitle">Our role is to help clients stay rational and disciplined.</p>
        </div>
        <div className="grid3" style={{ gap: '30px' }}>
          {[
            { icon: <ShieldCheck size={56} />, t: 'Guidance', d: 'Helping clients make sound decisions in volatile markets.' },
            { icon: <TrendingUp size={56} />, t: 'Perspective', d: 'Framing short-term noise against long-term wealth goals.' },
            { icon: <Users size={56} />, t: 'Understanding', d: 'Knowing each client\'s behaviour, goals, and fears.' }
          ].map(item => (
            <div key={item.t} className="comparison-card" style={{ textAlign: 'center' }}>
              <div style={{ color: '#D4AF37', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <h4 style={{ fontSize: '28px', fontWeight: 900, color: '#1E293B', marginBottom: '18px' }}>{item.t}</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '18px', fontWeight: 500 }}>{item.d}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* OUR FOUNDATION CARDS */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">OUR FOUNDATION</div>
          <h2 className="slide-title">The Foundation of SNS</h2>
        </div>
        <div className="grid3" style={{ gap: '30px' }}>
          {[
            { icon: <History size={80} />, label: '60+ Years of Legacy' },
            { icon: <Users size={80} />, label: '3 Generations of Trust' },
            { icon: <InfiniteIcon size={80} />, label: 'Infinite Relationships' }
          ].map(item => (
            <div key={item.label} className="comparison-card" style={{ textAlign: 'center', padding: '60px 24px' }}>
              <div style={{ color: '#D4AF37', marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <div style={{ color: '#1E293B', fontSize: '28px', fontWeight: 900 }}>{item.label}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '20px', fontWeight: 500 }}>
            <span style={{ color: '#B8860B', fontWeight: 900 }}>Trust is our strongest asset.</span> Mindset converts trust into scale.
          </p>
        </div>
      </motion.div>

      <motion.div className="slide-section" style={{ background: '#1E293B', color: '#fff' }} {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title" style={{ color: '#fff', fontSize: '64px' }}>Why do most distribution firms never scale?</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '60px' }}>
          <div className="slide-label" style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#FCA5A5', border: '1px solid rgba(220,38,38,0.3)' }}>✗  Not markets!</div>
          <div className="slide-label" style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#FCA5A5', border: '1px solid rgba(220,38,38,0.3)' }}>✗  Not products!</div>
        </div>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          style={{ fontSize: '48px', fontWeight: 900, textAlign: 'center', color: '#D4AF37' }}
        >
          The biggest limitation is MINDSET.
        </motion.p>
      </motion.div>


      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">KEY CONCEPT</div>
          <h1 className="slide-title">Grow vs Scale</h1>
        </div>

        <div className="comparison-container">
          <div className="comparison-card">
            <h2>Growth</h2>
            <ul>
              <li>Linear expansion</li>
              <li>Requires more effort & resources</li>
              <li>Driven by transactions</li>
              <li>More clients → more meetings → more AUM</li>
            </ul>
          </div>

          <div className="comparison-arrow">→</div>

          <div className="comparison-card" style={{ border: '2px solid #D4AF37' }}>
            <h2 style={{ color: '#D4AF37' }}>Scale</h2>
            <ul>
              <li>Exponential expansion</li>
              <li>Driven by systems & reputation</li>
              <li>Powered by relationships & referrals</li>
              <li>Trust + Referrals + Systems → Exponential AUM</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">CASE STUDIES</div>
          <h1 className="slide-title">Lessons from the World's Best</h1>
        </div>

        <div className="case-studies-container">
          <div className="case-card amazon">
            <h2>Amazon</h2>
            <h4>Client Obsession</h4>
            <p>Every decision starts with:</p>
            <p style={{ fontWeight: 800, fontSize: '20px', margin: '10px 0' }}>"What is best for the customer?"</p>
            <p>The scale desired, comes from relentless focus on the client.</p>
          </div>

          <div className="case-card fidelity">
            <h2>Fidelity</h2>
            <h4>Proactive Communication</h4>
            <p>Clients left not due to poor returns — but because they felt ignored.</p>
            <p style={{ fontWeight: 800, fontSize: '20px', margin: '10px 0' }}>Proactive communication builds trust.</p>
          </div>

          <div className="case-card toyota">
            <h2>Toyota</h2>
            <h4>Kaizen</h4>
            <p>Small improvements every day create massive long-term scale. Consistency compounds into competitive advantage.</p>
            <p style={{ fontWeight: 800, fontSize: '20px', margin: '10px 0' }}>1.01^365 = 37.8</p>
            <p>vs 1^365 = 1</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">The Distribution Trap</h1>
        </div>

        <div className="trapped-scaling-container">
          <div className="flow-section">
            <p>TRAPPED FIRMS</p>
            <div className="flow-row">
              <div className="flow-box">Product</div>
              <span>→</span>
              <div className="flow-box">Transaction</div>
              <span>→</span>
              <div className="flow-box">Commission</div>
            </div>
          </div>

          <div className="flow-section" style={{ border: '1px solid #D4AF37' }}>
            <p style={{ color: '#D4AF37' }}>SCALING FIRMS</p>
            <div className="flow-row">
              <div className="flow-box">Client</div>
              <span>→</span>
              <div className="flow-box">Relationship</div>
              <span>→</span>
              <div className="flow-box">Compounding</div>
            </div>
          </div>
        </div>

        <p className="slide-subtitle" style={{ marginTop: '60px', fontWeight: 700 }}>
          Same industry. Different mindset. Completely different outcomes.
        </p>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">THE FORMULA</div>
          <h1 className="slide-title">Trust Compounding Formula</h1>
          <p className="slide-subtitle">
            Trust grows through repetition. Every interaction either strengthens trust or weakens it.
          </p>
        </div>

        <div className="formula-row">
          <div className="formula-box">
            <h3>Clarity</h3>
            <p>Clear, jargon-free communication</p>
          </div>
          <span style={{ fontSize: '32px', color: '#D4AF37' }}>+</span>
          <div className="formula-box">
            <h3>Consistency</h3>
            <p>Reliable presence across markets</p>
          </div>
          <span style={{ fontSize: '32px', color: '#D4AF37' }}>+</span>
          <div className="formula-box">
            <h3>Communication</h3>
            <p>Proactive, not reactive touch</p>
          </div>
          <span style={{ fontSize: '32px', color: '#D4AF37' }}>+</span>
          <div className="formula-box">
            <h3>Time</h3>
            <p>Compounding requires patience</p>
          </div>
        </div>

        <div className="trust-result">
          <h2>= TRUST</h2>
          <p style={{ fontSize: '20px', margin: 0 }}>The compound interest of human relationships.</p>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">The Wealth Flywheel</h1>
          <p className="slide-subtitle">Once the flywheel spins, growth becomes self-reinforcing.</p>
        </div>

        <div className="flywheel-container">
          <div className="flywheel-center">
            <p style={{ fontSize: '18px', margin: 0 }}>SELF-REINFORCING</p>
            <p style={{ fontSize: '24px', color: '#D4AF37', margin: 0 }}>GROWTH</p>
          </div>

          <div className="flywheel-item client-trust">
            <h4>Client Trust</h4>
            <p>Foundation</p>
          </div>
          <div className="flywheel-item better-guidance">
            <h4>Better Guidance</h4>
            <p>Informed advice</p>
          </div>
          <div className="flywheel-item better-behaviour">
            <h4>Better Behaviour</h4>
            <p>Client action</p>
          </div>
          <div className="flywheel-item better-outcomes">
            <h4>Better Outcomes</h4>
            <p>Real results</p>
          </div>
          <div className="flywheel-item client-confidence">
            <h4>Client Confidence</h4>
            <p>Felt security</p>
          </div>
          <div className="flywheel-item referrals">
            <h4>Referrals</h4>
            <p>Word of mouth</p>
          </div>
          <div className="flywheel-item net-inflows">
            <h4>Net Inflows</h4>
            <p>Capital growth</p>
          </div>
          <div className="flywheel-item aum-growth">
            <h4>AUM Growth</h4>
            <p>Scale & capacity</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '20px', height: '20px', background: '#D4AF37', borderRadius: '4px' }}></div>
            <p style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>Business outcomes</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '20px', height: '20px', background: '#1E293B', borderRadius: '4px' }}></div>
            <p style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>Client experience</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">CAPABILITY PYRAMID</div>
          <h1 className="slide-title">₹10,000 Crore Capability Pyramid</h1>
          <p className="slide-subtitle">Strong foundations create scalable trust.</p>
        </div>

        <div className="pyramid-container">
          <div className="pyramid-level level-5">Level 5 — Legacy Relationships</div>
          <div className="pyramid-level level-4">Level 4 — Relationship Compounding</div>
          <div className="pyramid-level level-3">Level 3 — Consistent Engagement</div>
          <div className="pyramid-level level-2">Level 2 — Deep Client Understanding</div>
          <div className="pyramid-level level-1">Level 1 — Preparation</div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">The 3 Mindset Shifts</h1>
        </div>

        <div className="mindset-container">
          {[
            { n: '01', f: 'Product Thinking', t: 'Client Thinking' },
            { n: '02', f: 'Activity', t: 'Impact' },
            { n: '03', f: 'Short-Term Thinking', t: 'Compounding Relationships' }
          ].map(shift => (
            <div key={shift.n} className="mindset-row">
              <div className="mindset-number">{shift.n}</div>
              <div className="mindset-content">
                <span>{shift.f}</span>
                <span>→</span>
                <span>{shift.t}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">CONVERSATION MODEL</div>
          <h1 className="slide-title">₹10,000 Crore Client Conversation Model</h1>
        </div>

        <div className="conversation-container">
          <div className="conversation-level level-1">
            <div className="conversation-left">
              <span>Level 1</span>
              <h3>Transaction Conversation</h3>
            </div>
            <div className="conversation-right">"What scheme should I invest in?"</div>
          </div>

          <div className="conversation-level level-2">
            <div className="conversation-left">
              <span>Level 2</span>
              <h3>Portfolio Conversation</h3>
            </div>
            <div className="conversation-right">"How is my portfolio performing?"</div>
          </div>

          <div className="conversation-level level-3">
            <div className="conversation-left">
              <span>Level 3</span>
              <h3>Wealth Conversation</h3>
            </div>
            <div className="conversation-right">"How do I build long-term wealth?"</div>
          </div>
        </div>

        <p className="slide-subtitle" style={{ marginTop: '40px', fontWeight: 800, color: '#D4AF37' }}>
          Move every client conversation up the levels.
        </p>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">5 Behaviours of a ₹10,000 Crore Firm</h1>
        </div>

        <div className="behaviours-container">
          {[
            { n: '01', t: 'Preparation first', d: 'Walk in over-prepared. Every meeting matters.' },
            { n: '02', t: 'Proactive communication', d: 'Reach clients before they wonder where you are.' },
            { n: '03', t: 'Conviction in long-term investing', d: 'Protect clients from their own short-term impulses.' },
            { n: '04', t: 'Relationship compounding', d: 'Every interaction is an investment in the relationship.' },
            { n: '05', t: 'Consistency of standards', d: 'The same quality, every time, for every client.' }
          ].map(beh => (
            <div key={beh.n} className="behaviour-card">
              <div className="behaviour-number">{beh.n}</div>
              <div className="behaviour-content">
                <h3>{beh.t}</h3>
                <p>{beh.d}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn} style={{ background: '#1E293B', color: '#fff' }}>
        <div className="slide-header">
          <h1 className="slide-title" style={{ color: '#fff' }}>The ₹10,000 Crore Equation</h1>
        </div>

        <div className="equation-banner">
          AUM Scalability = Client Trust × Consistency × Conviction × Referrals
        </div>

        <div className="equation-cards">
          {[
            { n: '1', t: 'Client Trust', d: 'Earned through clarity, consistency and time' },
            { n: '2', t: 'Consistency', d: 'Same standard at every market — bull or bear' },
            { n: '3', t: 'Conviction', d: 'Guiding clients to stay long-term disciplined' },
            { n: '4', t: 'Referrals', d: 'The proof that relationships have compounded' }
          ].map(card => (
            <div key={card.n} className="equation-card">
              <span className="equation-number">{card.n}</span>
              <h3 style={{ color: '#1E293B', fontSize: '20px' }}>{card.t}</h3>
              <p style={{ color: '#64748B', fontSize: '14px' }}>{card.d}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">₹10,000 Crore Journey Roadmap</h1>
        </div>

        <div className="roadmap-container">
          <div className="timeline">
            <div className="timeline-line"></div>
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="timeline-step">{n}</div>
            ))}
          </div>

          <div className="roadmap-stages">
            {[
              { s: '1', t: 'Distributor', d: 'Product-focused, transaction-driven' },
              { s: '2', t: 'Trusted Guide', d: 'Behaviour coaching, proactive communication' },
              { s: '3', t: 'Relationship Institution', d: 'Referral engine, compounding AUM' },
              { s: '4', t: 'Generational Wealth Platform', d: 'Legacy relationships across families' }
            ].map(stage => (
            <div key={stage.s} className="stage-card">
                <span className="stage-label">Stage {stage.s}</span>
                <h3 style={{ color: '#1E293B', fontSize: '20px', marginBottom: '12px' }}>{stage.t}</h3>
                <p style={{ color: '#64748B', fontSize: '14px' }}>{stage.d}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="quote-container">
          <div className="main-quote">
            "The stock market transfers money from the impatient to the patient."
          </div>
          <p className="quote-author">— Warren Buffett</p>

          <p className="quote-subtitle">Our role is to help clients:</p>

          <div className="quote-actions">
            <div className="action-card">Stay disciplined</div>
            <div className="action-card">Stay invested</div>
            <div className="action-card">Stay patient</div>
          </div>
        </div>
      </motion.div>

      {/* FINAL MANTRA */}
      <motion.div className="slide-section" style={{ background: '#D4AF37', color: '#fff', border: 'none' }} {...slideIn}>
        <h2 style={{ fontSize: '64px', marginBottom: '32px', fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>The ₹10,000 Crore Mindset</h2>
        <p style={{ fontSize: '36px', maxWidth: '900px', margin: '0 auto', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.4 }}>
          "If SNS was already a ₹10,000 Crore firm, how would we behave tomorrow morning?"
        </p>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="closing-slide">
          <p className="closing-text-light">
            The future of SNS will not be decided <br /> by markets or products.
          </p>
          <h2 className="closing-text-bold">
            It will be decided by the standards <br /> we set for ourselves.
          </h2>
          <hr className="closing-divider" />
          <p className="closing-highlight">Let us build the ₹10,000 Crore mindset.</p>
        </div>
      </motion.div>

      <motion.div className="slide-section" style={{ background: '#F8FAFC' }} {...slideIn}>
        <div className="cover-slide">
          <div className="cover-left">
            <div className="logo-container">
              <ShieldCheck size={80} color="#D4AF37" />
              <h3>Shah & Shah</h3>
            </div>
            <hr className="trust-divider" />
            <p className="trust-text">60+ YEARS OF TRUST</p>
          </div>

          <div className="cover-divider"></div>

          <div className="cover-right">
            <p className="cover-subtitle">Building the</p>
            <h1 className="cover-title">
              ₹10,000 <br /> Crore <br /> Mindset
            </h1>
            <p className="cover-footer">THE NEXT CHAPTER OF SNS GROUP</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Session04;
