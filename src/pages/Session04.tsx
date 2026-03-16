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

      <motion.div>
        <>
          <div className="case-studies-label">
            <span>CASE STUDIES</span>
          </div>

          <h1>Lessons from the World's Best</h1>

          <div className="case-studies-container">

            <div className="case-card amazon">
              <h2>Amazon</h2>
              <hr />
              <h4>Client Obsession</h4>

              <p>Every decision starts with:</p>
              <p>"What is best for the customer?"</p>
              <p>
                The scale desired, comes from relentless focus on the client.
              </p>
            </div>

            <div className="case-card fidelity">
              <h2>Fidelity</h2>
              <hr />
              <h4>Proactive Communication</h4>

              <p>
                Clients left not due to poor returns — but because they felt ignored.
                Proactive communication builds trust.
              </p>
            </div>

            <div className="case-card toyota">
              <h2>Toyota</h2>
              <hr />
              <h4>Kaizen</h4>

              <p>
                Small improvements every day create massive long-term scale.
                Consistency compounds into competitive advantage.
              </p>

              <p>1^365 = 1 &nbsp; But 1.01^365 = 37.8</p>
            </div>

          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <h1>The Distribution Trap</h1>

          {/* Trapped Firms Section */}
          <div className="trapped-firms-section">
            <p>Trapped Firms:</p>

            <div className="flow-row">
              <div className="flow-box">
                <span>Product</span>
              </div>

              <span>→</span>

              <div className="flow-box">
                <span>Transaction</span>
              </div>

              <span>→</span>

              <div className="flow-box">
                <span>Commission</span>
              </div>
            </div>
          </div>

          {/* Scaling Firms Section */}
          <div className="scaling-firms-section">
            <p>Scaling Firms:</p>

            <div className="flow-row">
              <div className="flow-box">
                <span>Client</span>
              </div>

              <span>→</span>

              <div className="flow-box">
                <span>Relationship</span>
              </div>

              <span>→</span>

              <div className="flow-box">
                <span>Compounding</span>
              </div>
            </div>
          </div>

          <p className="slide-footer">
            Same industry. Different mindset. Completely different outcomes.
          </p>
        </>
      </motion.div>

      <motion.div>
        <>
          <div className="formula-label">
            <span>THE FORMULA</span>
          </div>

          <h1>Trust Compounding Formula</h1>

          <p className="subtitle">
            Trust grows through repetition. Every interaction either strengthens trust or weakens it.
          </p>

          <div className="formula-row">

            <div className="formula-box">
              <h3>Clarity</h3>
              <p>Clear, jargon-free communication</p>
            </div>

            <span>+</span>

            <div className="formula-box">
              <h3>Consistency</h3>
              <p>Reliable presence across markets</p>
            </div>

            <span>+</span>

            <div className="formula-box">
              <h3>Communication</h3>
              <p>Proactive, not reactive touch</p>
            </div>

            <span>+</span>

            <div className="formula-box">
              <h3>Time</h3>
              <p>Compounding requires patience</p>
            </div>

          </div>

          <div className="trust-result">
            <h2>= TRUST</h2>
            <p>The compound interest of human relationships.</p>
          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <h1>The Wealth Flywheel</h1>

          <p className="subtitle">
            Once the flywheel spins, growth becomes self-reinforcing.
          </p>

          <div className="flywheel-container">

            <div className="flywheel-center">
              <p>Self-reinforcing</p>
              <p>growth</p>
            </div>

            {/* Top */}
            <div className="flywheel-item client-trust">
              <h4>Client Trust</h4>
              <p>Foundation</p>
            </div>

            {/* Top Right */}
            <div className="flywheel-item better-guidance">
              <h4>Better Guidance</h4>
              <p>Informed advice</p>
            </div>

            {/* Right */}
            <div className="flywheel-item better-behaviour">
              <h4>Better Behaviour</h4>
              <p>Client action</p>
            </div>

            {/* Bottom Right */}
            <div className="flywheel-item better-outcomes">
              <h4>Better Outcomes</h4>
              <p>Real results</p>
            </div>

            {/* Bottom */}
            <div className="flywheel-item client-confidence">
              <h4>Client Confidence</h4>
              <p>Felt security</p>
            </div>

            {/* Bottom Left */}
            <div className="flywheel-item referrals">
              <h4>Referrals</h4>
              <p>Word of mouth</p>
            </div>

            {/* Left */}
            <div className="flywheel-item net-inflows">
              <h4>Net Inflows</h4>
              <p>Capital growth</p>
            </div>

            {/* Top Left */}
            <div className="flywheel-item aum-growth">
              <h4>AUM Growth</h4>
              <p>Scale & capacity</p>
            </div>

          </div>

          <div className="flywheel-legend">
            <div className="legend-item">
              <span className="legend-box business"></span>
              <p>Business outcomes</p>
            </div>

            <div className="legend-item">
              <span className="legend-box client"></span>
              <p>Client experience</p>
            </div>
          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <div className="capability-label">
            <span>CAPABILITY PYRAMID</span>
          </div>

          <h1>₹10,000 Crore Capability Pyramid</h1>

          <p className="subtitle">
            Strong foundations create scalable trust.
          </p>

          <div className="pyramid-container">

            <div className="pyramid-level level-5">
              <span>Level 5 — Legacy Relationships</span>
            </div>

            <div className="pyramid-level level-4">
              <span>Level 4 — Relationship Compounding</span>
            </div>

            <div className="pyramid-level level-3">
              <span>Level 3 — Consistent Engagement</span>
            </div>

            <div className="pyramid-level level-2">
              <span>Level 2 — Deep Client Understanding</span>
            </div>

            <div className="pyramid-level level-1">
              <span>Level 1 — Preparation</span>
            </div>

          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <h1>The 3 Mindset Shifts</h1>

          <div className="mindset-container">

            {/* Shift 1 */}
            <div className="mindset-row">
              <div className="mindset-number">
                <span>01</span>
              </div>

              <div className="mindset-content">
                <span>Product Thinking</span>
                <span>→</span>
                <span>Client Thinking</span>
              </div>
            </div>

            {/* Shift 2 */}
            <div className="mindset-row">
              <div className="mindset-number">
                <span>02</span>
              </div>

              <div className="mindset-content">
                <span>Activity</span>
                <span>→</span>
                <span>Impact</span>
              </div>
            </div>

            {/* Shift 3 */}
            <div className="mindset-row">
              <div className="mindset-number">
                <span>03</span>
              </div>

              <div className="mindset-content">
                <span>Short-Term Thinking</span>
                <span>→</span>
                <span>Compounding Relationships</span>
              </div>
            </div>

          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <div className="conversation-model-label">
            <span>CONVERSATION MODEL</span>
          </div>

          <h1>₹10,000 Crore Client Conversation Model</h1>

          <div className="conversation-container">

            {/* Level 1 */}
            <div className="conversation-level level-1">
              <div className="conversation-left">
                <span>Level 1</span>
                <h3>Transaction Conversation</h3>
              </div>

              <div className="conversation-right">
                <p>"What scheme should I invest in?"</p>
              </div>
            </div>

            {/* Level 2 */}
            <div className="conversation-level level-2">
              <div className="conversation-left">
                <span>Level 2</span>
                <h3>Portfolio Conversation</h3>
              </div>

              <div className="conversation-right">
                <p>"How is my portfolio performing?"</p>
              </div>
            </div>

            {/* Level 3 */}
            <div className="conversation-level level-3">
              <div className="conversation-left">
                <span>Level 3</span>
                <h3>Wealth Conversation</h3>
              </div>

              <div className="conversation-right">
                <p>"How do I build long-term wealth?"</p>
              </div>
            </div>

          </div>

          <p className="conversation-footer">
            Move every client conversation up the levels.
          </p>
        </>
      </motion.div>

      <motion.div>
        <>
          <h1>5 Behaviours of a ₹10,000 Crore Firm</h1>

          <div className="behaviours-container">

            {/* Behaviour 01 */}
            <div className="behaviour-card">
              <div className="behaviour-number">
                <span>01</span>
              </div>

              <div className="behaviour-content">
                <h3>Preparation first</h3>
                <p>Walk in over-prepared. Every meeting matters.</p>
              </div>
            </div>

            {/* Behaviour 02 */}
            <div className="behaviour-card">
              <div className="behaviour-number">
                <span>02</span>
              </div>

              <div className="behaviour-content">
                <h3>Proactive communication</h3>
                <p>Reach clients before they wonder where you are.</p>
              </div>
            </div>

            {/* Behaviour 03 */}
            <div className="behaviour-card">
              <div className="behaviour-number">
                <span>03</span>
              </div>

              <div className="behaviour-content">
                <h3>Conviction in long-term investing</h3>
                <p>Protect clients from their own short-term impulses.</p>
              </div>
            </div>

            {/* Behaviour 04 */}
            <div className="behaviour-card">
              <div className="behaviour-number">
                <span>04</span>
              </div>

              <div className="behaviour-content">
                <h3>Relationship compounding</h3>
                <p>Every interaction is an investment in the relationship.</p>
              </div>
            </div>

            {/* Behaviour 05 */}
            <div className="behaviour-card">
              <div className="behaviour-number">
                <span>05</span>
              </div>

              <div className="behaviour-content">
                <h3>Consistency of standards</h3>
                <p>The same quality, every time, for every client.</p>
              </div>
            </div>

          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <h1>The ₹10,000 Crore Equation</h1>

          <div className="equation-banner">
            <p>
              AUM Scalability = Client Trust × Consistency × Conviction × Referrals
            </p>
          </div>

          <div className="equation-cards">

            {/* Card 1 */}
            <div className="equation-card">
              <span className="equation-number">1</span>

              <h3>Client Trust</h3>

              <p>
                Earned through clarity,
                consistency and time
              </p>
            </div>

            {/* Card 2 */}
            <div className="equation-card">
              <span className="equation-number">2</span>

              <h3>Consistency</h3>

              <p>
                Same standard at every
                market — bull or bear
              </p>
            </div>

            {/* Card 3 */}
            <div className="equation-card">
              <span className="equation-number">3</span>

              <h3>Conviction</h3>

              <p>
                Guiding clients to stay long-
                term disciplined
              </p>
            </div>

            {/* Card 4 */}
            <div className="equation-card">
              <span className="equation-number">4</span>

              <h3>Referrals</h3>

              <p>
                The proof that relationships
                have compounded
              </p>
            </div>

          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <h1>₹10,000 Crore Journey Roadmap</h1>

          <div className="roadmap-container">

            {/* Timeline */}
            <div className="timeline">

              <div className="timeline-step">
                <span className="timeline-number">1</span>
              </div>

              <div className="timeline-step">
                <span className="timeline-number">2</span>
              </div>

              <div className="timeline-step">
                <span className="timeline-number">3</span>
              </div>

              <div className="timeline-step">
                <span className="timeline-number">4</span>
              </div>

              <div className="timeline-line">
                <span className="timeline-dot"></span>
                <span className="timeline-dot"></span>
                <span className="timeline-dot"></span>
                <span className="timeline-dot"></span>
                <span className="timeline-arrow">→</span>
              </div>

            </div>

            {/* Stage Cards */}

            <div className="roadmap-stages">

              {/* Stage 1 */}
              <div className="stage-card stage-1">
                <span className="stage-label">Stage 1</span>
                <h3>Distributor</h3>
                <p>Product-focused, transaction-driven</p>
              </div>

              {/* Stage 2 */}
              <div className="stage-card stage-2">
                <span className="stage-label">Stage 2</span>
                <h3>Trusted Guide</h3>
                <p>Behaviour coaching, proactive communication</p>
              </div>

              {/* Stage 3 */}
              <div className="stage-card stage-3">
                <span className="stage-label">Stage 3</span>
                <h3>Relationship Institution</h3>
                <p>Referral engine, compounding AUM</p>
              </div>

              {/* Stage 4 */}
              <div className="stage-card stage-4">
                <span className="stage-label">Stage 4</span>
                <h3>Generational Wealth Platform</h3>
                <p>Legacy relationships across families</p>
              </div>

            </div>

          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <div className="quote-container">

            <div className="quote-icon">
              <span>“</span>
              <span>”</span>
            </div>

            <blockquote className="main-quote">
              "The stock market transfers money from the impatient to the patient."
            </blockquote>

            <p className="quote-author">— Warren Buffett</p>

          </div>

          <p className="quote-subtitle">
            Our role is to help clients:
          </p>

          <div className="quote-actions">

            <div className="action-card">
              <span>Stay disciplined</span>
            </div>

            <div className="action-card">
              <span>Stay invested</span>
            </div>

            <div className="action-card">
              <span>Stay patient</span>
            </div>

          </div>
        </>
      </motion.div>

      {/* FINAL MANTRA */}
      <motion.div className="mb" style={{ background: '#D4AF37', color: '#fff', padding: '100px 60px', borderRadius: '40px', textAlign: 'center' }} {...fadeIn}>
        <h2 style={{ fontSize: '48px', marginBottom: '32px', fontWeight: 900 }}>The ₹10,000 Crore Mindset</h2>
        <p style={{ fontSize: '32px', maxWidth: '850px', margin: '0 auto', fontStyle: 'italic', fontWeight: 500 }}>
          "If SNS was already a ₹10,000 Crore firm, how would we behave tomorrow morning?"
        </p>
      </motion.div>

      <motion.div>
        <>
          <div className="closing-slide">

            <p className="closing-text-light">
              The future of SNS will not be decided
              <br />
              by markets or products.
            </p>

            <h2 className="closing-text-bold">
              It will be decided by the standards
              <br />
              we set for ourselves.
            </h2>

            <hr className="closing-divider" />

            <p className="closing-highlight">
              Let us build the ₹10,000 Crore mindset.
            </p>

          </div>
        </>
      </motion.div>

      <motion.div>
        <>
          <div className="cover-slide">

            <div className="cover-left">

              <div className="logo-container">
                <img src="logo.png" alt="Shah & Shah" />
                <h3>Shah & Shah</h3>
              </div>

              <hr className="trust-divider" />

              <p className="trust-text">
                60+ Years of Trust
              </p>

            </div>

            <div className="cover-divider"></div>

            <div className="cover-right">

              <p className="cover-subtitle">
                Building the
              </p>

              <h1 className="cover-title">
                ₹10,000
                <br />
                Crore
                <br />
                Mindset
              </h1>

              <p className="cover-footer">
                The Next Chapter of SNS Group
              </p>

            </div>

          </div>
        </>
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
