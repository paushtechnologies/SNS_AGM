import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Layout, ShieldCheck, BarChart3, Rocket, MessageSquare, Zap } from 'lucide-react';

const stepData = [
  { icon: <Target size={24} />, title: 'Client Segmentation', color: '#1A2744', desc: 'Multi-parameter auto-categorization. Identify, evaluate, and prioritize clients by complete relationship value — not just AUM.' },
  { icon: <Users size={24} />, title: 'Onboarding', color: '#4A7FD4', desc: 'Structured onboarding flow with risk profiling, goal mapping, and CRM data feed for meaningful, usable data.' },
  { icon: <Layout size={24} />, title: 'CRM Tracking', color: '#2C8FA5', desc: '100% CRM adoption with meeting outcomes, action plans, and systematic outward/inward trackers.' },
  { icon: <BarChart3 size={24} />, title: 'Portfolio Review', color: '#2E7D5B', desc: 'Standardized format across all RMs. In-depth reviews with AI-assisted insights and capital gain statements.' },
  { icon: <MessageSquare size={24} />, title: 'Continuous Communication', color: '#6B4FA0', desc: 'Proactive personalized communication at scale — WhatsApp connect and investor communications.' },
  { icon: <ShieldCheck size={24} />, title: 'Opportunity Identification', color: '#E55A3A', desc: 'Predictive analytics to identify SIP top-up opportunities and referral management integration.' },
  { icon: <Rocket size={24} />, title: 'Client relationship & retention', color: '#C9922A', desc: 'Predict churn before redemption. Sentiment analysis and proactive risk alerts for at-risk relationships.' },
  { icon: <Zap size={24} />, title: 'Relentless Growth', color: '#1A2744', desc: 'AUM growth through trust compounding. Referral velocity and focused cross-selling at scale.' },
];

