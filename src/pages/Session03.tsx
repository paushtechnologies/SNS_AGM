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
          background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
          borderTop: 'none'
        }}
      >
        {/* Layered Decorative Elements */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(74,127,212,0.15) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ flex: '1', minWidth: '550px' }}>
            <div className="slide-label" style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#34D399' }}>SESSION 04 • THE TRANSFORMATION</div>
            <h1 className="slide-title">
              Align & <span style={{ color: 'var(--gold)', position: 'relative' }}>
                Accelerate.
                <div style={{ position: 'absolute', bottom: '5px', left: 0, width: '100%', height: '4px', background: 'var(--gold)', borderRadius: '2px', opacity: 0.5 }}></div>
              </span>
            </h1>
            <p className="slide-subtitle" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '24px' }}>
              One Team, One Standard, One Model & One Delivery.
            </p>

            <h2 style={{ fontSize: '28px', color: '#fff', marginBottom: '24px', fontWeight: 800 }}>What are we trying to achieve?</h2>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {['Inspire', 'Improve', 'Impact'].map(item => (
                <div key={item} style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  padding: '10px 24px',
                  borderRadius: '16px',
                  fontSize: '14px',
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
                padding: '50px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                borderRadius: '50%',
                backdropFilter: 'blur(30px)',
                border: '2px solid rgba(212,175,55,0.3)',
                width: '320px',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '120px',
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
          <div className="slide-label">Our Strategic Commitment</div>
          <h1 className="slide-title">Tech. Data. Team.</h1>
        </div>

        <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1' }}>
            <div style={{
              padding: '24px 30px',
              background: 'var(--navy)',
              borderRadius: '24px',
              color: '#fff',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <p style={{ fontSize: '32px', lineHeight: '1.5', margin: 0 }}>
                <span style={{ color: 'var(--gold-light)', fontWeight: 900 }}>Vision:</span> Become one of the most "intelligent & consistent" MF distributor.
              </p>
            </div>
          </div>

          <div style={{ flex: '1' }}>
            <div className="label" style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '12px' }}>FY FOCUS AREAS</div>
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

      <motion.div className="slide-section dark" {...slideIn} style={{ padding: '30px' }}>
        <div className="tech-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="tech-header">
            <div className="decorative-blocks">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <motion.h1 style={{ fontSize: '32px' }}>How to use Tech, Data & our Team to:</motion.h1>
          </div>

          <motion.ul
            className="tech-points"
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
              <motion.li
                key={point}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ x: 10, color: 'var(--gold)' }}
                style={{ fontSize: '24px', padding: '12px 0' }}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <div className="tech-footer">
            <p className="footer-text">
              Our vision : To provide peace of mind by bringing significance in our Customer Service.
            </p>
            <div className="footer-bottom">
              <span>www.snsgroup.in</span>
              <span>“AMFI-registered Mutual Fund Distributor”</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3: CRM OPTIMIZATION OVERHAUL */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header">
          <div className="slide-label">FOUNDATION ENGINE</div>
          <h1 className="slide-title">CRM Optimization</h1>
          <p className="slide-subtitle">
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
                color: '#1965e1'
              },
              {
                title: 'Strategic Intel',
                icon: <BarChart3 size={28} />,
                items: ['CEO Dashboard', 'Call Recording & Analysis'],
                color: '#23bbdd'
              },
              {
                title: 'Engine of Growth',
                icon: <TrendingUp size={28} />,
                items: ['Referral Management', 'Dormant Client List', 'GIC Renewal Feed'],
                color: '#D4AF37'
              },
              {
                title: 'Workflow Dynamics',
                icon: <PieChart size={28} />,
                items: ['Action Plan Integration', 'Survey Integration', 'Daily Pulse'],
                color: '#6f42c2'
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
                  background: `${cat.color}15`,
                  borderRadius: '24px',
                  padding: '24px 20px',
                  border: `2px solid ${cat.color}30`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'all 0.3s ease'
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
                  <h4 style={{ fontSize: '16px', fontWeight: 900, color: 'var(--navy)', marginBottom: '12px', letterSpacing: '-0.5px' }}>{cat.title}</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {cat.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '18px', color: 'var(--navy)', fontWeight: 600, lineHeight: '1.4', opacity: 0.9 }}>
                        <div style={{ color: cat.color, marginTop: '2px' }}><CheckCircle2 size={16} strokeWidth={3} /></div>
                        {item}
                      </div>
                    ))}
                  </div>
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
        <div className="slide-header">
          <div className="slide-label">Why AI Matters Now</div>
          <h1 className="slide-title">It's No Longer Optional.</h1>
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
              padding: '30px',
              border: '1px solid #E2E8F0',
              borderRadius: '24px'
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '24px', color: 'var(--navy)', marginBottom: '8px' }}>Decision Intelligence at Scale</h3>
            <p style={{ fontSize: '18px', color: '#64748B', marginBottom: '24px' }}>Empowering the same team to achieve 3X Productivity.</p>

            <motion.div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <TrendingUp size={18} />, t: 'Predict Churn', d: 'Before Redemption' },
                { icon: <Zap size={18} />, t: 'Identify SIPs', d: 'Top-up Opportunities' },
                { icon: <Database size={18} />, t: 'Auto-generate', d: 'Portfolio Insights' },
                { icon: <Users size={18} />, t: 'RM meeting', d: 'Intelligence Briefs' },
                { icon: <Users size={18} />, t: 'Personalized communication ', d: 'at scale' },
              ].map(item => (
                <motion.div
                  key={item.t}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ y: -4, background: '#fff' }}
                  style={{ padding: '16px', background: 'white', border: '1px solid #E2E8F0', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
                >
                  <div style={{ color: 'var(--gold)', marginBottom: '8px' }}>{item.icon}</div>
                  <div style={{ fontWeight: 800, fontSize: '17px', color: 'var(--navy)' }}>{item.t}</div>
                  <div style={{ fontSize: '14px', color: '#64748B' }}>{item.d}</div>
                </motion.div>
              ))}
            </motion.div>
            <p style={{ fontSize: '16px', marginTop: '24px', fontStyle: 'italic', color: 'var(--navy)', fontWeight: 700 }}>
              Same team. 3X productivity. Higher retention.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 5: CURRENT REALITY */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header">
          <div className="slide-label">Our Current Reality</div>
          <h1 className="slide-title">We Are Sitting on Powerful Data</h1>
          <p className="slide-subtitle">Today we report data. Tomorrow we must activate intelligence.</p>
        </div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            marginBottom: '40px'
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
                padding: '30px 15px',
                borderRadius: '20px',
                borderBottom: '6px solid var(--gold)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '180px',
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
        <div className="slide-header">
          <div className="slide-label">Relationship 2.0</div>
          <h1 className="slide-title">Human + AI</h1>
          <p className="slide-subtitle" style={{ color: 'var(--gold)', fontWeight: 800 }}>
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
            <div className="label" style={{ color: 'var(--gold-light)', marginBottom: '16px', fontSize: '11px' }}>What AI in CX Means for MF Distributors</div>
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

      <motion.div className="slide-section" {...slideIn} style={{ padding: '30px' }}>
        <div className="investor-benefits-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="slide-header">
            <div className="decorative-blocks">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h1 style={{ fontSize: '32px' }}>Key Benefits for Investors</h1>
          </div>

          <div className="benefits-content">
            <motion.ul
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Faster query resolution',
                '24x7 assistance',
                'Relevant fund & goal-based insights',
                'Reduced friction across journeys'
              ].map(benefit => (
                <motion.li
                  key={benefit}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10, color: 'var(--gold)' }}
                  style={{ fontSize: '20px', padding: '8px 0' }}
                >
                  {benefit}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>

      {/* SECTION 7: DETAILED AREAS & ROI */}
      <motion.div
        className="slide-section"
        {...slideIn}
      >
        <div className="slide-header">
          <div className="slide-label">AI Landscape</div>
          <h1 className="slide-title">Detailed Areas & ROI</h1>
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
            style={{ padding: '20px' }}
          >
            <div style={{ color: 'var(--gold)', marginBottom: '16px' }}><Cpu size={24} /></div>
            <div className="ai-areas-slide">
              <h1 style={{ fontSize: '22px', marginBottom: '12px' }}>Areas we can use AI</h1>
              <div className="ai-areas-content">
                <ul style={{ fontSize: '18px' }}>
                  <li>AI chatbots for FAQs & onboarding</li>
                  <li>Predictive analytics for churn & SIP stoppage</li>
                  <li>Sentiment analysis on calls & messages</li>
                  <li>Quality assurance CS survey</li>
                  <li>CRM Optimization</li>
                  <li style={{ marginTop: '12px', color: 'var(--gold)', fontWeight: 800 }}>Automate routine tasks:</li>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px', marginLeft: '12px' }}>
                    {['Portfolio review', 'AUM Journey', 'Capital gain statement', 'Whatsapp connect', 'Customer Profiling', 'Communication with clients'].map(task => (
                      <div key={task} style={{ fontSize: '14px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }}></div>
                        {task}
                      </div>
                    ))}
                  </div>
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
            style={{ padding: '20px' }}
          >
            <div style={{ color: 'var(--gold)', marginBottom: '16px' }}><MessageSquare size={24} /></div>
            <div className="genai-opportunities-slide">
              <h1 style={{ fontSize: '22px', marginBottom: '12px' }}>Generative AI Opportunities</h1>
              <div className="genai-content">
                <ul style={{ fontSize: '16px' }}>
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
            style={{ padding: '20px' }}
          >
            <div style={{ color: 'var(--gold)', marginBottom: '16px' }}><TrendingUp size={24} /></div>
            <div className="kpi-slide">
              <h1 style={{ fontSize: '22px', marginBottom: '12px' }}>KPIs to Track ROI</h1>
              <div className="kpi-content">
                <ul style={{ fontSize: '16px' }}>
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
      </motion.div>

      <motion.div className="slide-section" {...slideIn} style={{ padding: '30px' }}>
        <div className="risks-guardrails-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="slide-header">
            <div className="decorative-blocks">
              <span></span>
              <span></span>
            </div>
            <h1 style={{ fontSize: '32px' }}>Risks & Guardrails</h1>
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
                    padding: '20px',
                    background: '#F8FAFC',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0',
                    textAlign: 'center',
                    minWidth: '200px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '11px', marginBottom: '6px', textTransform: 'uppercase' }}>{risk.t}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)' }}>{risk.d}</div>
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
                style={{ background: item.c, flex: '1', padding: '15px', borderRadius: '16px' }}
              >
                <div className="rr-ph" style={{ fontSize: '10px' }}>Phase {item.p}</div>
                <div className="rr-t" style={{ fontSize: '18px' }}>{item.t}</div>
                <div className="rr-d" style={{ fontSize: '12px' }}>{item.d}</div>
              </motion.div>
              {idx < 3 && <div className="rr-arr" style={{ background: 'transparent', display: 'flex', alignItems: 'center' }}><ArrowRight color="var(--navy)" size={16} /></div>}
            </React.Fragment>
          ))}
        </motion.div>

        <div className="quote-block" style={{ marginTop: '60px', background: 'var(--navy)' }}>
          <div className="q-text">"AI is not replacing staff. AI is amplifying trust, scale, and consistency."</div>
        </div>
      </motion.div>

      {/* SECTION 10,000 CR MATTERS */}
      <motion.div className="slide-section" {...slideIn}>
        <div className="why-10000-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="slide-header">
            <div className="decorative-blocks">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h1 className="slide-title" style={{ fontSize: '32px' }}>Why ₹10,000 Crores Matters</h1>
          </div>

          <div className="why-content">
            <motion.div
              style={{ listStyle: 'none', padding: 0 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--navy)', marginBottom: '16px' }}>Market positioning & credibility lift</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {[
                  'Stronger AMC negotiation power',
                  'Operating leverage expansion',
                  'Enterprise valuation multiple re-rating'
                ].map(point => (
                  <motion.div
                    key={point}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.05, background: '#fff' }}
                    style={{ padding: '16px', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', fontWeight: 700, color: '#475569', textAlign: 'center', fontSize: '14px', transition: 'all 0.2s ease' }}
                  >
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section dark" {...slideIn}>
        <div className="sns-commitment-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="slide-header">
            <div className="slide-label">The Vision</div>
            <h1 className="slide-title">SNS Commitment</h1>
          </div>

          <div className="commitment-content">
            <motion.div
              style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(212,175,55,0.2)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '28px', color: 'var(--gold)', marginBottom: '24px', textAlign: 'center' }}>₹10,000 Crores is not an aspiration.</h2>

              <motion.div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
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
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 600, color: '#fff', transition: 'all 0.2s ease' }}
                  >
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }}></div>
                    {point}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="execution-strategy-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="slide-header">
            <div className="slide-label">Path to Excellence</div>
            <h1 className="slide-title">Execution Strategy</h1>
          </div>

          <motion.div
            className="execution-content"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { t: 'Data', d: 'Data Preparation & Depth Review' },
              { t: 'Standard', d: 'Standardized Portfolio Formats' },
              { t: 'CRM', d: '100% CRM Adoption & More' },
              { t: 'AI', d: 'AI Tool Integration Across Org' },
              { t: 'ICMM', d: '100% ICMM Mapping' }
            ].map(item => (
              <motion.div
                key={item.t}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, background: '#fff' }}
                style={{ padding: '16px', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center', transition: 'all 0.2s ease' }}
              >
                <div style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '12px', marginBottom: '8px', textTransform: 'uppercase' }}>{item.t}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)' }}>{item.d}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="slide-section" {...slideIn}>
        <div className="execution-excellence-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="slide-header">
            <div className="slide-label">The Standard</div>
            <h1 className="slide-title">Execution to Excellence</h1>
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
        <div className="outcome-ownership-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="slide-header">
            <div className="slide-label">The Responsibility</div>
            <h1 className="slide-title">Outcome Ownership</h1>
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

      <motion.div className="slide-section" {...slideIn}>
        <div className="milestone-trajectory-slide" style={{ padding: '30px', borderRadius: '24px' }}>
          <div className="slide-header">
            <div className="slide-label">The Roadmap</div>
            <h1 className="slide-title">Milestone Trajectory</h1>
          </div>

          <div className="milestone-content">
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { y: 'Mar 24', m: 'Mar 24: CRM audit and Data Preparation - done' },
                { y: 'Jun 24', m: 'Jun 24: ICMM alignment across 100% clients- ongoing' },
                { y: 'Sep 24', m: 'Sep 24: AI deployment for automated engagement' },
                { y: 'Dec 24', m: 'Dec 24: Predictive intelligence scale-up' },
                { y: 'Mar 25', m: 'Mar 25: ₹10,000 Cr Run-rate Standardized' }
              ].map(item => (
                <motion.div
                  key={item.y}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
                  style={{
                    padding: '20px 12px',
                    background: 'white',
                    borderRadius: '20px',
                    borderTop: '5px solid var(--gold)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--navy)', marginBottom: '8px' }}>{item.y}</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', lineHeight: '1.4' }}>{item.m}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* FINAL CALL TO ACTION */}
      <motion.div
        className="slide-section dark"
        style={{ textAlign: 'center', padding: '120px 40px' }}
        {...slideIn}
      >
        <div className="slide-label" style={{ color: 'var(--gold)' }}>CONCLUSION</div>
        <h1 className="slide-title" style={{ fontSize: '64px', marginBottom: '32px' }}>One Delivery. One Success.</h1>
        <p style={{ fontSize: '24px', maxWidth: '800px', margin: '0 auto 48px', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
          "Success is not a destination. It is the quality of the journey we provide to every investor."
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '20px 48px', background: 'var(--gold)', color: 'var(--navy)', borderRadius: '100px', fontWeight: 900, fontSize: '20px', cursor: 'pointer' }}>
          Let's Transform Together <ArrowRight />
        </div>
      </motion.div>
      <div style={{ height: '100px' }}></div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .li-dot { font-weight: 900 !important; color: var(--gold) !important; }
        .section-title { font-size: 42px !important; margin-bottom: 16px !important; }
      `}} />
    </div>
  );
};

export default Session03;
