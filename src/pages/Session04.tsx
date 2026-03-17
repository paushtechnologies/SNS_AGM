import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  Search,
  MessageSquare,
  TrendingUp,
  XCircle,
  CheckCircle2,
  ShieldCheck,
  History,
  Infinity as InfiniteIcon,
  Package,
  Zap,
  Target,
  ArrowRight
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
          background: 'linear-gradient(90deg, #1a202c 0%, #744210 100%)',
          borderTop: 'none',
          color: '#FFFFFF',
          padding: '80px 50px'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ flex: '1.2' }}>
            <div className="slide-label" style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37', marginBottom: '8px', fontSize: '14px', padding: '8px 20px' }}>SESSION 05 • THE VISION</div>
            <h1 className="slide-title" style={{
              fontSize: '48px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px'
            }}>
              Elevate, Multiply & Scale.
            </h1>
            <p className="slide-subtitle" style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'left', margin: '0', fontSize: '20px' }}>
              Building the ₹10,000 Crore Mindset. The next chapter of SNS Group starts with a transformation in how we behave.
            </p>
          </div>
          <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                width: '180px', height: '180px',
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
                width: '140px', height: '140px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <TrendingUp size={60} color="#D4AF37" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ORIGIN STORY: THE BEHAVIOURAL GAP */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '16px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 16px' }}>ORIGIN STORY</div>
          <div style={{
            background: '#1E293B',
            padding: '16px 40px',
            borderRadius: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            width: 'fit-content',
            margin: '0 auto 25px',
            border: '2px solid #D4AF37',
            boxShadow: '0 20px 40px rgba(30, 41, 59, 0.2)',
            position: 'relative'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
            }}>
              <History size={28} color="#1E293B" strokeWidth={3} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h3 style={{
                fontSize: '36px',
                color: '#fff',
                fontWeight: 900,
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1,
                letterSpacing: '-1px'
              }}>
                March 2020
              </h3>
            </div>
          </div>
          <h2 className="slide-title" style={{ fontSize: '32px' }}>The Behavioural Gap</h2>
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
            style={{ borderTop: '4px solid #C53030', padding: '16px' }}
          >
            <div style={{ fontSize: '20px', fontWeight: 900, color: '#C53030', marginBottom: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>INVESTOR A</div>
            <XCircle size={48} color="#C53030" style={{ marginBottom: '8px', opacity: 0.8 }} />
            <p style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '8px', lineHeight: 1.4 }}>Panicked and exited <br />the market</p>
            <div style={{ background: '#FFF5F5', color: '#C53030', padding: '12px', borderRadius: '12px', fontSize: '19px', fontWeight: 800 }}>Outcome: Missed recovery ✗</div>
          </motion.div>
          <motion.div
            className="comparison-card"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            style={{ borderTop: '4px solid #2F855A', padding: '16px' }}
          >
            <div style={{ fontSize: '20px', fontWeight: 900, color: '#2F855A', marginBottom: '6px', letterSpacing: '2px', textTransform: 'uppercase' }}>INVESTOR B</div>
            <CheckCircle2 size={48} color="#2F855A" style={{ marginBottom: '16px', opacity: 0.8 }} />
            <p style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '16px', lineHeight: 1.4 }}>Stayed invested and <br />continued</p>
            <div style={{ background: '#F0FFF4', color: '#2F855A', padding: '12px', borderRadius: '12px', fontSize: '19px', fontWeight: 800 }}>Outcome: Created Wealth ✓</div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: '20px',
            padding: '24px 30px',
            background: '#1E293B',
            borderRadius: '32px',
            boxShadow: '0 20px 50px rgba(30, 41, 59, 0.15)',
            textAlign: 'center',
            position: 'relative',
            maxWidth: '900px',
            margin: '20px auto 0'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '5px',
            left: '30px',
            fontSize: '80px',
            color: 'rgba(212, 175, 55, 0.1)',
            fontFamily: 'serif',
            lineHeight: 1
          }}>“</div>
          <p style={{
            color: '#D4AF37',
            fontSize: '24px',
            fontWeight: 900,
            fontStyle: 'italic',
            lineHeight: 1.3,
            margin: 0,
            position: 'relative',
            zIndex: 1
          }}>
            "The difference was behaviour — and behaviour is shaped by guidance."
          </p>
        </motion.div>
      </motion.div>

      {/* WHAT WE ACTUALLY DO */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '16px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>OUR CORE ROLE</div>
          <h2 className="slide-title" style={{ fontSize: '32px' }}>What We Actually Do</h2>
          <p className="slide-subtitle" style={{ fontSize: '24px', fontWeight: 600 }}>Our role is to help clients stay rational and disciplined.</p>
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
              whileHover={{ y: -10, boxShadow: '0 20px 45px rgba(0,0,0,0.12)' }}
              className="comparison-card"
              style={{ textAlign: 'center', padding: '16px', borderRadius: '24px' }}
            >
              <div style={{ color: '#D4AF37', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                {React.cloneElement(item.icon, { size: 48 })}
              </div>
              <h4 style={{ fontSize: '26px', fontWeight: 900, color: '#1E293B', marginBottom: '16px' }}>{item.t}</h4>
              <p style={{ color: '#475569', lineHeight: 1.5, fontSize: '21px', fontWeight: 600 }}>{item.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* OUR FOUNDATION CARDS */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '16px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>OUR FOUNDATION</div>
          <h2 className="slide-title" style={{ fontSize: '32px' }}>The Foundation of SNS</h2>
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
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="comparison-card"
              style={{ textAlign: 'center', padding: '20px', borderRadius: '24px' }}
            >
              <div style={{ color: '#D4AF37', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                {React.cloneElement(item.icon, { size: 72 })}
              </div>
              <div style={{ color: '#1E293B', fontSize: '22px', fontWeight: 900, letterSpacing: '0.5px' }}>{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <p style={{ color: '#475569', lineHeight: 1.4, fontSize: '32px', fontWeight: 500 }}>
            <span style={{ color: '#B8860B', fontWeight: 900 }}>Trust is our strongest asset.</span> Mindset converts trust into scale.
          </p>
        </div>
      </motion.div>

      <motion.div className="slide-section" style={{ background: '#1E293B', color: '#fff', padding: '24px 20px' }} {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '16px' }}>
          <div className="slide-label" style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37', marginBottom: '8px' }}>THE LIMITATION</div>
          <h1 className="slide-title" style={{ color: '#fff', fontSize: '32px', marginBottom: '12px' }}>Why do most distribution firms never scale?</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '24px' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="slide-label" style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#FCA5A5', border: '1px solid rgba(220,38,38,0.3)', marginBottom: '0' }}>✗  Not markets!</motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="slide-label" style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#FCA5A5', border: '1px solid rgba(220,38,38,0.3)', marginBottom: '0' }}>✗  Not products!</motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ fontSize: '28px', fontWeight: 900, textAlign: 'center', color: '#D4AF37' }}
        >
          The biggest limitation is MINDSET.
        </motion.p>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '32px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>KEY CONCEPT</div>
          <h1 className="slide-title" style={{ fontSize: '42px', marginBottom: '12px' }}>Grow vs Scale</h1>
          <p className="slide-subtitle" style={{ fontSize: '22px', fontWeight: 600 }}>Scale is not just "more growth" — it's a completely different trajectory powered by systems and trust.</p>
        </div>

        <div className="comparison-container" style={{ gap: '32px' }}>
          <motion.div
            className="comparison-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(197, 48, 48, 0.12)' }}
            style={{
              background: 'linear-gradient(135deg, #FFF5F5 0%, #FED7D7 100%)',
              border: '2px solid #FC8181',
              borderRadius: '32px',
              padding: '32px'
            }}
          >
            <span style={{ color: '#C53030', fontWeight: 900, fontSize: '18px', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Traditional Path</span>
            <h2 style={{ fontSize: '48px', color: '#1E293B', marginBottom: '24px', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>Growth</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Linear expansion',
                'Requires more effort & resources',
                'Driven by transactions',
                'More clients → more meetings → more AUM'
              ].map(item => (
                <li key={item} style={{
                  padding: '12px 0',
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '1px solid rgba(197, 48, 48, 0.1)'
                }}>
                  <span style={{ color: '#C53030', fontWeight: 900 }}>→</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="comparison-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(47, 133, 90, 0.12)' }}
            style={{
              background: 'linear-gradient(135deg, #F0FFF4 0%, #C6F6D5 100%)',
              border: '2px solid #68D391',
              borderRadius: '32px',
              padding: '32px'
            }}
          >
            <span style={{ color: '#2F855A', fontWeight: 900, fontSize: '18px', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>The ₹10,000 Cr Path</span>
            <h2 style={{ fontSize: '48px', color: '#1E293B', marginBottom: '24px', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>Scale</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Exponential expansion',
                'Driven by systems & reputation',
                'Powered by relationships & referrals',
                'Trust + Referrals + Systems → Exponential AUM'
              ].map(item => (
                <li key={item} style={{
                  padding: '12px 0',
                  fontSize: '19px',
                  fontWeight: 800,
                  color: '#1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '1px solid rgba(47, 133, 90, 0.1)'
                }}>
                  <span style={{ color: '#2F855A', fontWeight: 900 }}>→</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '16px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>CASE STUDIES</div>
          <h1 className="slide-title" style={{ fontSize: '32px' }}>Lessons from the World's Best</h1>
        </div>

        <motion.div
          className="case-studies-container"
          style={{ gap: '12px', marginTop: '12px' }}
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

      <motion.div className="slide-section" {...slideIn} style={{ padding: '30px 40px' }}>
        <div className="slide-header" style={{ marginBottom: '20px' }}>
          <h1 className="slide-title" style={{ fontSize: '42px', fontWeight: 900 }}>The Distribution Trap</h1>
          <p className="slide-subtitle" style={{ fontSize: '20px', fontWeight: 500 }}>Where you focus determines where you finish.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          padding: '10px 20px'
        }}>
          {/* TRAPPED FIRMS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #fff1f2 100%)',
              padding: '30px',
              borderRadius: '40px',
              border: '2px solid #FECACA',
              boxShadow: '0 25px 50px -12px rgba(153, 27, 27, 0.08)'
            }}
          >
            <div style={{ color: '#E11D48', fontWeight: 900, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px', textAlign: 'center' }}>
              Trapped Firms
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <div style={{ padding: '14px 20px', background: '#fff', borderRadius: '16px', border: '1.5px solid #FDA4AF', width: '100%', textAlign: 'center', fontSize: '24px', fontWeight: 900, color: '#1E293B', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                Product
              </div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight style={{ transform: 'rotate(90deg)', color: '#E11D48', opacity: 0.6 }} size={32} strokeWidth={3} />
              </motion.div>
              <div style={{ padding: '14px 20px', background: '#fff', borderRadius: '16px', border: '1.5px solid #FDA4AF', width: '100%', textAlign: 'center', fontSize: '24px', fontWeight: 900, color: '#1E293B', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                Transaction
              </div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight style={{ transform: 'rotate(90deg)', color: '#E11D48', opacity: 0.6 }} size={32} strokeWidth={3} />
              </motion.div>
              <div style={{
                padding: '20px 30px',
                background: '#E11D48',
                borderRadius: '20px',
                width: '100%',
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: 900,
                color: '#fff',
                boxShadow: '0 10px 30px rgba(225, 29, 72, 0.3)'
              }}>
                Commission
              </div>
            </div>
          </motion.div>

          {/* SCALING FIRMS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #f0fdf4 100%)',
              padding: '30px',
              borderRadius: '40px',
              border: '2px solid #BBF7D0',
              boxShadow: '0 25px 50px -12px rgba(22, 101, 52, 0.08)'
            }}
          >
            <div style={{ color: '#16A34A', fontWeight: 900, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px', textAlign: 'center' }}>
              Scaling Firms
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <div style={{ padding: '14px 20px', background: '#fff', borderRadius: '16px', border: '1.5px solid #86EFAC', width: '100%', textAlign: 'center', fontSize: '24px', fontWeight: 900, color: '#1E293B', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                Client
              </div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight style={{ transform: 'rotate(90deg)', color: '#16A34A', opacity: 0.6 }} size={32} strokeWidth={3} />
              </motion.div>
              <div style={{ padding: '14px 20px', background: '#fff', borderRadius: '16px', border: '1.5px solid #86EFAC', width: '100%', textAlign: 'center', fontSize: '24px', fontWeight: 900, color: '#1E293B', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                Relationship
              </div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight style={{ transform: 'rotate(90deg)', color: '#16A34A', opacity: 0.6 }} size={32} strokeWidth={3} />
              </motion.div>
              <div style={{
                padding: '20px 30px',
                background: '#16A34A',
                borderRadius: '20px',
                width: '100%',
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: 900,
                color: '#fff',
                boxShadow: '0 10px 30px rgba(22, 163, 74, 0.3)'
              }}>
                Compounding
              </div>
            </div>
          </motion.div>
        </div>

        <p style={{ marginTop: '20px', fontWeight: 800, fontSize: '24px', color: '#1E293B', textAlign: 'center', background: 'rgba(212, 175, 55, 0.1)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          "The scale of your firm is limited by the standard of your thinking."
        </p>
      </motion.div>

      <motion.div className="slide-section" {...slideIn} style={{ padding: '40px' }}>
        <div className="slide-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div className="slide-label" style={{ marginBottom: '12px', fontSize: '24px', padding: '6px 20px' }}>THE FORMULA</div>
          <h1 className="slide-title" style={{ fontSize: '42px', fontWeight: 900 }}>Trust Compounding Formula</h1>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          width: '100%',
          flexWrap: 'nowrap'
        }}>
          {[
            { t: 'Clarity', d: 'No Jargon' },
            { t: 'Consistency', d: 'Never Miss' },
            { t: 'Connection', d: 'Proactive' },
            { t: 'Time', d: 'Patience' }
          ].map((item, i) => (
            <React.Fragment key={item.t}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  padding: '24px 20px',
                  borderRadius: '24px',
                  border: '1.5px solid #E2E8F0',
                  textAlign: 'center',
                  minWidth: '160px'
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#1E293B', marginBottom: '8px' }}>{item.t}</div>
                <p style={{ fontSize: '16px', color: '#64748B', margin: 0, fontWeight: 700 }}>{item.d}</p>
              </motion.div>
              {i < 3 && (
                <div style={{ color: '#D4AF37', fontSize: '32px', fontWeight: 900 }}>+</div>
              )}
            </React.Fragment>
          ))}

          <div style={{ margin: '0 10px', fontSize: '32px', color: '#D4AF37', fontWeight: 900 }}>=</div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            style={{
              flex: 1.2,
              background: '#1E293B',
              padding: '20px 20px',
              borderRadius: '24px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              border: '2px solid #D4AF37'
            }}
          >
            <h2 style={{ color: '#D4AF37', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>Trust</h2>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="slide-section flywheel-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '12px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>GROWTH ENGINE</div>
          <h1 className="slide-title" style={{ fontSize: '28px', marginBottom: '4px' }}>The Wealth Flywheel</h1>
          <p className="slide-subtitle" style={{ fontSize: '16px' }}>Once the flywheel spins, growth becomes self-reinforcing and exponential.</p>
        </div>

        <div className="flywheel-wrapper">
          {/* Animated SVG Flow Ring */}
          <svg className="flywheel-svg-flow" viewBox="0 0 480 480" style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            <motion.circle
              cx="240"
              cy="240"
              r="175"
              fill="none"
              stroke="rgba(212, 175, 55, 0.1)"
              strokeWidth="2"
              strokeDasharray="10 25"
              animate={{ strokeDashoffset: [0, -35] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="240"
              cy="240"
              r="175"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeDasharray="60 400"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: 'center' }}
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated decorative rings */}
          <motion.div
            className="flywheel-outer-ring"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="flywheel-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(212, 175, 55, 0.2)",
                "0 0 50px rgba(212, 175, 55, 0.4)",
                "0 0 30px rgba(212, 175, 55, 0.2)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="flywheel-center-ring"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <p style={{ fontSize: '11px', fontWeight: 600, margin: 0, letterSpacing: '2px', opacity: 0.8 }}>SELF-REINFORCING</p>
            <p style={{ fontSize: '24px', color: '#D4AF37', fontWeight: 900, margin: '2px 0', textShadow: '0 0 10px rgba(212,175,55,0.4)' }}>GROWTH</p>
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
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: idx * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 10
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)"
              }}
            >
              <h4>{item.t}</h4>
              <p>{item.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="flywheel-legend">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '12px', background: '#D4AF37', borderRadius: '4px' }}></div>
            <p style={{ fontSize: '16px', fontWeight: 800, color: '#1E293B', margin: 0 }}>Business Outcomes</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '12px', background: '#1E293B', borderRadius: '4px' }}></div>
            <p style={{ fontSize: '16px', fontWeight: 800, color: '#1E293B', margin: 0 }}>Client Experience</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" style={{ padding: '20px' }} {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '12px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>CAPABILITY PYRAMID</div>
          <h1 className="slide-title" style={{ fontSize: '28px' }}>₹10,000 Crore Capability Pyramid</h1>
          <p className="slide-subtitle" style={{ fontSize: '16px' }}>Strong foundations create scalable trust.</p>
        </div>

        <div className="pyramid-wrap-container" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <div className="pyramid-glow-bg"></div>

          <motion.div
            className="pyramid-wrap"
            variants={{
              visible: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { l: 5, t: 'Level 5 — Legacy Relationships', icon: <Award size={18} /> },
              { l: 4, t: 'Level 4 — Relationship Compounding', icon: <TrendingUp size={18} /> },
              { l: 3, t: 'Level 3 — Consistent Engagement', icon: <MessageSquare size={18} /> },
              { l: 2, t: 'Level 2 — Deep Client Understanding', icon: <Users size={18} /> },
              { l: 1, t: 'Level 1 — Preparation', icon: <Search size={18} /> }
            ].map((level) => (
              <motion.div
                key={level.l}
                className={`pyramid-segment lv${level.l}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                {level.l === 5 && <div className="shimmer-peak"></div>}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', zIndex: 10 }}>
                  <span style={{ opacity: 0.8 }}>{level.icon}</span>
                  <span>{level.t}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn} style={{ padding: '30px 40px' }}>
        <div className="slide-header" style={{ marginBottom: '25px' }}>
          <h1 className="slide-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            The 3 <span style={{ background: '#F97316', color: '#fff', padding: '4px 20px', borderRadius: '12px', boxShadow: '0 10px 20px rgba(249, 115, 22, 0.2)' }}>Mindset</span> Shifts
          </h1>
        </div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              n: '1',
              f: 'Product Thinking',
              t: 'Client Thinking',
              fIcon: <Package size={36} />,
              tIcon: <Users size={36} />,
              bg: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)'
            },
            {
              n: '2',
              f: 'Activity',
              t: 'Impact',
              fIcon: <Zap size={36} />,
              tIcon: <Target size={36} />,
              bg: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)'
            },
            {
              n: '3',
              f: 'Short-Term Thinking',
              t: 'Compounding Relationships',
              fIcon: <History size={36} />,
              tIcon: <TrendingUp size={36} />,
              bg: 'linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)'
            }
          ].map(shift => (
            <motion.div
              key={shift.n}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              style={{
                background: shift.bg,
                padding: '25px 30px',
                borderRadius: '32px',
                border: '1.5px solid rgba(0,0,0,0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '100px', fontWeight: 900, color: 'rgba(0,0,0,0.1)', pointerEvents: 'none' }}>
                {shift.n}
              </div>

              {/* FROM */}
              <div style={{ opacity: 0.85, marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px', color: '#1E293B' }}>
                  {shift.fIcon}
                </div>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#1E293B' }}>{shift.f}</div>
              </div>

              <div style={{ margin: '15px 0', position: 'relative', width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', height: '100%', width: '3px', background: 'linear-gradient(to bottom, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0))' }}></div>
                <motion.div
                  animate={{ y: [-20, 20] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    width: '12px',
                    height: '25px',
                    background: 'linear-gradient(180deg, transparent, var(--gold), transparent)',
                    filter: 'blur(3px)'
                  }}
                ></motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    background: '#fff',
                    padding: '10px',
                    borderRadius: '50%',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    zIndex: 2,
                    border: '2px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ArrowRight size={22} color="var(--gold)" style={{ transform: 'rotate(90deg)' }} strokeWidth={3} />
                </motion.div>
              </div>

              {/* TO */}
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '10px', color: 'var(--navy)' }}>
                  {shift.tIcon}
                </div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: '#1E293B', lineHeight: 1.1, letterSpacing: '-0.5px' }}>{shift.t}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '16px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>CONVERSATION MODEL</div>
          <h1 className="slide-title" style={{ fontSize: '32px', marginBottom: '8px' }}>₹10,000 Crore Client Conversation Model</h1>
          <p className="slide-subtitle" style={{ fontSize: '18px' }}>Move every client conversation up the levels.</p>
        </div>

        <motion.div
          className="conversation-steps"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { l: 1, t: 'Transaction Conversation', q: '"What scheme should I invest in?"' },
            { l: 2, t: 'Portfolio Conversation', q: '"How is my portfolio performing?"' },
            { l: 3, t: 'Wealth Conversation', q: '"How do I build long-term wealth?"' }
          ].map((level) => (
            <motion.div
              key={level.l}
              className={`conversation-card-step ${level.l === 3 ? 'active-level' : ''}`}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="step-badge">{level.l}</div>
              <div className="step-title">{level.t}</div>
              <div className="step-quote">{level.q}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '16px' }}>
          <h1 className="slide-title" style={{ fontSize: '32px' }}>5 Behaviours of a ₹10,000 Crore Firm</h1>
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

      <motion.div className="slide-section" {...slideIn} style={{ background: '#0F172A', color: '#fff', padding: '35px 40px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
        <div className="slide-header" style={{ marginBottom: '15px' }}>
          <h1 className="slide-title" style={{ color: '#fff', fontSize: '38px', letterSpacing: '-1px' }}>The ₹10,000 Crore Equation</h1>
          <div style={{ width: '80px', height: '4px', background: 'var(--gold)', margin: '15px auto', borderRadius: '2px' }}></div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          width: '100%',
          flexWrap: 'nowrap'
        }}>
          {[
            { n: '1', t: 'Client Trust', d: 'Earned through clarity', icon: <ShieldCheck size={28} /> },
            { n: '2', t: 'Consistency', d: 'Same quality always', icon: <CheckCircle2 size={28} /> },
            { n: '3', t: 'Conviction', d: 'Guiding discipline', icon: <Zap size={28} /> },
            { n: '4', t: 'Referrals', d: 'Proof of compounding', icon: <Users size={28} /> }
          ].map((card, i) => (
            <React.Fragment key={card.n}>
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)' }}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.03)',
                  padding: '20px 12px',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(255,255,255,0.08)',
                  textAlign: 'center',
                  minWidth: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '4px' }}>{card.icon}</div>
                <h3 style={{ color: '#fff', fontSize: '19px', fontWeight: 900, margin: 0 }}>{card.t}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: 0, fontWeight: 500 }}>{card.d}</p>
              </motion.div>
              <div style={{ color: 'var(--gold)', fontSize: '28px', fontWeight: 900, opacity: 0.8 }}>
                {i < 3 ? '×' : '='}
              </div>
            </React.Fragment>
          ))}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            style={{
              flex: 1.5,
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              padding: '30px 25px',
              borderRadius: '24px',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(212, 175, 55, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              minWidth: '220px'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)', animation: 'shimmer 3s infinite' }}></div>

            <h3 style={{ color: '#1E293B', fontSize: '28px', fontWeight: 900, margin: 0, lineHeight: 1.2 }}>AUM Scalability</h3>
          </motion.div>
        </div>


        <div style={{ marginTop: 0, padding: '0px 20px' }}>
          <svg
            viewBox="-60 -50 1120 500"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: 'auto', overflow: "visible" }}
          >

            {/* DEFINITIONS */}
            <defs>
              <linearGradient id="scaleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>

              <marker
                id="arrowHead"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 6 3, 0 6" fill="#D4AF37" />
              </marker>
            </defs>

            {/* AXES */}
            <line x1="100" y1="350" x2="950" y2="350" stroke="#999" strokeWidth="1.5" />
            <line x1="100" y1="350" x2="100" y2="50" stroke="#999" strokeWidth="1.5" />

            {/* AXIS LABELS */}
            <text x="500" y="390" textAnchor="middle" fontSize="16" fontWeight="700" fill="#94A3B8">
              Time (APRIL-26 → APRIL-31)
            </text>

            <text
              x="50"
              y="200"
              transform="rotate(-90 50 200)"
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill="#94A3B8"
            >
              Business Impact / AUM
            </text>

            {/* LINEAR GROWTH */}
            <motion.path
              d="M 100 350 L 900 220"
              stroke="#888"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />

            <text
              x="915"
              y="225"
              textAnchor="start"
              fontSize="16"
              fontWeight="700"
              fill="#94A3B8"
            >
              Linear Growth
            </text>

            <motion.circle
              cx="900"
              cy="220"
              r="5"
              fill="#888"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.2 }}
            />

            {/* EXPONENTIAL CURVE */}
            <motion.path
              d="M 100 350 
             C 300 345, 500 300, 
               700 180 
             S 900 60, 900 60"
              stroke="#D4AF37"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />

            {/* AREA UNDER EXPONENTIAL */}
            <motion.path
              d="M 100 350 
             C 300 345, 500 300, 
               700 180 
             S 900 60, 900 60
             L 900 350 
             Z"
              fill="url(#scaleGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              transition={{ delay: 0.8 }}
            />

            {/* EXPONENTIAL LABEL */}
            <text
              x="890"
              y="30"
              textAnchor="end"
              fontSize="18"
              fill="#D4AF37"
              fontWeight="900"
            >
              Exponential Scale
            </text>

            <motion.circle
              cx="900"
              cy="60"
              r="7"
              fill="#D4AF37"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.8 }}
            />

            {/* REFERRAL IMPACT POINT */}
            <motion.circle
              cx="870"
              cy="105"
              r="5"
              fill="#D4AF37"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 2.7, type: 'spring' }}
            />

            <g>
              <text
                x="915"
                y="140"
                fill="#D4AF37"
                fontSize="16"
                fontWeight="900"
                textAnchor="start"
              >
                Referral Multiplier Effect
              </text>

              <motion.path
                d="M 750 250 Q 820 190 870 105"
                stroke="#D4AF37"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#arrowHead)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5 }}
              />
            </g>

          </svg>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="slide-header" style={{ marginBottom: '16px' }}>
          <h1 className="slide-title" style={{ fontSize: '42px' }}>₹10,000 Crore Journey Roadmap</h1>
        </div>

        <div className="roadmap-container" style={{ marginTop: '20px' }}>
          <div className="timeline">
            <div className="timeline-line"></div>
            {[1, 2, 3, 4].map(n => (
              <motion.div
                key={n}
                className="timeline-step"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: n * 0.2 }}
                style={{ width: '60px', height: '60px', fontSize: '24px' }}
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
                style={{ padding: '24px' }}
              >
                <span className="stage-label" style={{ fontSize: '18px', padding: '6px 16px' }}>Stage {stage.s}</span>
                <h3 style={{ color: '#1E293B', fontSize: '24px', marginBottom: '12px', marginTop: '12px' }}>{stage.t}</h3>
                <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '1.4' }}>{stage.d}</p>
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
          style={{ padding: '30px 40px' }}
        >
          <div className="main-quote" style={{ fontSize: '28px', marginBottom: '16px' }}>
            "The stock market transfers money from the impatient to the patient."
          </div>
          <p className="quote-author" style={{ fontSize: '18px' }}>— Warren Buffett</p>

          <p className="quote-subtitle" style={{ fontSize: '16px', marginTop: '20px' }}>Our role is to help clients:</p>

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
      <motion.div className="slide-section" style={{ background: '#D4AF37', color: '#fff', border: 'none', padding: '40px 20px' }} {...slideIn}>
        <h2 style={{ fontSize: '36px', marginBottom: '16px', fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>The ₹10,000 Crore Mindset</h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: '24px', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.3 }}
        >
          "If SNS was already a ₹10,000 Crore firm, how would we behave tomorrow morning?"
        </motion.p>
      </motion.div>

      <motion.div className="slide-section" {...slideIn} style={{ padding: '40px 20px' }}>
        <div className="closing-slide">
          <p className="closing-text-light" style={{ fontSize: '28px', marginBottom: '24px' }}>
            The future of SNS will not be decided <br /> by markets or products.
          </p>
          <h2 className="closing-text-bold" style={{ fontSize: '56px', marginBottom: '32px' }}>
            It will be decided by the standards <br /> we set for ourselves.
          </h2>
          <hr className="closing-divider" style={{ width: '100px', margin: '0 auto 32px' }} />
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="closing-highlight"
            style={{ fontSize: '32px' }}
          >
            Let us build the ₹10,000 Crore mindset.
          </motion.p>
        </div>
      </motion.div>

      <motion.div className="slide-section" style={{ background: '#F8FAFC', padding: '40px 20px' }} {...slideIn}>
        <div className="cover-slide" style={{ gap: '30px', padding: '40px' }}>
          <div className="cover-left" style={{ flex: 1 }}>
            <div className="logo-container">
              <img src="/SNS Logo.png" alt="SNS Logo" style={{ height: '60px' }} />
            </div>
            <hr className="trust-divider" style={{ width: '30px', margin: '12px 0 12px auto' }} />
            <p className="trust-text" style={{ fontSize: '16px' }}>60+ YEARS OF TRUST</p>
          </div>

          <div className="cover-divider" style={{ width: '2px', height: '100px' }}></div>

          <div className="cover-right" style={{ flex: 2 }}>
            <p className="cover-subtitle" style={{ fontSize: '16px' }}>Building the</p>
            <h1 className="cover-title" style={{ fontSize: '36px', lineHeight: 1.1 }}>
              ₹10,000 <br /> Crore <br /> Mindset
            </h1>
            <p className="cover-footer" style={{ fontSize: '16px', marginTop: '12px' }}>THE NEXT CHAPTER OF SNS GROUP</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Session04;
