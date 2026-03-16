import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Anchor } from 'lucide-react';
import './convergence.css';

const Convergence: React.FC = () => {
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
        <div className="convergence-container">
            {/* HERO SLIDE */}
            <motion.div
                className="slide-section dark"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ background: 'linear-gradient(135deg, #0F172A 0%, #064E3B 100%)', borderTop: 'none' }}
            >
                <div style={{ position: 'absolute', top: '20px', right: '40px', opacity: 0.1 }}><Anchor size={300} /></div>

                <div className="slide-header">
                    <div className="slide-label" style={{ background: 'rgba(52, 211, 153, 0.2)', color: '#34D399' }}>SESSION 06 • THE SUMMIT</div>
                    <h1 className="slide-title">Convergence</h1>
                    <p className="slide-subtitle" style={{ fontSize: '28px', color: '#34D399', fontWeight: 900 }}>
                        Reconnect to the purpose.
                    </p>
                </div>
            </motion.div>

            {/* INSIGHTS SLIDE */}
            <motion.div
                className="slide-section"
                {...slideIn}
            >
                <div className="slide-header">
                    <div className="slide-label">Collective Realization</div>
                    <h1 className="slide-title">Key Insights from Every Session</h1>
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
                    {[
                        { t: 'The Realization', d: 'What we have collectively realized' },
                        { t: 'Assumptions Update', d: 'What assumptions have changed' },
                        { t: 'The New Mindset', d: 'What new mind set should guide us from now on' }
                    ].map(item => (
                        <motion.div 
                            key={item.t} 
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -5, background: '#fff' }}
                            className="priority-card" 
                            style={{ borderTop: '4px solid #10B981', padding: '24px' }}
                        >
                            <div className="priority-title" style={{ fontSize: '20px', marginBottom: '12px' }}><Star size={20} color="#10B981" /> {item.t}</div>
                            <p style={{ color: '#64748B', fontWeight: 600, fontSize: '18px' }}>{item.d}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* PRIORITIES SLIDE */}
            <motion.div
                className="slide-section dark"
                {...slideIn}
                style={{ background: 'linear-gradient(135deg, #111827 0%, #064E3B 100%)' }}
            >
                <div className="slide-header">
                    <div className="slide-label">Focus Strategy</div>
                    <h1 className="slide-title">Strategic Priorities</h1>
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
                    {[
                        { t: 'Capabilities shifts required', l: [] },
                        { t: 'Focus areas for the next year', l: [] },
                        { t: 'Strategic Bets', l: [] }
                    ].map(item => (
                        <motion.div 
                            key={item.t} 
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ background: 'rgba(255,255,255,0.08)' }}
                            className="priority-card" 
                            style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', padding: '24px' }}
                        >
                            <div className="priority-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}><CheckCircle size={22} color="#10B981" /> {item.t}</div>
                            <ul className="priority-list">
                                {item.l.map(li => <li key={li} style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.1)', fontSize: '18px' }}>{li}</li>)}
                            </ul>
                            {item.l.length === 0 && <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px', fontStyle: 'italic' }}>Defined during workshop</p>}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* DECISIONS SLIDE */}
            <motion.div
                className="slide-section"
                {...slideIn}
            >
                <div className="slide-header">
                    <div className="slide-label">Clarification</div>
                    <h1 className="slide-title">Decisions taken - Lets together clarify</h1>
                </div>

                <motion.div 
                    style={{ display: 'flex', gap: '20px' }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { t: 'What has been decided', c: '#10B981', l: ['Full rollout of ICMM', 'Mandatory CRM logging', 'Technology first approach'] },
                        { t: 'What is still open', c: '#F59E0B', l: ['Third-party API integrations', 'Mobile app timeline', 'Regional expansion dates'] },
                        { t: 'What will not be pursued?', c: '#EF4444', l: ['Hardware development', 'Manual reporting systems', 'Legacy paper processes'] }
                    ].map(item => (
                        <motion.div 
                            key={item.t} 
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                            style={{ flex: 1, padding: '24px', background: '#F8FAFC', borderRadius: '20px', borderLeft: `6px solid ${item.c}`, transition: 'all 0.3s ease' }}
                        >
                            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '16px' }}>{item.t}</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {item.l.map(li => (
                                    <motion.li 
                                        key={li} 
                                        whileHover={{ x: 5 }}
                                        style={{ padding: '10px 0', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 600, display: 'flex', gap: '10px', fontSize: '18px', transition: 'all 0.2s ease' }}
                                    >
                                        <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: item.c, marginTop: '7px' }} />
                                        {li}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* DEFINE SLIDE */}
            <motion.div
                className="slide-section dark"
                {...slideIn}
                style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)' }}
            >
                <div className="slide-header">
                    <div className="slide-label">Execution Architecture</div>
                    <h1 className="slide-title">Define</h1>
                </div>

                <motion.div 
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { t: 'Who owns what', d: 'Clear accountability matrices for every project and department.' },
                        { t: 'Any team specific drive', d: 'Tailored initiatives designed for specialized operational units.' },
                        { t: 'Timelines & milestones', d: 'Hard deadlines for our ₹10,000 Crore Vision milestones.' }
                    ].map(item => (
                        <motion.div 
                            key={item.t}
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ background: 'rgba(255,255,255,0.06)' }}
                            className="priority-card" 
                            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)', padding: '24px' }}
                        >
                            <div className="priority-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{item.t}</div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: '18px' }}>{item.d}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* CEO COMMENT SLIDE */}
            <motion.div
                className="slide-section"
                {...slideIn}
            >
                <div className="slide-header">
                    <div className="slide-label">The Partnership</div>
                    <h1 className="slide-title">CEO Comment</h1>
                </div>

                <motion.div 
                    className="ceo-box"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ padding: '40px' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="label" style={{ color: '#10B981', marginBottom: '12px', fontSize: '12px', fontWeight: 900 }}>ORGANIZATION PROVIDES</div>
                            <h3 className="ceo-quote" style={{ fontSize: '24px', marginBottom: '16px', color: '#fff' }}>What the organization will provide</h3>
                            <p style={{ opacity: 0.8, fontSize: '17px' }}>World-class infrastructure, cutting-edge AI tools, and a culture of radical transparency.</p>
                        </motion.div>
                        <motion.div 
                            style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '40px' }}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="label" style={{ color: 'var(--gold)', marginBottom: '12px', fontSize: '12px', fontWeight: 900 }}>ORGANIZATION EXPECTS</div>
                            <h3 className="ceo-quote" style={{ fontSize: '24px', marginBottom: '16px', color: '#fff' }}>What the organization expects</h3>
                            <p style={{ opacity: 0.8, fontSize: '17px' }}>Unwavering commitment to excellence, 100% data integrity, and extreme ownership.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* PERSONAL REFLECTION SLIDE */}
            <motion.div
                className="slide-section dark"
                {...slideIn}
                style={{ background: '#0F172A', padding: '60px 40px' }}
            >
                <div className="slide-header">
                    <div className="slide-label">Individual Commitment</div>
                    <h1 className="slide-title">Personal reflection (Everyone)</h1>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '22px', color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontFamily: "'Playfair Display', serif", fontStyle: 'italic', marginBottom: '32px' }}
                    >
                        "What will be that one thing I will do differently from tomorrow"
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.08)' }}
                        className="reflection-input" 
                        style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '2px dashed rgba(255,255,255,0.2)', padding: '30px', transition: 'all 0.3s ease' }}
                    >
                        Write your commitment here...
                    </motion.div>
                </div>
            </motion.div>

            {/* CLOSING THOUGHT SLIDE */}
            <motion.div
                className="slide-section"
                {...slideIn}
                style={{ textAlign: 'center', background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)', padding: '80px 40px' }}
            >
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ fontSize: '80px', marginBottom: '16px' }}
                >
                    🚀
                </motion.div>
                <h1 className="slide-title" style={{ fontSize: '48px', color: '#064E3B', marginBottom: '24px' }}>Closing Thought</h1>
                <motion.p 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="slide-subtitle" 
                    style={{ fontSize: '24px', color: '#065F46', fontWeight: 800, marginTop: '20px' }}
                >
                    Let’s come with one phrase that we all will remember.
                </motion.p>
                <div style={{ marginTop: '40px', width: '120px', height: '4px', background: '#10B981', margin: '40px auto' }}></div>
                <p style={{ fontSize: '18px', color: '#059669', letterSpacing: '2px', fontWeight: 900 }}>SNS ABPM • 2026-27</p>
            </motion.div>
        </div>
    );
};

export default Convergence;