const Session02: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStepClick = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <div id="page-s2" className="page active" style={{ background: '#F8F9FB' }}>
      {/* SECTION 1: Awake & Ignite Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: 'linear-gradient(135deg, #B2D8D8 0%, #89B3B3 50%, #5F8E8E 100%)',
          padding: '35px 60px',
          borderRadius: '24px',
          marginBottom: '40px',
          color: 'var(--navy)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 15px 40px rgba(95, 142, 142, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>

        <div style={{ flex: '1', zIndex: 1, minWidth: '550px' }}>
          <div className="label" style={{ color: 'var(--navy)', marginBottom: '12px', letterSpacing: '4px', fontSize: '14px', opacity: 0.7, fontWeight: 800 }}>SESSION 02 • THE CLARITY</div>
          <h1 style={{
            color: 'var(--navy)',
            fontSize: '64px',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '12px',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            lineHeight: '1.1'
          }}>
            Awake & <span style={{ color: 'white' }}>Ignite.</span>
          </h1>
          <p style={{
            fontSize: '22px',
            maxWidth: '520px',
            marginBottom: '32px',
            color: 'var(--navy)',
            lineHeight: '1.5',
            fontWeight: 500,
            opacity: 0.9
          }}>
            Ideal Client Management Model (ICMM) <br />
            Our standardized framework for delivering consistent value across every single relationship.
          </p>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {['One Team', 'One Standard', 'One Delivery'].map(item => (
              <div key={item} style={{
                background: 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.6)',
                padding: '8px 20px',
                borderRadius: '12px',
                fontSize: '16px',
                color: 'var(--navy)',
                fontWeight: 800,
                whiteSpace: 'nowrap'
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '0 0 auto', zIndex: 1, position: 'relative' }}>
          <div style={{
            padding: '40px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50%',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
            width: '240px',
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '100px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            🔥
          </div>
        </div>
      </motion.div>

      {/* Main Content Sections */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          className="card mb"
          style={{ borderLeft: '4px solid #5F8E8E', padding: '20px', background: 'rgba(95, 142, 142, 0.05)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ fontSize: '22px', lineHeight: '1.6', color: 'var(--navy)', fontWeight: 500 }}>
            <strong>Ideal Client Management Model</strong> is an advanced framework to <strong>identify, evaluate, and manage clients systematically with uniformity.</strong> Instead of focusing only on AUM, it analyses the <strong>complete relationship value of a client.</strong>
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
        >
          <motion.strong style={{ display: 'block', marginBottom: '10px' }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Objective of Ideal Client Management
          </motion.strong>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Improve client experience',
              'Focus on high-value relationships',
              'Improve client experience',
              'Increase AUM per client',
              'Improve retention and referrals',
              'Structured servicing model'
            ].map((text, idx) => (
              <motion.li
                key={idx}
                style={{ fontSize: '19px', marginBottom: '6px', color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: '8px' }}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5F8E8E' }}></div>
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mantra Section */}
        <div className="grid2" style={{ gap: '16px', margin: '24px 0', gridTemplateColumns: '1fr 1fr' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="card"
            style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', textAlign: 'left', background: 'var(--navy)', color: '#fff', borderRadius: '24px' }}
          >
            <div className="label" style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '14px' }}>Components for ICMM</div>
            <div style={{ fontSize: '32px', fontWeight: 800, margin: '12px 0', lineHeight: '1.2' }}>
              Tech: <span style={{ color: 'var(--blue-light)' }}>Empowers</span><br />
              Data: <span style={{ color: '#A0CED9' }}>Guides</span><br />
              Team: <span style={{ color: 'var(--gold)' }}>Delivers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card"
            style={{
              padding: '20px',
              borderRadius: '24px',
              background: '#FFFFFF',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <h3 style={{
              fontSize: '24px',
              marginBottom: '16px',
              color: 'var(--navy)',
              fontWeight: 900,
              fontFamily: "'Playfair Display', serif"
            }}>
              Benefits include:
            </h3>
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
                { plain: 'Better ', bold: 'client prioritization' },
                { plain: 'Higher ', bold: 'AUM growth' },
                { plain: 'Improved ', bold: 'RM productivity' },
                { plain: 'More ', bold: 'referrals, retention and cross-selling' },
                { plain: 'Stronger ', bold: 'client loyalty' }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 5, background: 'rgba(95, 142, 142, 0.12)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '19px',
                    color: 'var(--navy)',
                    fontWeight: 600,
                    padding: '10px 14px',
                    background: 'rgba(95, 142, 142, 0.08)',
                    borderRadius: '12px',
                    border: '1px solid rgba(95, 142, 142, 0.12)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ color: '#5F8E8E' }}><ShieldCheck size={18} strokeWidth={3} /></div>
                  <span>{benefit.plain}<strong>{benefit.bold}</strong></span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Process Map */}
        <div style={{ padding: '60px 0 100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="label" style={{ letterSpacing: '5px', color: 'var(--text3)' }}>THE FRAMEWORK</div>
            <h3 style={{
              fontSize: '48px',
              color: 'var(--navy)',
              marginTop: '10px',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900
            }}>ICMM Process Map</h3>
            <p style={{ color: 'var(--text3)', marginTop: '12px', fontSize: '22px', fontWeight: 500 }}>
              Click any phase to explore the operational standard
            </p>
          </div>

          <div className="steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '60px 50px',
            position: 'relative'
          }}>
            {[0, 1, 2, 3, 7, 6, 5, 4].map((stepIndex, orderIndex) => {
              const s = stepData[stepIndex];
              const i = stepIndex;
              const isActive = openStep === i;
              const bgTint = `${s.color}15`;

              // Arrow Logic for "S" Flow:
              // Row 1 (order 0-3): 1->2(R), 2->3(R), 3->4(R), 4->5(D)
              // Row 2 (order 4-7): 8, 7<-8(L), 6<-7(L), 5<-6(L)
              // Wait, let's simplify: 
              // Order 0, 1, 2: Right Arrow
              // Order 3: Down Arrow (points to Order 4 which is Step 5)
              // Order 7, 6, 5: Left Arrow (sequentially 5->6, 6->7, 7->8) 
              // Actually if Step 5 is Order 7, Step 6 is Order 6...
              // Step 4 is Order 3. Step 5 is Order 7.

              const hasRightArrow = orderIndex < 3;
              const hasDownArrow = orderIndex === 3;
              const hasLeftArrow = orderIndex > 4; // 7->6, 6->5, 5->4 (Physically Pos 7 to 6, 6 to 5, 5 to 4)

              return (
                <div key={i} style={{ position: 'relative' }}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: `0 15px 35px ${s.color}30` }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: '24px 16px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      background: isActive ? s.color : '#FFFFFF',
                      border: '2px solid',
                      borderColor: isActive ? '#FFFFFF' : `${s.color}99`,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      zIndex: 2,
                      boxShadow: isActive ? `0 15px 30px ${s.color}40` : `0 5px 15px rgba(0,0,0,0.03)`
                    }}
                    onClick={() => handleStepClick(i)}
                  >
                    {!isActive && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, ${bgTint} 0%, rgba(255,255,255,0.9) 100%)`,
                        pointerEvents: 'none'
                      }} />
                    )}

                    <div style={{
                      width: '52px',
                      height: '52px',
                      background: isActive ? 'rgba(255,255,255,0.2)' : `${s.color}15`,
                      color: isActive ? '#fff' : s.color,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                      zIndex: 1,
                      border: isActive ? 'none' : `1px solid ${s.color}20`
                    }}>{s.icon}</div>

                    <div style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: isActive ? '#fff' : 'var(--navy)',
                      zIndex: 1,
                      lineHeight: '1.2'
                    }}>{s.title}</div>

                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      fontSize: '11px',
                      fontWeight: 900,
                      opacity: isActive ? 0.8 : 0.5,
                      color: isActive ? '#fff' : s.color,
                      background: isActive ? 'rgba(255,255,255,0.15)' : `${s.color}10`,
                      padding: '2px 6px',
                      borderRadius: '6px'
                    }}>0{i + 1}</div>
                  </motion.div>

                  {/* Arrows */}
                  {hasRightArrow && (
                    <div style={{ position: 'absolute', right: '-35px', top: '50%', transform: 'translateY(-50%)', zIndex: 3, color: s.color, opacity: 0.6 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L13 6M19 12L13 18" /></svg>
                    </div>
                  )}

                  {hasDownArrow && (
                    <div style={{ position: 'absolute', bottom: '-45px', left: '50%', transform: 'translateX(-50%)', zIndex: 3, color: s.color, opacity: 0.6 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5V19M12 19L6 13M12 19L18 13" /></svg>
                    </div>
                  )}

                  {hasLeftArrow && (
                    <div style={{ position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)', zIndex: 3, color: s.color, opacity: 0.6 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12L11 6M5 12L11 18" /></svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {openStep !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '30px',
                padding: '20px 24px',
                background: '#FFFFFF',
                borderRadius: '24px',
                borderLeft: `10px solid ${stepData[openStep].color}`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                display: 'flex',
                gap: '24px',
                alignItems: 'center'
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '60px',
                height: '60px',
                background: `${stepData[openStep].color}15`,
                color: stepData[openStep].color,
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {React.cloneElement(stepData[openStep].icon as React.ReactElement<any>, { size: 32, strokeWidth: 2.5 })}
              </div>
              <div>
                <div className="label" style={{ color: stepData[openStep].color, marginBottom: '8px' }}>STAGE 0{openStep + 1}</div>
                <div style={{ fontSize: '42px', fontWeight: 900, color: 'var(--navy)', marginBottom: '16px', letterSpacing: '-1px' }}>
                  {stepData[openStep].title}
                </div>
                <div style={{ fontSize: '24px', color: 'var(--text2)', lineHeight: '1.7', fontWeight: 500 }}>
                  {stepData[openStep].desc}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Result Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #1A2744 0%, #2C3E50 100%)',
            borderRadius: '32px',
            padding: '40px 30px',
            textAlign: 'center',
            margin: '60px 0 40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(26, 39, 68, 0.2)'
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '180px', opacity: 0.05, color: '#fff', transform: 'translate(-10%, -20%)' }}>"</div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="label" style={{
              color: 'var(--gold)',
              letterSpacing: '8px',
              fontSize: '18px',
              marginBottom: '15px',
              justifyContent: 'center'
            }}>RESULT</div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '56px',
              color: '#fff',
              fontWeight: 900,
              marginBottom: '30px',
              letterSpacing: '-1px'
            }}>The Outcome of ICMM</h2>

            <div style={{
              width: '40px',
              height: '3px',
              background: 'var(--gold)',
              margin: '0 auto 40px',
              borderRadius: '2px'
            }}></div>

            <div style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '32px',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: '1.6',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              “We can succeed not by selling products, but by delivering structured, <span style={{ color: 'var(--gold)' }}>goal-based financial solutions</span> with (<span style={{ color: '#A0CED9', fontWeight: 800 }}>Data</span>) supported by strong Relationship Management (<span style={{ color: 'var(--gold)', fontWeight: 800 }}>Team</span>) and <span style={{ color: 'var(--blue-light)', fontWeight: 800 }}>Technology</span>.”
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', marginTop: '20px', fontSize: '18px', fontWeight: 700, letterSpacing: '2px' }}>
              CRM • SOFTWARE • AI
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Session02;
