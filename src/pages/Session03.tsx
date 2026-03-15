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

const Session03: React.FC = () => {
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
    <div id="page-s3" className="page active" style={{ background: 'var(--cream)', color: 'var(--navy)' }}>
      {/* SECTION 1: HERO & CORE PURPOSE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: 'linear-gradient(135deg, #1A2744 0%, #2C4A8A 100%)',
          padding: '45px 60px',
          borderRadius: '32px',
          marginBottom: '50px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(74,127,212,0.2) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>

        <div style={{ flex: '1', zIndex: 1, minWidth: '550px', textAlign: 'left' }}>
          <div className="label" style={{ color: 'var(--gold-light)', marginBottom: '16px', letterSpacing: '4px', fontSize: '12px', fontWeight: 800 }}>SESSION 03 • THE TRANSFORMATION</div>
          <h1 style={{
            color: '#fff',
            fontSize: '52px',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '16px',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            lineHeight: '1.1'
          }}>
            Align & <span style={{ color: 'var(--gold)' }}>Accelerate.</span>
          </h1>
          <p style={{
            fontSize: '19px',
            maxWidth: '600px',
            marginBottom: '32px',
            color: 'rgba(255,255,255,0.95)',
            lineHeight: '1.5',
            fontWeight: 700
          }}>
            One Team, One Standard, One Model & One Delivery.<br />
            <span style={{ fontSize: '16px', fontWeight: 500, opacity: 0.8 }}>Ideal Client Management Model (ICMM): Our standardized framework for delivering consistent value.</span>
          </p>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {['Inspire', 'Improve', 'Impact'].map(item => (
              <div key={item} style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '8px 20px',
                borderRadius: '12px',
                fontSize: '13px',
                color: 'var(--gold-light)',
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
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.15)',
            width: '240px',
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '100px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            ⚡
          </div>
        </div>
      </motion.div>

      {/* SECTION 2: STRATEGIC COMMITMENT & VISION */}
      <motion.div
        className="card mb"
        {...fadeIn}
        style={{
          background: 'var(--navy)',
          color: '#fff',
          padding: '60px 50px',
          borderRadius: '32px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '60px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div style={{ flex: '1' }}>
          <div className="label" style={{ color: 'var(--gold-light)' }}>Our Strategic Commitment</div>
          <h3 style={{ color: '#fff', fontSize: '52px', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>Tech. Data. Team.</h3>
          <div style={{
            padding: '30px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p style={{ fontSize: '20px', color: '#fff', fontWeight: 700, margin: 0, lineHeight: '1.5' }}>
              <span style={{ color: 'var(--gold-light)', fontWeight: 900 }}>Vision:</span> Become one of the most "intelligent & consistent" MF distributor.
            </p>
          </div>
        </div>

        <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
          <div className="label" style={{ color: 'var(--gold-light)', marginBottom: '8px' }}>FY FOCUS AREAS</div>
          {[
            'Embed AI into daily workflow process',
            'Deploy AI-driven client intelligence',
            'Team Fluency (Data & Process Training)',
            'Structured Data Architecture'
          ].map(area => (
            <div key={area} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '17px',
              color: '#fff',
              fontWeight: 600,
              padding: '16px 20px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{ color: 'var(--gold-light)' }}><CheckCircle2 size={22} /></div>
              {area}
            </div>
          ))}
        </div>
      </motion.div>

      {/* SECTION 3: CRM OPTIMIZATION OVERHAUL */}
      <motion.div
        className="card mb"
        {...fadeIn}
        style={{
          padding: '60px',
          background: '#ffffff',
          borderRadius: '40px',
          boxShadow: '0 30px 80px rgba(0,0,0,0.06)',
          border: '1.5px solid rgba(0,0,0,0.05)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', zIndex: 0 }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div className="label" style={{ color: 'var(--gold)', letterSpacing: '6px' }}>FOUNDATION ENGINE</div>
            <h2 style={{ fontSize: '48px', color: 'var(--navy)', fontWeight: 950, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>CRM Optimization</h2>
            <p style={{ fontSize: '20px', color: 'var(--text3)', fontWeight: 500, maxWidth: '700px', margin: '0 auto' }}>
              Activating the engine of growth through 100% CRM focus and data-driven discipline.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
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
                items: ['Action Plan Integration', 'Survey Integration', 'Inward/Outward Tracker'],
                color: '#6f42c2'
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                style={{
                  background: `${cat.color}35`,
                  borderRadius: '28px',
                  padding: '35px 28px',
                  border: `2px solid ${cat.color}50`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: cat.color,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 900, color: 'var(--navy)', marginBottom: '18px', letterSpacing: '-0.5px' }}>{cat.title}</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {cat.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15.5px', color: 'var(--navy)', fontWeight: 600, lineHeight: '1.4', opacity: 0.9 }}>
                        <div style={{ color: cat.color, marginTop: '3px' }}><CheckCircle2 size={16} strokeWidth={3} /></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: THE AI NECESSITY */}
      <div className="grid2 mb">
        <motion.div className="card" style={{ background: 'linear-gradient(135deg, #1A2744 0%, #2C4A8A 100%)', color: '#fff' }} {...fadeIn}>
          <div className="label" style={{ color: 'var(--gold-light)' }}>Why AI Matters Now</div>
          <h2 style={{ fontSize: '42px', color: '#fff', marginBottom: '20px' }}>It's No Longer Optional.</h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '24px',
            fontStyle: 'italic',
            borderLeft: '3px solid var(--gold)',
            paddingLeft: '20px'
          }}>
            "Business across industries are investing heavily in AI to & therefore a necessity for survival."
          </p>
          <div className="check-list" style={{ color: '#fff' }}>
            <li style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }}><span style={{ color: 'var(--gold-light)' }}>→</span>Rising Investor Expectations</li>
            <li style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }}><span style={{ color: 'var(--gold-light)' }}>→</span>Fintech Benchmarks resetting Service</li>
            <li style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }}><span style={{ color: 'var(--gold-light)' }}>→</span>Tightening Margins & Compliance</li>
            <li style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }}><span style={{ color: 'var(--gold-light)' }}>→</span>Data-rich but Insight-poor reality</li>
          </div>
          <div style={{ marginTop: '30px', padding: '24px', background: 'var(--gold)', borderRadius: '16px', color: 'var(--navy)', fontWeight: 800, textAlign: 'center', fontSize: '20px' }}>
            AI is a Competitive Necessity.
          </div>
        </motion.div>

        <motion.div className="card" {...fadeIn}>
          <div className="label">The Impact</div>
          <h2>Decision Intelligence at Scale</h2>
          <p style={{ fontSize: '18px', marginBottom: '32px' }}>Empowering the same team to achieve 3X Productivity.</p>
          <div className="grid2">
            {[
              { icon: <TrendingUp />, t: 'Predict Churn', d: 'Before Redemption' },
              { icon: <Zap />, t: 'Identify SIPs', d: 'Top-up Opportunities' },
              { icon: <Database />, t: 'Auto-Portfolio', d: 'Instant Insights' },
              { icon: <Users />, t: 'Meeting Briefs', d: 'AI Preparations' }
            ].map(item => (
              <div key={item.t} style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '16px' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '16px' }}>{item.t}</div>
                <div style={{ fontSize: '14px', color: 'var(--text2)' }}>{item.d}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SECTION 5: CURRENT REALITY */}
      <motion.div className="card mb" style={{ padding: '60px 40px', textAlign: 'center' }} {...fadeIn}>
        <div className="label">Our Current Reality</div>
        <h2 style={{ fontSize: '48px', marginBottom: '40px', fontFamily: "'Playfair Display', serif" }}>We Are Sitting on Powerful Data</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {[
            { n: '₹1,900+', l: 'Cr Total AUM', s: '42px' },
            { n: '10+', l: 'Years Transaction History', s: '42px' },
            { n: 'Redemption', l: 'Cycle Intelligence', s: '32px' },
            { n: 'SIP', l: 'Behavior Trends', s: '42px' }
          ].map((item, i) => (
            <div key={i} style={{
              background: '#fff',
              padding: '40px 20px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              borderBottom: '4px solid var(--gold)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '200px'
            }}>
              <div style={{
                fontSize: item.s,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                color: 'var(--navy)',
                lineHeight: 1.1,
                marginBottom: '10px',
                wordBreak: 'break-word'
              }}>
                {item.n}
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text2)',
                lineHeight: 1.3,
                opacity: 0.8
              }}>
                {item.l}
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: 'var(--gold)', fontWeight: 700 }}>
          "Today we report data. Tomorrow we must activate intelligence."
        </div>
      </motion.div>

      {/* SECTION 6: HUMAN + AI */}
      <div className="grid2 mb">
        <motion.div className="card" {...fadeIn}>
          <div className="label">Relationship 2.0</div>
          <h2>Human + AI</h2>
          <p style={{ fontWeight: 700, fontStyle: 'italic', color: 'var(--gold)', margin: '12px 0 24px' }}>AI Will Upgrade — Not Replace — Our Team</p>
          <ul className="check-list">
            <li><span className="li-dot">◉</span>Data-backed client conversations</li>
            <li><span className="li-dot">◉</span>Proactive risk alerts (Alpha/Churn)</li>
            <li><span className="li-dot">◉</span>Instant goal simulations for confidence</li>
            <li><span className="li-dot">◉</span>Trust Deepens. Relationships Scale.</li>
          </ul>
        </motion.div>

        <motion.div className="card" style={{ background: 'var(--navy)', color: '#fff' }} {...fadeIn}>
          <div className="label" style={{ color: 'var(--gold-light)' }}>AI in CX</div>
          <h3>The Experience Standard</h3>
          <div className="grid2" style={{ gap: '15px', marginTop: '20px' }}>
            {[
              'Faster Investor Support', 'Personalized Advice Nudges',
              'Omni-channel Consistency', 'Proactive Engagement',
              'Automated Backend Tasks', 'Personalized Scaling'
            ].map(c => (
              <div key={c} style={{ background: 'rgba(255,255,255,0.08)', padding: '15px', borderRadius: '12px', fontSize: '14px', fontWeight: 600 }}>
                {c}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SECTION 7: DETAILED AREAS & ROI */}
      <div className="grid3 mb">
        <motion.div className="card" {...fadeIn}>
          <div style={{ color: 'var(--gold)', marginBottom: '15px' }}><Cpu size={32} /></div>
          <h3>Application Areas</h3>
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.5 }}>AI Chatbots, Predictive Analytics, Sentiment Analysis, Quality Assurance, Portfolio Review, WhatsApp Connect.</p>
        </motion.div>
        <motion.div className="card" {...fadeIn}>
          <div style={{ color: 'var(--gold)', marginBottom: '15px' }}><MessageSquare size={32} /></div>
          <h3>GenAI Opportunities</h3>
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.5 }}>Communication Drafts, Call Summaries, Knowledge Base creation, Training content & Team onboarding.</p>
        </motion.div>
        <motion.div className="card" {...fadeIn}>
          <div style={{ color: 'var(--gold)', marginBottom: '15px' }}><TrendingUp size={32} /></div>
          <h3>KPIs to Track ROI</h3>
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.5 }}>CSAT, First Contact Resolution, Self-service Adoption, Churn Rate, Revenue per Advisor.</p>
        </motion.div>
      </div>

      {/* SECTION 8: ROADMAP & STRATEGY */}
      <motion.div className="card mb" {...fadeIn}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="label">The Implementation</div>
          <h2 className="section-title">Recommended Roadmap</h2>
        </div>
        <div className="roadmap-row">
          {[
            { p: '1', t: 'Map', d: 'Investor Journey Mapping', c: '#4A7FD4' },
            { p: '2', t: 'Integrate', d: 'Full CRM Integration', c: '#6B4FA0' },
            { p: '3', t: 'Train', d: 'Team Enablement & Adoption', c: '#2C8FA5' },
            { p: '4', t: 'Scale', d: 'Measure, Refine & Impact', c: '#2E7D5B' }
          ].map((item, idx) => (
            <React.Fragment key={item.p}>
              <div className="rr-phase" style={{ background: item.c, flex: '1' }}>
                <div className="rr-ph">Phase {item.p}</div>
                <div className="rr-t">{item.t}</div>
                <div className="rr-d">{item.d}</div>
              </div>
              {idx < 3 && <div className="rr-arr" style={{ background: 'transparent' }}><ArrowRight color="var(--navy)" /></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="quote-block" style={{ marginTop: '40px', background: 'var(--navy)' }}>
          <div className="q-text">"AI is not replacing staff. AI is amplifying trust, scale, and consistency."</div>
        </div>
      </motion.div>

      {/* SECTION 9: VISION 10,000 CRORE */}
      <motion.div
        className="vision-end"
        style={{
          background: 'linear-gradient(135deg, #1A2744 0%, #2C4A8A 100%)',
          textAlign: 'center',
          padding: '80px 40px'
        }}
        {...fadeIn}
      >
        <div className="label" style={{ color: 'var(--gold-light)' }}>The Milestone</div>
        <h1 style={{ fontSize: '64px', marginBottom: '20px' }}>The ₹10,000 Cr Journey</h1>
        <div className="grid2" style={{ maxWidth: '900px', margin: '40px auto', gap: '30px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '18px', opacity: 0.7 }}>Current Platform AUM</div>
            <div style={{ fontSize: '48px', fontWeight: 900, color: 'var(--gold-light)' }}>₹1,900 Cr</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid var(--gold)' }}>
            <div style={{ fontSize: '18px', opacity: 0.7 }}>Milestone Future AUM</div>
            <div style={{ fontSize: '48px', fontWeight: 900, color: 'var(--gold)' }}>₹10,000 Cr</div>
          </div>
        </div>
        <p style={{ fontSize: '24px', maxWidth: '800px', margin: '0 auto 40px', opacity: 0.9 }}>Value Lift: Credibility, AMC Negotiation, Operating Leverage, Valuation Multiples.</p>

        <div className="grid4 mb">
          {[
            { t: 'Disciplined', d: 'Execution Outcome' },
            { t: 'Performance', d: 'Scale with Quality' },
            { t: 'Standard', d: 'New Thinking Model' },
            { t: 'Leadership', d: '2nd Line Creation' }
          ].map(item => (
            <div key={item.t} style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontWeight: 800, color: 'var(--gold-light)', textTransform: 'uppercase', fontSize: '14px', marginBottom: '8px' }}>{item.t}</div>
              <div style={{ fontSize: '16px', fontWeight: 600 }}>{item.d}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* SECTION 10: EXECUTION & OUTCOME */}
      <div className="grid2 mb" style={{ marginTop: '60px' }}>
        <motion.div className="card" {...fadeIn}>
          <div className="label">Path to Excellence</div>
          <h2>Execution Strategy</h2>
          <ul className="check-list">
            <li><CheckCircle2 size={18} color="var(--gold)" /> Data Preparation & Depth Review</li>
            <li><CheckCircle2 size={18} color="var(--gold)" /> Standardized Portfolio Formats</li>
            <li><CheckCircle2 size={18} color="var(--gold)" /> 100% CRM Adoption & More</li>
            <li><CheckCircle2 size={18} color="var(--gold)" /> AI Tool Integration Across Org</li>
            <li><CheckCircle2 size={18} color="var(--gold)" /> 100% ICMM Mapping</li>
          </ul>
        </motion.div>

        <motion.div className="card" style={{ background: 'var(--navy)', color: '#fff' }} {...fadeIn}>
          <div className="label" style={{ color: 'var(--gold-light)' }}>Ownership</div>
          <h3>Outcome Ownership</h3>
          <div className="grid2" style={{ gap: '15px', marginTop: '10px' }}>
            {[
              'AUM Growth', 'Net Inflows per RM', 'Ticket Size Growth',
              'New Acquisitions', 'Client Retention', 'SIP Persistency',
              'Focused SIP Growth', 'Referral Velocity'
            ].map(o => (
              <div key={o} style={{ background: 'rgba(255,255,255,0.08)', padding: '12px', borderRadius: '10px', fontSize: '13px', fontWeight: 600 }}>
                {o}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px', fontSize: '14px', color: 'var(--gold-light)', opacity: 0.7 }}>
            What we control: Preparation, Communication, Conviction, Follow-up, Closure.
          </div>
        </motion.div>
      </div>

      {/* SECTION 11: TRAJECTORY */}
      <motion.div className="card" style={{ padding: '60px', background: 'var(--white)', borderTop: '6px solid var(--gold)' }} {...fadeIn}>
        <div className="label">The Roadmap</div>
        <h2 style={{ fontSize: '42px', marginBottom: '40px' }}>Milestone Trajectory</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '15px' }}>
          {[
            { f: 'FY26', v: '₹3,000 Cr' },
            { f: 'FY27', v: '₹4,500 Cr' },
            { f: 'FY28', v: '₹6,000 Cr' },
            { f: 'FY29', v: '₹7,500 Cr' },
            { f: 'FY30', v: '₹9,000 Cr' },
            { f: 'FY31', v: '₹10,000 Cr' }
          ].map(year => (
            <div key={year.f} style={{ background: 'var(--blue-soft)', padding: '24px 15px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '16px', color: 'var(--text3)', fontWeight: 700, marginBottom: '8px' }}>{year.f}</div>
              <div style={{ fontSize: '22px', color: 'var(--navy)', fontWeight: 900 }}>{year.v}</div>
            </div>
          ))}
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
