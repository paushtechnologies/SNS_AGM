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
  { icon: <Rocket size={24} />, title: 'Retention', color: '#C9922A', desc: 'Predict churn before redemption. Sentiment analysis and proactive risk alerts for at-risk relationships.' },
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
          <div className="label" style={{ color: 'var(--navy)', marginBottom: '12px', letterSpacing: '4px', fontSize: '11px', opacity: 0.7, fontWeight: 800 }}>SESSION 02 • THE CLARITY</div>
          <h1 style={{
            color: 'var(--navy)',
            fontSize: '52px',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '12px',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            lineHeight: '1.1'
          }}>
            Awake & <span style={{ color: 'white' }}>Ignite.</span>
          </h1>
          <p style={{
            fontSize: '18px',
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
                fontSize: '13px',
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
        <div className="card mb" style={{ borderLeft: '4px solid #5F8E8E', padding: '30px', background: 'rgba(95, 142, 142, 0.05)' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--navy)', fontWeight: 500 }}>
            <strong>Ideal Client Model</strong> is an advanced framework to <strong>identify, evaluate, and manage clients systematically with uniformity.</strong> Instead of focusing only on AUM, it analyses the <strong>complete relationship value of a client.</strong>
          </p>
        </div>

        {/* Mantra Section */}
        <div className="grid2" style={{ gap: '24px', marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'var(--navy)', color: '#fff', borderRadius: '24px' }}
          >
            <div className="label" style={{ color: 'var(--gold)', letterSpacing: '4px' }}>THE ICMM MANTRA</div>
            <div style={{ fontSize: '32px', fontWeight: 800, margin: '20px 0', lineHeight: '1.3' }}>
              Tech: <span style={{ color: 'var(--blue-light)' }}>Empowers</span><br />
              Data: <span style={{ color: '#A0CED9' }}>Guides</span><br />
              Team: <span style={{ color: 'var(--gold)' }}>Delivers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{
              padding: '40px',
              borderRadius: '24px',
              background: '#FFFFFF',
              boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
              border: '1.5px solid rgba(0,0,0,0.05)'
            }}
          >
            <h3 style={{
              fontSize: '26px',
              marginBottom: '25px',
              color: 'var(--navy)',
              fontWeight: 900,
              fontFamily: "'Playfair Display', serif"
            }}>
              Benefits include:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '18px' }}>
              {[
                { plain: 'Better ', bold: 'client prioritization' },
                { plain: 'Higher ', bold: 'AUM growth' },
                { plain: 'Improved ', bold: 'RM productivity' },
                { plain: 'More ', bold: 'referrals, retention and cross-selling' },
                { plain: 'Stronger ', bold: 'client loyalty' }
              ].map((benefit, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  fontSize: '18.5px', 
                  color: 'var(--navy)', 
                  fontWeight: 600,
                  padding: '16px 20px',
                  background: 'rgba(95, 142, 142, 0.08)',
                  borderRadius: '16px',
                  border: '1.5px solid rgba(95, 142, 142, 0.12)'
                }}>
                  <div style={{ color: '#5F8E8E' }}><ShieldCheck size={22} strokeWidth={3} /></div>
                  <span>{benefit.plain}<strong>{benefit.bold}</strong></span>
                </div>
              ))}
            </div>
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
            <p style={{ color: 'var(--text3)', marginTop: '12px', fontSize: '18px', fontWeight: 500 }}>
              Click any phase to explore the operational standard
            </p>
          </div>

          <div className="steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '100px 60px',
            position: 'relative'
          }}>
            {stepData.map((s, i) => {
              const isActive = openStep === i;
              const bgTint = `${s.color}15`;

              // Only show arrows for steps 1-3 and 5-7 (horizontal)
              const hasHorizontalArrow = (i + 1) % 4 !== 0;
              // Show a downward arrow for step 4 (row transition)
              const hasRowArrow = i === 3;

              return (
                <div key={i} style={{ position: 'relative' }}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: `0 20px 50px ${s.color}50` }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: '35px 24px',
                      borderRadius: '24px',
                      cursor: 'pointer',
                      background: isActive ? s.color : '#FFFFFF',
                      border: '3px solid',
                      borderColor: isActive ? '#FFFFFF' : s.color,
                      textAlign: 'center',
                      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      zIndex: 2,
                      boxShadow: isActive ? `0 20px 40px ${s.color}70` : `0 10px 30px ${s.color}20`
                    }}
                    onClick={() => handleStepClick(i)}
                  >
                    {!isActive && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, ${bgTint} 0%, rgba(255,255,255,0.8) 100%)`,
                        pointerEvents: 'none'
                      }} />
                    )}

                    <div style={{
                      width: '72px',
                      height: '72px',
                      background: isActive ? 'rgba(255,255,255,0.25)' : `${s.color}25`,
                      color: isActive ? '#fff' : s.color,
                      borderRadius: '22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: isActive ? 'none' : `0 12px 24px ${s.color}20`,
                      zIndex: 1,
                      border: isActive ? 'none' : `1px solid ${s.color}30`
                    }}>{s.icon}</div>

                    <div style={{
                      fontSize: '17px',
                      fontWeight: 900,
                      color: isActive ? '#fff' : 'var(--navy)',
                      zIndex: 1,
                      lineHeight: '1.2'
                    }}>{s.title}</div>

                    {/* Step Number Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      fontSize: '12px',
                      fontWeight: 950,
                      opacity: isActive ? 0.8 : 0.6,
                      color: isActive ? '#fff' : s.color,
                      background: isActive ? 'rgba(255,255,255,0.2)' : `${s.color}15`,
                      padding: '4px 8px',
                      borderRadius: '8px'
                    }}>0{i + 1}</div>
                  </motion.div>

                  {/* Horizontal Arrow Indicator */}
                  {hasHorizontalArrow && (
                    <div style={{
                      position: 'absolute',
                      right: '-46px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 3,
                      color: s.color,
                      opacity: 0.8,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  {/* Row Wrap Arrow Indicator */}
                  {hasRowArrow && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-66px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 3,
                      color: s.color,
                      opacity: 0.8,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
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
                marginTop: '40px',
                padding: '50px',
                background: '#FFFFFF',
                borderRadius: '32px',
                borderLeft: `12px solid ${stepData[openStep].color}`,
                boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
                display: 'flex',
                gap: '40px',
                alignItems: 'center'
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '100px',
                height: '100px',
                background: `${stepData[openStep].color}15`,
                color: stepData[openStep].color,
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {React.cloneElement(stepData[openStep].icon as React.ReactElement<any>, { size: 48, strokeWidth: 2.5 })}
              </div>
              <div>
                <div className="label" style={{ color: stepData[openStep].color, marginBottom: '8px' }}>STAGE 0{openStep + 1}</div>
                <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--navy)', marginBottom: '16px', letterSpacing: '-1px' }}>
                  {stepData[openStep].title}
                </div>
                <div style={{ fontSize: '19px', color: 'var(--text2)', lineHeight: '1.7', fontWeight: 500 }}>
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
            background: '#CBD5E0',
            borderRadius: '24px',
            padding: '80px 40px',
            textAlign: 'center',
            margin: '120px 0 80px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '120px', opacity: 0.1, color: 'var(--navy)', transform: 'translate(-20%, -20%)' }}>"</div>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '26px', fontStyle: 'italic', color: 'var(--navy)', lineHeight: '1.6', position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
            “We can succeed not by selling products, but by delivering structured, goal-based financial solutions with (<span style={{ color: '#2E7D5B', fontWeight: 800 }}>Data</span>) supported by strong Relationship Management (<span style={{ color: 'var(--gold)', fontWeight: 800 }}>Team</span>) and <span style={{ color: '#4A7FD4', fontWeight: 800 }}>Technology</span>. (CRM, software, AI ) ”
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Session02;
