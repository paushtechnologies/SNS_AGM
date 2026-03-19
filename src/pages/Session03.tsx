import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Database,
  Cpu,
  Users,
  TrendingUp,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Shield,
  BarChart3,
  PieChart
} from 'lucide-react';
import './Session03.css';

const Session03: React.FC = () => {
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
    <div id="page-s3" className="page active session03-container">
      {/* SECTION 1: HERO & CORE PURPOSE */}
      <motion.div
        className="slide-section dark"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: 'linear-gradient(90deg, #1e1b4b 0%, #0f172a 100%)',
          borderTop: 'none',
          color: '#ffffff'
        }}
      >
        {/* Layered Decorative Elements */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ flex: '1', minWidth: '550px' }}>
            <div className="slide-label" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--gold-light)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '8px', fontSize: '12px' }}>SESSION 04 • THE TRANSFORMATION</div>
            <h1 className="slide-title" style={{ fontSize: '36px', marginBottom: '12px' }}>
              Align & <span style={{ color: '#ffffff', position: 'relative' }}>
                Accelerate.
                <div style={{ position: 'absolute', bottom: '5px', left: 0, width: '100%', height: '4px', background: 'var(--gold)', borderRadius: '2px', opacity: 0.8 }}></div>
              </span>
            </h1>
            <p className="slide-subtitle" style={{
              color: '#ffffff',
              fontSize: '18px',
              opacity: 0.95,
              marginBottom: '16px',
              textAlign: 'left',
              margin: '0 0 16px 0',
              maxWidth: 'none'
            }}>
              One Team, One Standard, One Model & One Delivery.
            </p>

            <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '24px', marginBottom: '12px', fontWeight: 800 }}>What are we trying to achieve?</h2>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {['Inspire', 'Improve', 'Impact'].map(item => (
                <div key={item} style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  padding: '10px 24px',
                  borderRadius: '16px',
                  fontSize: '18px',
                  color: 'var(--gold-light)',
                  fontWeight: 900,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: '0 0 auto', position: 'relative' }}>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                padding: '30px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                borderRadius: '50%',
                backdropFilter: 'blur(30px)',
                border: '2px solid rgba(212,175,55,0.3)',
                width: '240px',
                height: '240px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '100px',
                boxShadow: '0 0 40px rgba(212,175,55,0.15), inset 0 0 20px rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ position: 'absolute', width: '110%', height: '110%', border: '1px dashed rgba(212,175,55,0.3)', borderRadius: '50%', animation: 'spin 20s linear infinite' }}></div>
              ⚡
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 2: STRATEGIC COMMITMENT & VISION */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header">
          <div className="slide-label" style={{ fontSize: '28px', padding: '10px 24px', background: 'rgba(56, 178, 172, 0.1)', color: '#2C7A7B', border: '1px solid rgba(56,178,172,0.2)', marginBottom: '4px' }}>Our Strategic Commitment</div>
          <h1 className="slide-title">Tech. Data. Team.</h1>
        </div>

        <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1' }}>
            <div style={{
              padding: '40px',
              background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
              borderRadius: '24px',
              color: '#fff',
              boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
              borderLeft: '8px solid var(--gold)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '100px', color: 'rgba(212, 175, 55, 0.05)', fontWeight: 900 }}>“</div>
              <p style={{ fontSize: '38px', lineHeight: '1.4', margin: 0, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                <span style={{ color: '#D4AF37', fontWeight: 900, textTransform: 'uppercase', fontSize: '24px', display: 'block', marginBottom: '12px', letterSpacing: '2px' }}>Vision:</span>
                Become one of the most <span style={{ color: 'var(--gold-light)' }}>"intelligent & consistent"</span> MF distributor.
              </p>
            </div>
          </div>

          <div style={{ flex: '1' }}>
            <div className="label" style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '20px' }}>FY FOCUS AREAS</div>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Embed AI into daily workflow process',
                'Deploy AI-driven client intelligence',
                'Train team – Personal & Professional development (data & process fluency)',
                'Build structured data architecture'
              ].map(area => (
                <motion.div
                  key={area}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10, background: '#fff' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '20px',
                    color: 'var(--navy)',
                    fontWeight: 700,
                    padding: '12px 20px',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ color: 'var(--gold)' }}><CheckCircle2 size={18} /></div>
                  {area}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section dark" {...slideIn} style={{ padding: '40px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '24px',
          marginBottom: '32px'
        }}>
          <div className="decorative-blocks" style={{ margin: 0, gap: '6px' }}>
            <span style={{ width: '12px', height: '12px' }}></span>
            <span style={{ width: '12px', height: '12px' }}></span>
            <span style={{ width: '12px', height: '12px' }}></span>
          </div>
          <h1 style={{ fontSize: '32px', color: '#fff', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>
            How to use Tech, Data & our Team to:
          </h1>
        </div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            width: '100%'
          }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            'Enhance investors’ experience',
            'Improve Growth and efficiency',
            'Scale up & personalize clients engagements',
            'Create a One team, One standard, One model, One delivery'
          ].map(point => (
            <motion.div
              key={point}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, background: 'rgba(255,255,255,0.08)', borderColor: 'var(--gold)' }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                padding: '24px 30px',
                borderRadius: '20px',
                border: '1.5px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--gold)',
                flexShrink: 0,
                boxShadow: '0 0 10px var(--gold)'
              }}></div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
                {point}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* SECTION 3: CRM OPTIMIZATION OVERHAUL */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header" style={{ marginBottom: '20px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>FOUNDATION ENGINE</div>
          <h1 className="slide-title" style={{ fontSize: '32px', marginBottom: '8px' }}>CRM Optimization</h1>
          <p className="slide-subtitle" style={{ fontSize: '18px' }}>
            Activating the engine of growth through 100% CRM focus and data-driven discipline.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'System Hardening',
                icon: <Shield size={28} />,
                items: ['Data Audit & Feedback', 'Risk Profiling', 'Client Auto-Categorization'],
                color: '#1965e1',
                pastelBg: '#E1EBFF',
                pastelBorder: '#C2D6FF'
              },
              {
                title: 'Strategic Intel',
                icon: <BarChart3 size={28} />,
                items: ['CEO Dashboard', 'Call Recording & Analysis'],
                color: '#0891b2',
                pastelBg: '#DFF6F9',
                pastelBorder: '#BADEF0'
              },
              {
                title: 'Engine of Growth',
                icon: <TrendingUp size={28} />,
                items: ['Referral Management', 'Dormant Client List', 'GIC Renewal Feed'],
                color: '#b45309',
                pastelBg: '#FFF4D1',
                pastelBorder: '#FDE68A'
              },
              {
                title: 'Workflow Dynamics',
                icon: <PieChart size={28} />,
                items: ['Action Plan Integration', 'Survey Integration', 'Daily Pulse'],
                color: '#6d28d9',
                pastelBg: '#EFEBFF',
                pastelBorder: '#DDD6FE'
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                style={{
                  background: cat.pastelBg,
                  borderRadius: '24px',
                  padding: '20px 28px',
                  border: `2px solid ${cat.pastelBorder}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 12px 20px -5px rgba(0, 0, 0, 0.08)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'white',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: cat.color,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
                }}>
                  {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <div>
                  <h4 style={{ fontSize: '24px', fontWeight: 900, color: 'var(--navy)', marginBottom: '18px', letterSpacing: '-0.5px' }}>{cat.title}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {cat.items.map(item => (
                      <li key={item} style={{ fontSize: '18px', color: '#334155', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '8px', height: '8px', background: cat.color, borderRadius: '50%', flexShrink: 0 }}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 4: THE AI NECESSITY */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header" style={{ marginBottom: '20px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>Why AI Matters Now</div>
          <h1 className="slide-title" style={{ fontSize: '32px', marginBottom: '8px' }}>It's No Longer Optional.</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <motion.div
            style={{
              background: 'linear-gradient(135deg, #1A2744 0%, #2C4A8A 100%)',
              color: '#fff',
              padding: '30px',
              borderRadius: '24px'
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p style={{
              fontSize: '22px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '24px',
              fontStyle: 'italic',
              borderLeft: '4px solid var(--gold)',
              paddingLeft: '20px'
            }}>
              "Rising investor expectations"
            </p>
            <p style={{
              fontSize: '22px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '24px',
              fontStyle: 'italic',
              borderLeft: '4px solid var(--gold)',
              paddingLeft: '20px'
            }}>
              "Need for personalization at scale."
            </p>
            <p style={{
              fontSize: '22px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '24px',
              fontStyle: 'italic',
              borderLeft: '4px solid var(--gold)',
              paddingLeft: '20px'
            }}>
              "Cost & efficiency pressure."
            </p>
            <p style={{
              fontSize: '22px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '24px',
              fontStyle: 'italic',
              borderLeft: '4px solid var(--gold)',
              paddingLeft: '20px'
            }}>
              "Business across industries are investing heavily in AI and therefore it's a necessity for survival."
            </p>

            <ul className="industry-shift-list" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '20px' }}>
                <span style={{ color: 'var(--gold-light)', fontSize: '18px', fontWeight: 800 }}>The Industry Has Shifted:</span>
                <ul style={{ paddingLeft: '15px', marginTop: '10px', opacity: 0.9, fontSize: '18px' }}>
                  <li>Investors expect digital-first, personalized experience</li>
                  <li>Fintech platforms have reset service benchmarks</li>
                  <li>Margins are tightening & Compliance expectations are rising</li>
                  <li>KYC process getting strengthened & integrated</li>
                </ul>
              </li>
              <li className="ai-necessity" style={{ fontSize: '22px', fontWeight: 900, color: 'var(--gold)' }}>
                AI is a competitive necessity.
              </li>
            </ul>
          </motion.div>

          <motion.div
            style={{
              background: '#F8FAFC',
              padding: '3px',
              border: '1px solid #E2E8F0',
              borderRadius: '24px'
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '32px', color: 'var(--navy)', marginBottom: '12px', fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>Decision Intelligence at Scale</h3>
            <p style={{ fontSize: '20px', color: '#475569', marginBottom: '32px', fontWeight: 600 }}>Empowering the same team to achieve 3X Productivity.</p>

            <motion.div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%' }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <TrendingUp size={24} />, t: 'Predict Churn', d: 'Before Redemption', bg: 'linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%)', border: '#feb2b2', iconColor: '#c53030' },
                { icon: <Zap size={24} />, t: 'Identify SIPs', d: 'Top-up Opportunities', bg: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)', border: '#9ae6b4', iconColor: '#2f855a' },
                { icon: <Database size={24} />, t: 'Auto-generate', d: 'Portfolio Insights', bg: 'linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)', border: '#90cdf4', iconColor: '#2b6cb0' },
                { icon: <Users size={24} />, t: 'RM meeting', d: 'Intelligence Briefs', bg: 'linear-gradient(135deg, #fffaf0 0%, #feebc8 100%)', border: '#fbd38d', iconColor: '#b45309' },
                { icon: <MessageSquare size={24} />, t: 'Personalized comms', d: 'at scale', bg: 'linear-gradient(135deg, #f5f3ff 0%, #e9d5ff 100%)', border: '#d8b4fe', iconColor: '#6b46c1' },
              ].map(item => (
                <motion.div
                  key={item.t}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                  style={{
                    padding: '16px',
                    background: item.bg,
                    border: `1.5px solid ${item.border}`,
                    borderRadius: '20px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ color: item.iconColor, marginBottom: '8px', background: 'white', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>{item.icon}</div>
                  <div style={{ fontWeight: 900, fontSize: '20px', color: 'var(--navy)', marginBottom: '4px' }}>{item.t}</div>
                  <div style={{ fontSize: '15px', color: '#4A5568', fontWeight: 600 }}>{item.d}</div>
                </motion.div>
              ))}
            </motion.div>
            <div style={{
              marginTop: '32px',
              padding: '20px',
              background: 'var(--navy)',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(26, 39, 68, 0.2)'
            }}>
              <p style={{ fontSize: '22px', margin: 0, color: '#fff', fontWeight: 900, letterSpacing: '0.5px' }}>
                Same team. 3X productivity. Higher retention.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 5: CURRENT REALITY */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header" style={{ marginBottom: '20px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>Our Current Reality</div>
          <h1 className="slide-title" style={{ fontSize: '32px', marginBottom: '8px' }}>We Are Sitting on Powerful Data</h1>
          <p className="slide-subtitle" style={{ fontSize: '24px' }}>Today we report data. Tomorrow we must activate intelligence.</p>
        </div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            marginBottom: '20px'
          }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { n: '₹1,900+', l: 'Cr Total AUM', s: '32px' },
            { n: '10+', l: 'Years Transaction History', s: '32px' },
            { n: 'Redemption', l: 'Cycle Intelligence', s: '24px' },
            { n: 'SIP', l: 'Behavior Trends', s: '32px' },
            { n: 'Client', l: 'Segmentation Patterns', s: '32px' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
              style={{
                background: '#F8FAFC',
                padding: '16px 12px',
                borderRadius: '20px',
                borderBottom: '6px solid var(--gold)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '130px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{
                fontSize: item.s,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                color: 'var(--navy)',
                lineHeight: 1.1,
                marginBottom: '12px'
              }}>
                {item.n}
              </div>
              <div style={{
                fontSize: '19px',
                fontWeight: 700,
                color: '#64748B',
                lineHeight: 1.3
              }}>
                {item.l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* SECTION 6: HUMAN + AI */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header" style={{ marginBottom: '20px' }}>
          <div className="slide-label" style={{ marginBottom: '6px', fontSize: '26px', padding: '8px 20px' }}>Relationship 2.0</div>
          <h1 className="slide-title" style={{ fontSize: '32px', marginBottom: '8px' }}>Human + AI</h1>
          <p className="slide-subtitle" style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '18px' }}>
            AI Will Upgrade — Not Replace — Our Team
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <motion.div
            className="standard-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ padding: '20px' }}
          >
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
                'Data-backed client conversations',
                'Proactive risk alerts (Alpha/Churn)',
                'Instant goal simulations for confidence',
                'Higher confidence, stronger advice',
                'Trust Deepens. Relationships Scale.'
              ].map(item => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10, color: 'var(--gold)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '19px',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    padding: '12px 0',
                    borderBottom: '1px solid #E2E8F0',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <CheckCircle2 color="var(--gold)" size={18} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="standard-card dark"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ padding: '20px' }}
          >
            <div className="label" style={{ color: 'var(--gold-light)', marginBottom: '16px', fontSize: '18px' }}>What AI in CX Means for MF Distributors</div>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "How we apply AI to improve our client engagement activities.",
                "Identify key client engagement where use AI to scale up client touch points without diluting personal touch.",
                "Identify backend work to be automated",
                "Faster investor support",
                "Personalized advice nudges",
                "Consistent omni-channel experience",
                "Proactive engagement, not reactive service"
              ].map(c => (
                <motion.div
                  key={c}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ background: 'rgba(255,255,255,0.12)', x: 5 }}
                  style={{ background: 'rgba(255,255,255,0.08)', padding: '12px', borderRadius: '12px', fontSize: '18px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s ease' }}
                >
                  {c}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* KEY BENEFITS FOR BUSINESS */}
      <motion.div 
        className="slide-section" 
        {...slideIn}
        style={{ 
          padding: '50px 40px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
          borderTop: '10px solid #2ecc71',
          boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          right: '-10%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(46, 204, 113, 0.04) 0%, transparent 70%)', 
          zIndex: 0 
        }}></div>

        <div className="business-benefits-slide" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="slide-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
            <div className="decorative-blocks" style={{ justifyContent: 'center', marginBottom: '16px' }}>
              <span style={{ width: '18px', height: '18px', background: 'var(--gold)', borderRadius: '4px' }}></span>
              <span style={{ width: '18px', height: '18px', background: 'var(--gold)', borderRadius: '4px', opacity: 0.4 }}></span>
              <span style={{ width: '18px', height: '18px', background: 'var(--gold)', borderRadius: '4px', opacity: 0.2 }}></span>
            </div>
            <h1 style={{ 
              fontSize: '56px', 
              fontWeight: 900, 
              color: 'var(--navy)',
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '-2px',
              margin: 0
            }}>
              Key Benefits for Business
            </h1>
          </div>

          <motion.div
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '24px' 
            }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { t: 'Lower servicing cost', i: <Database size={36} />, color: '#3182ce' },
              { t: 'Higher RM productivity', i: <TrendingUp size={36} />, color: '#d69e2e' },
              { t: 'Better retention & lower churn', i: <Users size={36} />, color: '#38a169' },
              { t: 'Scalable growth without headcount increase', i: <Zap size={36} />, color: '#805ad5' }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.15)',
                  borderColor: 'var(--gold)'
                }}
                style={{ 
                  padding: '48px 24px', 
                  background: '#ffffff', 
                  borderRadius: '32px', 
                  border: '1.5px solid rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '30px',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  textAlign: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ 
                  width: '90px', 
                  height: '90px', 
                  background: 'rgba(212, 175, 55, 0.08)', 
                  borderRadius: '28px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.02)'
                }}>
                  {benefit.i}
                </div>
                <div style={{ 
                  fontSize: '24px', 
                  fontWeight: 900, 
                  color: 'var(--navy)', 
                  lineHeight: '1.3',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '-0.5px'
                }}>
                  {benefit.t}
                </div>
                
                <div style={{ 
                  marginTop: 'auto',
                  width: '40px', 
                  height: '5px', 
                  background: 'var(--gold)', 
                  borderRadius: '100px',
                  opacity: 0.2
                }}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* KEY BENEFITS FOR INVESTORS */}
      <motion.div 
        className="slide-section" 
        {...slideIn} 
        style={{ 
          padding: '40px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
          borderTop: '10px solid #2ecc71',
          boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ 
          position: 'absolute', 
          bottom: '-10%', 
          left: '-5%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', 
          zIndex: 0 
        }}></div>

        <div className="investor-benefits-slide" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="slide-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
            <div className="decorative-blocks" style={{ justifyContent: 'center', marginBottom: '16px' }}>
              <span style={{ width: '12px', height: '12px', background: '#2ecc71', borderRadius: '3px' }}></span>
              <span style={{ width: '12px', height: '12px', background: '#2ecc71', opacity: 0.5, borderRadius: '3px' }}></span>
            </div>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: 900, 
              color: 'var(--navy)',
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '-1.5px',
              margin: 0
            }}>
              Key Benefits for Investors
            </h1>
          </div>

          <div className="benefits-content">
            <motion.div
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '24px' 
              }}
              variants={{
                visible: { transition: { staggerChildren: 0.12 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { t: 'Faster query resolution', i: <Zap size={28} /> },
                { t: '24x7 assistance', i: <MessageSquare size={28} /> },
                { t: 'Relevant fund & goal-based insights', i: <TrendingUp size={28} /> },
                { t: 'Reduced friction across journeys', i: <Users size={28} /> }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: idx % 2 === 0 ? -30 : 30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    borderColor: '#2ecc71'
                  }}
                  style={{ 
                    padding: '28px 32px', 
                    background: '#ffffff', 
                    borderRadius: '24px', 
                    border: '1.5px solid #eef2f6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    background: 'rgba(46, 204, 113, 0.1)', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#27ae60',
                    flexShrink: 0
                  }}>
                    {benefit.i}
                  </div>
                  <div style={{ 
                    fontSize: '22px', 
                    fontWeight: 800, 
                    color: 'var(--navy)',
                    lineHeight: '1.2'
                  }}>
                    {benefit.t}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="slide-section"
        {...slideIn}
        style={{
          padding: '15px 40px',
          minHeight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <div
          className="slide-header"
          style={{
            marginBottom: '15px',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <div
            className="slide-label"
            style={{ marginBottom: '8px', textAlign: 'center' }}
          >
            AI Landscape
          </div>

          <h1
            className="slide-title"
            style={{ fontSize: '28px', textAlign: 'center' }}
          >
            Detailed Areas & ROI
          </h1>
        </div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            width: '100%',
            maxWidth: '1200px',
            justifyItems: 'center',
            margin: '0 auto'
          }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* CARD 1 */}

          <motion.div
            className="standard-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
            style={{
              padding: '24px',
              textAlign: 'center',
              width: '100%',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)',
              border: '1px solid #94a3b8',
              borderRadius: '24px'
            }}
          >

            <div style={{ color: 'var(--navy)', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
              <Cpu size={28} />
            </div>

            <div className="ai-areas-slide">
              <h1 style={{ fontSize: '24px', marginBottom: '16px', textAlign: 'center', color: 'var(--navy)', fontWeight: 900 }}>
                Areas we can use AI
              </h1>

              <div className="ai-areas-content">

                <ul
                  style={{
                    fontSize: '17px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px 16px',
                    padding: 0,
                    listStyle: 'none',
                    fontWeight: 700,
                    textAlign: 'left',
                    margin: '0 auto 20px',
                    color: 'var(--navy)'
                  }}
                >
                  {['AI chatbots for FAQs', 'Onboarding help', 'Predictive analytics', 'SIP stoppage alerts', 'Sentiment analysis', 'QA CS survey', 'CRM Optimization'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                      {item}
                    </li>
                  ))}
                </ul>


                <div
                  style={{
                    marginTop: '20px',
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1.5px solid rgba(0,0,0,0.15)',
                    textAlign: 'center',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.05)'
                  }}
                >

                  <div
                    style={{
                      color: 'var(--navy)',
                      fontWeight: 900,
                      fontSize: '18px',
                      marginBottom: '12px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '18px',
                        background: 'var(--gold)',
                        borderRadius: '2px'
                      }}
                    ></div>

                    Automate routine tasks:
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '8px',
                      justifyItems: 'center'
                    }}
                  >

                    {['Portfolio review', 'AUM Journey', 'Capital gain', 'WhatsApp', 'Profiling', 'Clients'].map(task => (

                      <div
                        key={task}
                        style={{
                          fontSize: '14px',
                          color: 'var(--navy)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          background: '#ffffff',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          border: '1.5px solid rgba(0,0,0,0.1)',
                          fontWeight: 800,
                          width: '100%',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}
                      >

                        <div
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: 'var(--gold)',
                            flexShrink: 0
                          }}
                        ></div>

                        {task}

                      </div>

                    ))}

                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* CARD 2 */}

          <motion.div
            className="standard-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
            style={{
              padding: '24px',
              textAlign: 'center',
              width: '100%',
              background: 'linear-gradient(135deg, #fffcf0 0%, #fef3c7 100%)',
              border: '1px solid #fde68a',
              borderRadius: '24px'
            }}
          >

            <div style={{ color: 'var(--navy)', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
              <MessageSquare size={28} />
            </div>

            <div className="genai-opportunities-slide">

              <h1 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: 'var(--navy)', fontWeight: 900 }}>
                Generative AI Opportunities
              </h1>

              <div className="genai-content">

                <ul
                  style={{
                    fontSize: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    padding: 0,
                    listStyle: 'none',
                    fontWeight: 700,
                    textAlign: 'left',
                    margin: '0 auto',
                    color: 'var(--navy)'
                  }}
                >
                  {['Investor communication drafts', 'RM/CS call summaries', 'Knowledge base creation', 'Training & onboarding content'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
                      <div style={{ color: 'var(--gold)' }}><MessageSquare size={16} /></div>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </motion.div>


          {/* CARD 3 */}

          <motion.div
            className="standard-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
            style={{
              padding: '24px',
              textAlign: 'center',
              width: '100%',
              background: 'linear-gradient(135deg, #f0fff4 0%, #dcfce7 100%)',
              border: '1px solid #9ae6b4',
              borderRadius: '24px'
            }}
          >

            <div style={{ color: 'var(--navy)', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
              <TrendingUp size={28} />
            </div>

            <div className="kpi-slide">

              <h1 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: 'var(--navy)', fontWeight: 900 }}>
                KPIs to Track ROI
              </h1>

              <div className="kpi-content">

                <ul
                  style={{
                    fontSize: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    padding: 0,
                    listStyle: 'none',
                    fontWeight: 700,
                    textAlign: 'left',
                    margin: '0 auto',
                    color: 'var(--navy)'
                  }}
                >
                  {['Customer Satisfaction', 'First Contact Resolution', 'Self-service adoption', 'Churn rate & SIP persistence', 'Revenue per advisor'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px' }}>
                      <TrendingUp size={16} color="#2F855A" />
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
      {/* <motion.div
        className="slide-section"
        {...slideIn}
        style={{ padding: '15px 40px', minHeight: 'auto' }}
      >
        <div className="slide-header" style={{ marginBottom: '15px' }}>
            <div className="slide-label" style={{ marginBottom: '6px', textAlign: 'center', fontSize: '26px', fontWeight: 900, padding: '8px 20px' }}>AI Landscape</div>
          <h1 className="slide-title" style={{ fontSize: '28px' }}>Detailed Areas & ROI</h1>
        </div>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="standard-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            style={{ padding: '16px' }}
          >
            <div style={{ color: 'var(--gold)', marginBottom: '8px' }}><Cpu size={20} /></div>
            <div className="ai-areas-slide">
              <h1 style={{ fontSize: '20px', marginBottom: '8px' }}>Areas we can use AI</h1>
              <div className="ai-areas-content">
                <ul style={{
                  fontSize: '16px',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '6px 12px',
                  padding: 0,
                  listStylePosition: 'inside',
                  fontWeight: 500
                }}>
                  <li>AI chatbots for FAQs</li>
                  <li>Onboarding help</li>
                  <li>Predictive analytics</li>
                  <li>SIP stoppage alerts</li>
                  <li>Sentiment analysis</li>
                  <li>QA CS survey</li>
                  <li>CRM Optimization</li>
                </ul>

                <div style={{
                  marginTop: '12px',
                  padding: '12px',
                  background: 'var(--blue-soft)',
                  borderRadius: '12px',
                  border: '1px solid var(--blue-mid)'
                }}>
                  <div style={{
                    color: 'var(--navy)',
                    fontWeight: 900,
                    fontSize: '16px',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <div style={{ width: '4px', height: '14px', background: 'var(--gold)', borderRadius: '2px' }}></div>
                    Automate routine tasks:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                    {['Portfolio review', 'AUM Journey', 'Capital gain', 'WhatsApp', 'Profiling', 'Clients'].map(task => (
                      <div key={task} style={{
                        fontSize: '13px',
                        color: 'var(--navy)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#ffffff',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        fontWeight: 700
                      }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }}></div>
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="standard-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            style={{ padding: '16px' }}
          >
            <div style={{ color: 'var(--gold)', marginBottom: '8px' }}><MessageSquare size={20} /></div>
            <div className="genai-opportunities-slide">
              <h1 style={{ fontSize: '20px', marginBottom: '8px' }}>Generative AI Opportunities</h1>
              <div className="genai-content">
                <ul style={{
                  fontSize: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: 0,
                  listStylePosition: 'inside',
                  fontWeight: 500
                }}>
                  <li>Investor communication drafts</li>
                  <li>RM/CS call summaries</li>
                  <li>Knowledge base creation</li>
                  <li>Training & onboarding content</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="standard-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            style={{ padding: '16px' }}
          >
            <div style={{ color: 'var(--gold)', marginBottom: '8px' }}><TrendingUp size={20} /></div>
            <div className="kpi-slide">
              <h1 style={{ fontSize: '20px', marginBottom: '8px' }}>KPIs to Track ROI</h1>
              <div className="kpi-content">
                <ul style={{
                  fontSize: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: 0,
                  listStylePosition: 'inside',
                  fontWeight: 500
                }}>
                  <li>Customer Satisfaction</li>
                  <li>First Contact Resolution</li>
                  <li>Self-service adoption</li>
                  <li>Churn rate & SIP persistence</li>
                  <li>Revenue per advisor</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div> */}

      <motion.div className="slide-section" {...slideIn} style={{ padding: '20px 30px' }}>
        <div className="risks-guardrails-slide" style={{ padding: '20px', borderRadius: '24px' }}>
          <div className="slide-header" style={{ marginBottom: '24px' }}>
            <div className="decorative-blocks">
              <span></span>
              <span></span>
            </div>
            <h1 style={{ fontSize: '48px', fontWeight: 900 }}>Risks & Guardrails</h1>
          </div>

          <div className="risks-content" style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.ul
              style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '16px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { t: 'Human Touch', d: 'Maintain for advice' },
                { t: 'Compliance', d: 'Data privacy & SEBI' },
                { t: 'Change Management', d: 'Strong implementation' }
              ].map(risk => (
                <motion.li
                  key={risk.t}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ y: -5, background: '#fff' }}
                  style={{
                    padding: '16px 20px',
                    background: '#F8FAFC',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0',
                    textAlign: 'center',
                    minWidth: '240px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>{risk.t}</div>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--navy)' }}>{risk.d}</div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>

      {/* SECTION 8: ROADMAP & STRATEGY */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header">
          <div className="slide-label">The Implementation</div>
          <h1 className="slide-title">Recommended Roadmap</h1>
        </div>

        <motion.div
          className="roadmap-row"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ gap: '10px' }}
        >
          {[
            { p: '1', t: 'Map', d: 'Investor Journey Mapping', c: '#4A7FD4' },
            { p: '2', t: 'Integrate', d: 'Full CRM Integration', c: '#6B4FA0' },
            { p: '3', t: 'Train', d: 'Team Enablement & Adoption', c: '#2C8FA5' },
            { p: '4', t: 'Scale', d: 'Measure, Refine & Impact', c: '#2E7D5B' }
          ].map((item, idx) => (
            <React.Fragment key={item.p}>
              <motion.div
                className="rr-phase"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                style={{ background: item.c, flex: '1', padding: '24px 20px', borderRadius: '16px' }}
              >
                <div className="rr-ph" style={{ fontSize: '12px', fontWeight: 800, opacity: 0.9, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Phase {item.p}</div>
                <div className="rr-t" style={{ fontSize: '24px', fontWeight: 900, marginBottom: '6px' }}>{item.t}</div>
                <div className="rr-d" style={{ fontSize: '14px', fontWeight: 500, opacity: 0.9 }}>{item.d}</div>
              </motion.div>
              {idx < 3 && <div className="rr-arr" style={{ background: 'transparent', display: 'flex', alignItems: 'center' }}><ArrowRight color="var(--navy)" size={24} /></div>}
            </React.Fragment>
          ))}
        </motion.div>

        <div className="quote-block" style={{ marginTop: '24px', background: 'var(--navy)', padding: '24px 30px', borderRadius: '24px' }}>
          <div className="q-text" style={{ fontSize: '28px', fontWeight: 800, fontStyle: 'italic', color: '#fff' }}>"AI is not replacing staff. AI is amplifying trust, scale, and consistency."</div>
        </div>
      </motion.div>

      {/* NEW SECTION 2: Where are we ? */}
      <motion.div className="slide-section dark" {...slideIn}>
        <div className="status-tracker-slide" style={{ padding: '16px', borderRadius: '24px' }}>
          <div className="slide-header" style={{ marginBottom: '12px' }}>
            <div className="decorative-blocks">
              <span></span>
              <span></span>
            </div>
            <h1 className="slide-title" style={{ fontSize: '32px' }}>Where are we ?</h1>
          </div>

          <div className="status-container">
            <motion.div
              className="status-card highlight"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                background: 'linear-gradient(135deg, #1c2635 0%, #6b5a32 100%)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff'
              }}
            >
              <div className="status-metrics" style={{ justifyContent: 'space-between', padding: '0 40px', marginBottom: '30px' }}>
                <div className="metric" style={{ textAlign: 'left' }}>
                  <span className="metric-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Current AUM</span>
                  <span className="metric-value" style={{ color: '#fff', fontSize: '52px' }}>₹1,900 <small style={{ fontSize: '20px' }}>Crores</small></span>
                </div>
                <div className="metric-divider">
                  <ArrowRight size={48} color="#D4AF37" />
                </div>
                <div className="metric" style={{ textAlign: 'right' }}>
                  <span className="metric-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>2031 Milestone</span>
                  <span className="metric-value" style={{ color: '#D4AF37', fontSize: '52px' }}>₹10,000 <small style={{ fontSize: '20px', color: '#fff' }}>Crores</small></span>
                </div>
              </div>

              <div className="progress-track" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '19%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{ background: 'var(--gold)' }}
                />
              </div>
              <p className="status-insight" style={{ color: '#fff' }}>AUM is the byproduct of our Standards, Consistency and Behavior.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 10,000 CR MATTERS */}
      <motion.div 
        className="slide-section" 
        {...slideIn} 
        style={{ 
          padding: '40px', 
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
          borderTop: '10px solid #2ecc71', // Premium green accent from the image
          boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Decorative Background Element */}
        <div style={{ 
          position: 'absolute', 
          top: '0', 
          right: '0', 
          width: '300px', 
          height: '300px', 
          background: 'radial-gradient(circle, rgba(46, 204, 113, 0.05) 0%, transparent 70%)', 
          zIndex: 0 
        }}></div>

        <div className="why-10000-slide" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="slide-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
            <div className="decorative-blocks" style={{ justifyContent: 'center', marginBottom: '16px' }}>
              <span style={{ width: '14px', height: '14px', background: '#2ecc71', borderRadius: '3px' }}></span>
              <span style={{ width: '14px', height: '14px', background: 'var(--gold)', borderRadius: '3px' }}></span>
            </div>
            <h1 className="slide-title" style={{ 
              fontSize: '52px', 
              fontWeight: 900, 
              color: 'var(--navy)',
              letterSpacing: '-2px',
              marginBottom: '10px'
            }}>
              Why ₹10,000 Crores Matters
            </h1>
            <div style={{ 
              display: 'inline-block',
              padding: '10px 32px',
              background: 'rgba(46, 204, 113, 0.08)',
              color: '#1a7f37',
              borderRadius: '100px',
              fontSize: '26px',
              fontWeight: 800,
              border: '1.5px solid rgba(46, 204, 113, 0.2)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              letterSpacing: '-0.5px'
            }}>
              Market positioning & credibility lift
            </div>
          </div>

          <div className="why-content">
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {[
                { text: 'Stronger AMC negotiation power', icon: <Shield size={36} /> },
                { text: 'Operating leverage expansion', icon: <TrendingUp size={36} /> },
                { text: 'Enterprise valuation multiple re-rating', icon: <BarChart3 size={36} /> }
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 30 },
                    visible: { opacity: 1, scale: 1, y: 0 }
                  }}
                  whileHover={{ 
                    y: -12, 
                    boxShadow: '0 35px 70px -15px rgba(0, 0, 0, 0.15)',
                    borderColor: '#2ecc71',
                    background: '#fff'
                  }}
                  style={{ 
                    padding: '40px 24px', 
                    background: '#ffffff', 
                    borderRadius: '28px', 
                    border: '1px solid #eef2f6', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '24px',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    textAlign: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'linear-gradient(135deg, #f0fff4 0%, #dcfce7 100%)', 
                    borderRadius: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#27ae60',
                    boxShadow: '0 8px 16px rgba(46, 204, 113, 0.1)'
                  }}>
                    {point.icon}
                  </div>
                  
                  <div style={{ 
                    fontSize: '22px', 
                    fontWeight: 900, 
                    color: 'var(--navy)', 
                    lineHeight: '1.3',
                    fontFamily: "'DM Sans', sans-serif"
                  }}>
                    {point.text}
                  </div>
                  
                  <div style={{ 
                    width: '60px', 
                    height: '4px', 
                    background: 'linear-gradient(90deg, #2ecc71, #27ae60)', 
                    borderRadius: '100px',
                    opacity: 0.4
                  }}></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section dark" {...slideIn} style={{ padding: '16px 30px', background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)' }}>
        <div className="sns-commitment-slide" style={{ padding: '16px', borderRadius: '24px' }}>
          <div className="slide-header" style={{ marginBottom: '16px' }}>
            <div className="slide-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '8px' }}>The Vision</div>
            <h1 className="slide-title" style={{ fontSize: '32px', fontWeight: 900 }}>SNS Commitment</h1>
          </div>

          <div className="commitment-content">
            <motion.div
              style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '24px 20px', borderRadius: '24px', border: '1px solid rgba(212,175,55,0.3)', backdropFilter: 'blur(10px)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '28px', color: 'var(--gold)', marginBottom: '24px', textAlign: 'center', fontWeight: 900 }}>₹10,000 Crores is not an aspiration.</h2>

              <motion.div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  'Build for ₹10,000',
                  'It is a structured outcome of disciplined execution.',
                  'Scale with performance.',
                  'Scale is not a number it is a “Standard of thinking”',
                  'Lead with transformation.',
                  '2nd line leadership creation',
                  'Zero single point dependency in client management & servicing'
                ].map(point => (
                  <motion.div
                    key={point}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ x: 5, color: 'var(--gold)' }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: 700, color: '#fff', transition: 'all 0.2s ease', lineHeight: '1.4' }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }}></div>
                    {point}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="execution-excellence-slide" style={{ padding: '20px', borderRadius: '24px' }}>
          <div className="slide-header" style={{ marginBottom: '16px' }}>
            <div className="slide-label" style={{ marginBottom: '8px' }}>The Standard</div>
            <h1 className="slide-title" style={{ fontSize: '28px' }}>Execution to Excellence</h1>
          </div>

          <div className="execution-content">
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Data preparation',
                '90% Client review in depth',
                'Standardized portfolio review format across team.',
                '100% CRM adoption and MORE',
                'AI Tool integration in all process across the organization.',
                'Market conviction',
                'Performance is about standards nor an activity',
                '100% clients mapped to Ideal Client Management Model'
              ].map(point => (
                <motion.div
                  key={point}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 5, background: 'white' }}
                  style={{
                    padding: '14px',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--gold)',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {point}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="outcome-ownership-slide" style={{ padding: '20px', borderRadius: '24px' }}>
          <div className="slide-header" style={{ marginBottom: '16px' }}>
            <div className="slide-label" style={{ marginBottom: '8px' }}>The Responsibility</div>
            <h1 className="slide-title" style={{ fontSize: '28px' }}>Outcome Ownership</h1>
          </div>

          <div className="outcome-columns" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <motion.div
              className="outcome-column"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: '24px', background: '#F8FAFC', borderRadius: '24px' }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--navy)' }}>Outcome to be owned</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Total AUM Growth', 'SIP persistence & growth', 'Client retention', 'Customer satisfaction', 'Operating efficiency'].map(item => (
                  <li key={item} style={{ padding: '8px 0', borderBottom: '1px solid #E2E8F0', fontSize: '15px', color: '#475569', fontWeight: 600 }}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="outcome-column highlight"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: '24px', background: 'var(--navy)', color: '#fff', borderRadius: '24px' }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--gold)' }}>What we control</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Our Standards (ICMM)', 'Our Process (CRM)', 'Our Intelligence (AI)', 'Our Discipline (Team)'].map(item => (
                  <li key={item} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '15px', fontWeight: 600 }}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div className="slide-section" {...slideIn} style={{ minHeight: 'auto', marginBottom: '15px' }}>
        <div className="trajectory-slide" style={{ padding: '30px 40px' }}>
          <div className="slide-header" style={{ marginBottom: '30px' }}>
            <div className="decorative-blocks" style={{ marginBottom: '12px' }}>
              <span></span>
              <span></span>
            </div>
            <h1 className="slide-title" style={{ fontSize: '38px' }}>Milestone Trajectory</h1>
          </div>

          <div className="trajectory-graph-container">
            <svg className="trajectory-svg" viewBox="-60 -30 1200 460" preserveAspectRatio="none">
              <defs>
                <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
                <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="rgba(212, 175, 55, 0.1)" />
                </pattern>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* High-Tech Background Pattern */}
              <rect x="0" y="0" width="1050" height="350" fill="url(#dotPattern)" />

              {/* Grid Lines */}
              {[0, 2500, 5000, 7500, 10000].map((val) => {
                const y = 350 - (val / 10000) * 300;
                return (
                  <g key={val}>
                    <line x1="0" y1={y} x2="1120" y2={y} className="graph-grid-line" />
                    <text x="-30" y={y + 5} className="graph-axis-label" textAnchor="end">₹{(val / 1000).toFixed(1)}k Cr</text>
                  </g>
                );
              })}

              {/* Shadow Path */}
              <motion.path
                d="M 40 293 L 250 260 L 460 215 L 670 155 L 880 95 L 1090 50"
                fill="none"
                stroke="rgba(212, 175, 55, 0.2)"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.2 }}
              />

              {/* Data Area */}
              <motion.path
                d="M 40 350 L 40 293 L 250 260 L 460 215 L 670 155 L 880 95 L 1090 50 L 1090 350 Z"
                className="graph-area"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 0.1, scaleY: 1 }}
                style={{ originY: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* Main Data Line */}
              <motion.path
                d="M 40 293 L 250 260 L 460 215 L 670 155 L 880 95 L 1090 50"
                className="graph-line"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "circOut" }}
              />

              {/* Data Points & Labels */}
              {[
                { x: 40, y: 293, year: 'April-26', val: '₹1,900 Cr' },
                { x: 250, y: 260, year: 'April-27', val: '₹3,000 Cr' },
                { x: 460, y: 215, year: 'April-28', val: '₹4,500 Cr' },
                { x: 670, y: 155, year: 'April-29', val: '₹6,500 Cr' },
                { x: 880, y: 95, year: 'April-30', val: '₹8,500 Cr' },
                { x: 1090, y: 50, year: 'April-31', val: '₹10,000 Cr', target: true }
              ].map((point, i) => (
                <g key={i}>
                  {point.target && (
                    <circle cx={point.x} cy={point.y} r="15" fill="rgba(212, 175, 55, 0.2)" className="pulse-target" />
                  )}

                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r={point.target ? "10" : "8"}
                    className="graph-point"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', delay: 1.2 + i * 0.15 }}
                  />

                  <motion.g
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                  >
                    <text x={point.x} y={point.y - 40} className="graph-label-value" style={{ fill: point.target ? 'var(--gold)' : '#fff' }}>
                      {point.val}
                    </text>
                    <text x={point.x} y="400" className="graph-label-year">
                      {point.year}
                    </text>
                  </motion.g>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </motion.div>


      <div style={{ height: '40px' }}></div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .li-dot { font-weight: 900 !important; color: var(--gold) !important; }
        .section-title { font-size: 42px !important; margin-bottom: 16px !important; }
      `}} />
    </div>
  );
};

export default Session03;
