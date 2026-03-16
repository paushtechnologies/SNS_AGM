import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  XCircle,
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
            <div className="slide-label" style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37' }}>SESSION 05 • THE VISION</div>
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
        <motion.div
          className="comparison-container"
          style={{ gridTemplateColumns: '1fr 1fr', gap: '20px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="comparison-card"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            style={{ borderTop: '4px solid #C53030', padding: '24px' }}
          >
            <div style={{ fontSize: '15px', fontWeight: 900, color: '#C53030', marginBottom: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>INVESTOR A</div>
            <XCircle size={48} color="#C53030" style={{ marginBottom: '16px', opacity: 0.8 }} />
            <p style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '16px', lineHeight: 1.4 }}>Panicked and exited <br />the market</p>
            <div style={{ background: '#FFF5F5', color: '#C53030', padding: '12px', borderRadius: '12px', fontSize: '19px', fontWeight: 800 }}>Outcome: Missed recovery ✗</div>
          </motion.div>
          <motion.div
            className="comparison-card"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            style={{ borderTop: '4px solid #2F855A', padding: '24px' }}
          >
            <div style={{ fontSize: '15px', fontWeight: 900, color: '#2F855A', marginBottom: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>INVESTOR B</div>
            <CheckCircle2 size={48} color="#2F855A" style={{ marginBottom: '16px', opacity: 0.8 }} />
            <p style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '16px', lineHeight: 1.4 }}>Stayed invested and <br />continued</p>
            <div style={{ background: '#F0FFF4', color: '#2F855A', padding: '12px', borderRadius: '12px', fontSize: '19px', fontWeight: 800 }}>Outcome: Created Wealth ✓</div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: '40px', textAlign: 'center', color: '#475569', fontSize: '20px', fontStyle: 'italic', maxWidth: '800px', margin: '40px auto 0', lineHeight: 1.5 }}
        >
          "The difference was behaviour — and behaviour is shaped by guidance."
        </motion.div>
      </motion.div>

      {/* WHAT WE ACTUALLY DO */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">OUR CORE ROLE</div>
          <h2 className="slide-title">What We Actually Do</h2>
          <p className="slide-subtitle">Our role is to help clients stay rational and disciplined.</p>
        </div>
        <motion.div
          className="grid3"
          style={{ gap: '20px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: <ShieldCheck size={40} />, t: 'Guidance', d: 'Helping clients make sound decisions in volatile markets.' },
            { icon: <TrendingUp size={40} />, t: 'Perspective', d: 'Framing short-term noise against long-term wealth goals.' },
            { icon: <Users size={40} />, t: 'Understanding', d: 'Knowing each client\'s behaviour, goals, and fears.' }
          ].map(item => (
            <motion.div
              key={item.t}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              className="comparison-card"
              style={{ textAlign: 'center', padding: '30px 20px' }}
            >
              <div style={{ color: '#D4AF37', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <h4 style={{ fontSize: '22px', fontWeight: 900, color: '#1E293B', marginBottom: '12px' }}>{item.t}</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '19px', fontWeight: 500 }}>{item.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* OUR FOUNDATION CARDS */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">OUR FOUNDATION</div>
          <h2 className="slide-title">The Foundation of SNS</h2>
        </div>
        <motion.div
          className="grid3"
          style={{ gap: '20px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: <History size={64} />, label: '60+ Years of Legacy' },
            { icon: <Users size={64} />, label: '3 Generations of Trust' },
            { icon: <InfiniteIcon size={64} />, label: 'Infinite Relationships' }
          ].map(item => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              className="comparison-card"
              style={{ textAlign: 'center', padding: '40px 20px' }}
            >
              <div style={{ color: '#D4AF37', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <div style={{ color: '#1E293B', fontSize: '22px', fontWeight: 900 }}>{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '18px', fontWeight: 500 }}>
            <span style={{ color: '#B8860B', fontWeight: 900 }}>Trust is our strongest asset.</span> Mindset converts trust into scale.
          </p>
        </div>
      </motion.div>

      <motion.div className="slide-section" style={{ background: '#1E293B', color: '#fff', padding: '80px 40px' }} {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title" style={{ color: '#fff', fontSize: '48px', marginBottom: '40px' }}>Why do most distribution firms never scale?</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="slide-label" style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#FCA5A5', border: '1px solid rgba(220,38,38,0.3)' }}>✗  Not markets!</motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="slide-label" style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#FCA5A5', border: '1px solid rgba(220,38,38,0.3)' }}>✗  Not products!</motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ fontSize: '36px', fontWeight: 900, textAlign: 'center', color: '#D4AF37' }}
        >
          The biggest limitation is MINDSET.
        </motion.p>
      </motion.div>


      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">KEY CONCEPT</div>
          <h1 className="slide-title">Grow vs Scale</h1>
        </div>

        <div className="comparison-container" style={{ gap: '15px' }}>
          <motion.div
            className="comparison-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ padding: '24px' }}
          >
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Growth</h2>
            <motion.ul
              style={{ listStyle: 'none', padding: 0 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Linear expansion',
                'Requires more effort & resources',
                'Driven by transactions',
                'More clients → more meetings → more AUM'
              ].map(item => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                  style={{ marginBottom: '12px', fontSize: '19px', color: '#475569', fontWeight: 600 }}
                >
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <div className="comparison-arrow">→</div>

          <motion.div
            className="comparison-card"
            style={{ border: '2px solid #D4AF37', padding: '24px' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ color: '#D4AF37', fontSize: '24px', marginBottom: '20px' }}>Scale</h2>
            <motion.ul
              style={{ listStyle: 'none', padding: 0 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Exponential expansion',
                'Driven by systems & reputation',
                'Powered by relationships & referrals',
                'Trust + Referrals + Systems → Exponential AUM'
              ].map(item => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
                  style={{ marginBottom: '12px', fontSize: '19px', color: '#1E293B', fontWeight: 700 }}
                >
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">CASE STUDIES</div>
          <h1 className="slide-title">Lessons from the World's Best</h1>
        </div>

        <motion.div
          className="case-studies-container"
          style={{ gap: '15px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              id: 'amazon',
              h1: 'Amazon',
              h2: 'Client Obsession',
              p1: 'Every decision starts with:',
              p2: '"What is best for the customer?"',
              p3: 'The scale desired, comes from relentless focus on the client.'
            },
            {
              id: 'fidelity',
              h1: 'Fidelity',
              h2: 'Proactive Communication',
              p1: 'Clients left not due to poor returns — but because they felt ignored.',
              p2: 'Proactive communication builds trust.',
              p3: ''
            },
            {
              id: 'toyota',
              h1: 'Toyota',
              h2: 'Kaizen',
              p1: 'Small improvements every day create massive long-term scale. Consistency compounds into competitive advantage.',
              p2: '1.01^365 = 37.8',
              p3: 'vs 1^365 = 1'
            }
          ].map(caseStudy => (
            <motion.div
              key={caseStudy.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -8, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              className={`case-card ${caseStudy.id}`}
              style={{ padding: '24px' }}
            >
              <h2 style={{ fontSize: '26px' }}>{caseStudy.h1}</h2>
              <h4 style={{ fontSize: '18px', marginBottom: '16px' }}>{caseStudy.h2}</h4>
              <p style={{ fontSize: '16px' }}>{caseStudy.p1}</p>
              <p style={{ fontWeight: 800, fontSize: '20px', margin: '10px 0' }}>{caseStudy.p2}</p>
              {caseStudy.p3 && <p style={{ fontSize: '18px' }}>{caseStudy.p3}</p>}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">The Distribution Trap</h1>
        </div>

        <div className="trapped-scaling-container" style={{ gap: '20px' }}>
          <motion.div
            className="flow-section"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ padding: '24px' }}
          >
            <p style={{ fontSize: '16px', fontWeight: 900, color: '#C53030', marginBottom: '16px' }}>TRAPPED FIRMS</p>
            <div className="flow-row" style={{ gap: '10px' }}>
              <div className="flow-box" style={{ padding: '12px 20px', fontSize: '16px' }}>Product</div>
              <span>→</span>
              <div className="flow-box" style={{ padding: '12px 20px', fontSize: '16px' }}>Transaction</div>
              <span>→</span>
              <div className="flow-box" style={{ padding: '12px 20px', fontSize: '18px' }}>Commission</div>
            </div>
          </motion.div>

          <motion.div
            className="flow-section"
            style={{ border: '1px solid #D4AF37', padding: '24px' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#D4AF37', fontSize: '16px', fontWeight: 900, marginBottom: '16px' }}>SCALING FIRMS</p>
            <div className="flow-row" style={{ gap: '10px' }}>
              <div className="flow-box" style={{ padding: '12px 20px', fontSize: '16px' }}>Client</div>
              <span>→</span>
              <div className="flow-box" style={{ padding: '12px 20px', fontSize: '16px' }}>Relationship</div>
              <span>→</span>
              <div className="flow-box" style={{ padding: '12px 20px', fontSize: '18px' }}>Compounding</div>
            </div>
          </motion.div>
        </div>

        <p className="slide-subtitle" style={{ marginTop: '40px', fontWeight: 700, fontSize: '18px' }}>
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

        <motion.div
          className="formula-row"
          style={{ gap: '10px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { t: 'Clarity', d: 'Clear, jargon-free communication' },
            { t: 'Consistency', d: 'Reliable presence across markets' },
            { t: 'Communication', d: 'Proactive, not reactive touch' },
            { t: 'Time', d: 'Compounding requires patience' }
          ].map((item, idx) => (
            <React.Fragment key={item.t}>
              <motion.div
                className="formula-box"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -5, background: '#fff' }}
                style={{ padding: '20px', flex: 1 }}
              >
                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{item.t}</h3>
                <p style={{ fontSize: '17px' }}>{item.d}</p>
              </motion.div>
              {idx < 3 && <span style={{ fontSize: '24px', color: '#D4AF37' }}>+</span>}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          className="trust-result"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          style={{ marginTop: '40px', padding: '30px' }}
        >
          <h2 style={{ fontSize: '36px' }}>= TRUST</h2>
          <p style={{ fontSize: '18px', margin: 0 }}>The compound interest of human relationships.</p>
        </motion.div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">The Wealth Flywheel</h1>
          <p className="slide-subtitle">Once the flywheel spins, growth becomes self-reinforcing.</p>
        </div>

        <div className="flywheel-container" style={{ transform: 'scale(0.9)' }}>
          <motion.div
            className="flywheel-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <p style={{ fontSize: '14px', margin: 0 }}>SELF-REINFORCING</p>
            <p style={{ fontSize: '18px', color: '#D4AF37', margin: 0 }}>GROWTH</p>
          </motion.div>

          {[
            { t: 'Client Trust', d: 'Foundation', c: 'client-trust' },
            { t: 'Better Guidance', d: 'Informed advice', c: 'better-guidance' },
            { t: 'Better Behaviour', d: 'Client action', c: 'better-behaviour' },
            { t: 'Better Outcomes', d: 'Real results', c: 'better-outcomes' },
            { t: 'Client Confidence', d: 'Felt security', c: 'client-confidence' },
            { t: 'Referrals', d: 'Word of mouth', c: 'referrals' },
            { t: 'Net Inflows', d: 'Capital growth', c: 'net-inflows' },
            { t: 'AUM Growth', d: 'Scale & capacity', c: 'aum-growth' }
          ].map((item, idx) => (
            <motion.div
              key={item.t}
              className={`flywheel-item ${item.c}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <h4 style={{ fontSize: '16px' }}>{item.t}</h4>
              <p style={{ fontSize: '16px' }}>{item.d}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '16px', height: '16px', background: '#D4AF37', borderRadius: '4px' }}></div>
            <p style={{ fontSize: '12px', fontWeight: 700, margin: 0 }}>Business outcomes</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '16px', height: '16px', background: '#1E293B', borderRadius: '4px' }}></div>
            <p style={{ fontSize: '12px', fontWeight: 700, margin: 0 }}>Client experience</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">CAPABILITY PYRAMID</div>
          <h1 className="slide-title">₹10,000 Crore Capability Pyramid</h1>
          <p className="slide-subtitle">Strong foundations create scalable trust.</p>
        </div>

        <motion.div
          className="pyramid-container"
          style={{ transform: 'scale(0.95)' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { l: 5, t: 'Level 5 — Legacy Relationships' },
            { l: 4, t: 'Level 4 — Relationship Compounding' },
            { l: 3, t: 'Level 3 — Consistent Engagement' },
            { l: 2, t: 'Level 2 — Deep Client Understanding' },
            { l: 1, t: 'Level 1 — Preparation' }
          ].map(level => (
            <motion.div
              key={level.l}
              className={`pyramid-level level-${level.l}`}
              variants={{
                hidden: { opacity: 0, scaleX: 0.8 },
                visible: { opacity: 1, scaleX: 1 }
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              style={{ fontSize: '22px', padding: '15px' }}
            >
              {level.t}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">The 3 Mindset Shifts</h1>
        </div>

        <motion.div
          className="mindset-container"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { n: '01', f: 'Product Thinking', t: 'Client Thinking' },
            { n: '02', f: 'Activity', t: 'Impact' },
            { n: '03', f: 'Short-Term Thinking', t: 'Compounding Relationships' }
          ].map(shift => (
            <motion.div
              key={shift.n}
              className="mindset-row"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ x: 10 }}
              style={{ padding: '15px 0' }}
            >
              <div className="mindset-number" style={{ width: '40px', height: '40px', fontSize: '16px' }}>{shift.n}</div>
              <div className="mindset-content" style={{ fontSize: '22px' }}>
                <span style={{ opacity: 0.6 }}>{shift.f}</span>
                <span style={{ color: 'var(--gold)' }}>→</span>
                <span style={{ fontWeight: 800 }}>{shift.t}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <div className="slide-label">CONVERSATION MODEL</div>
          <h1 className="slide-title">₹10,000 Crore Client Conversation Model</h1>
        </div>

        <motion.div
          className="conversation-container"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { l: 1, t: 'Transaction Conversation', q: '"What scheme should I invest in?"' },
            { l: 2, t: 'Portfolio Conversation', q: '"How is my portfolio performing?"' },
            { l: 3, t: 'Wealth Conversation', q: '"How do I build long-term wealth?"' }
          ].map(level => (
            <motion.div
              key={level.l}
              className={`conversation-level level-${level.l}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ x: 10, background: 'rgba(212, 175, 55, 0.05)' }}
              style={{ padding: '20px' }}
            >
              <div className="conversation-left">
                <span style={{ fontSize: '12px' }}>Level {level.l}</span>
                <h3 style={{ fontSize: '18px' }}>{level.t}</h3>
              </div>
              <div className="conversation-right" style={{ fontSize: '18px' }}>{level.q}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="slide-subtitle"
          style={{ marginTop: '30px', fontWeight: 800, color: '#D4AF37', fontSize: '18px' }}
        >
          Move every client conversation up the levels.
        </motion.p>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">5 Behaviours of a ₹10,000 Crore Firm</h1>
        </div>

        <motion.div
          className="behaviours-container"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { n: '01', t: 'Preparation first', d: 'Walk in over-prepared. Every meeting matters.' },
            { n: '02', t: 'Proactive communication', d: 'Reach clients before they wonder where you are.' },
            { n: '03', t: 'Conviction in long-term investing', d: 'Protect clients from their own short-term impulses.' },
            { n: '04', t: 'Relationship compounding', d: 'Every interaction is an investment in the relationship.' },
            { n: '05', t: 'Consistency of standards', d: 'The same quality, every time, for every client.' }
          ].map(beh => (
            <motion.div
              key={beh.n}
              className="behaviour-card"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ x: 10, background: '#fff' }}
              style={{ padding: '15px' }}
            >
              <div className="behaviour-number" style={{ width: '40px', height: '40px', fontSize: '16px' }}>{beh.n}</div>
              <div className="behaviour-content">
                <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{beh.t}</h3>
                <p style={{ fontSize: '18px' }}>{beh.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn} style={{ background: '#1E293B', color: '#fff', padding: '60px 40px' }}>
        <div className="slide-header">
          <h1 className="slide-title" style={{ color: '#fff', fontSize: '36px' }}>The ₹10,000 Crore Equation</h1>
        </div>

        <motion.div
          className="equation-banner"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          style={{ fontSize: '24px', padding: '30px', marginBottom: '40px' }}
        >
          AUM Scalability = Client Trust × Consistency × Conviction × Referrals
        </motion.div>

        <motion.div
          className="equation-cards"
          style={{ gap: '15px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { n: '1', t: 'Client Trust', d: 'Earned through clarity, consistency and time' },
            { n: '2', t: 'Consistency', d: 'Same standard at every market — bull or bear' },
            { n: '3', t: 'Conviction', d: 'Guiding clients to stay long-term disciplined' },
            { n: '4', t: 'Referrals', d: 'The proof that relationships have compounded' }
          ].map(card => (
            <motion.div
              key={card.n}
              className="equation-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, background: '#fff' }}
              style={{ padding: '20px' }}
            >
              <span className="equation-number" style={{ width: '32px', height: '32px', fontSize: '14px' }}>{card.n}</span>
              <h3 style={{ color: '#1E293B', fontSize: '18px', marginBottom: '8px' }}>{card.t}</h3>
              <p style={{ color: '#64748B', fontSize: '16px' }}>{card.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header">
          <h1 className="slide-title">₹10,000 Crore Journey Roadmap</h1>
        </div>

        <div className="roadmap-container" style={{ transform: 'scale(0.95)' }}>
          <div className="timeline">
            <div className="timeline-line"></div>
            {[1, 2, 3, 4].map(n => (
              <motion.div
                key={n}
                className="timeline-step"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: n * 0.2 }}
              >
                {n}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="roadmap-stages"
            style={{ gap: '15px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { s: '1', t: 'Distributor', d: 'Product-focused, transaction-driven' },
              { s: '2', t: 'Trusted Guide', d: 'Behaviour coaching, proactive communication' },
              { s: '3', t: 'Relationship Institution', d: 'Referral engine, compounding AUM' },
              { s: '4', t: 'Generational Wealth Platform', d: 'Legacy relationships across families' }
            ].map(stage => (
              <motion.div
                key={stage.s}
                className="stage-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                style={{ padding: '20px' }}
              >
                <span className="stage-label" style={{ fontSize: '10px' }}>Stage {stage.s}</span>
                <h3 style={{ color: '#1E293B', fontSize: '18px', marginBottom: '8px' }}>{stage.t}</h3>
                <p style={{ color: '#64748B', fontSize: '13px' }}>{stage.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <motion.div
          className="quote-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          style={{ padding: '60px 40px' }}
        >
          <div className="main-quote" style={{ fontSize: '32px', marginBottom: '24px' }}>
            "The stock market transfers money from the impatient to the patient."
          </div>
          <p className="quote-author" style={{ fontSize: '20px' }}>— Warren Buffett</p>

          <p className="quote-subtitle" style={{ fontSize: '18px', marginTop: '40px' }}>Our role is to help clients:</p>

          <motion.div
            className="quote-actions"
            style={{ gap: '15px', marginTop: '24px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Stay disciplined', 'Stay invested', 'Stay patient'].map(action => (
              <motion.div
                key={action}
                className="action-card"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1, background: 'var(--gold)', color: 'white' }}
                style={{ padding: '15px 30px', fontSize: '18px' }}
              >
                {action}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* FINAL MANTRA */}
      <motion.div className="slide-section" style={{ background: '#D4AF37', color: '#fff', border: 'none', padding: '100px 40px' }} {...slideIn}>
        <h2 style={{ fontSize: '48px', marginBottom: '24px', fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>The ₹10,000 Crore Mindset</h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: '28px', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.4 }}
        >
          "If SNS was already a ₹10,000 Crore firm, how would we behave tomorrow morning?"
        </motion.p>
      </motion.div>

      <motion.div className="slide-section" {...slideIn} style={{ padding: '100px 40px' }}>
        <div className="closing-slide">
          <p className="closing-text-light" style={{ fontSize: '20px', marginBottom: '20px' }}>
            The future of SNS will not be decided <br /> by markets or products.
          </p>
          <h2 className="closing-text-bold" style={{ fontSize: '36px', marginBottom: '30px' }}>
            It will be decided by the standards <br /> we set for ourselves.
          </h2>
          <hr className="closing-divider" style={{ width: '80px', margin: '0 auto 30px' }} />
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="closing-highlight"
            style={{ fontSize: '24px' }}
          >
            Let us build the ₹10,000 Crore mindset.
          </motion.p>
        </div>
      </motion.div>

      <motion.div className="slide-section" style={{ background: '#F8FAFC', padding: '80px 40px' }} {...slideIn}>
        <div className="cover-slide" style={{ gap: '40px' }}>
          <div className="cover-left" style={{ flex: 1 }}>
            <div className="logo-container">
              <ShieldCheck size={64} color="#D4AF37" />
              <h3 style={{ fontSize: '24px' }}>Shah & Shah</h3>
            </div>
            <hr className="trust-divider" style={{ width: '40px', margin: '20px 0' }} />
            <p className="trust-text" style={{ fontSize: '12px' }}>60+ YEARS OF TRUST</p>
          </div>

          <div className="cover-divider" style={{ width: '2px', height: '150px' }}></div>

          <div className="cover-right" style={{ flex: 2 }}>
            <p className="cover-subtitle" style={{ fontSize: '18px' }}>Building the</p>
            <h1 className="cover-title" style={{ fontSize: '48px', lineHeight: 1.1 }}>
              ₹10,000 <br /> Crore <br /> Mindset
            </h1>
            <p className="cover-footer" style={{ fontSize: '12px', marginTop: '20px' }}>THE NEXT CHAPTER OF SNS GROUP</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Session04;
