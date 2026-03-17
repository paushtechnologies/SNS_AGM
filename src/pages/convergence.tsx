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
                    <p className="slide-subtitle" style={{ fontSize: '32px', color: '#6EE7B7', fontWeight: 900, textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
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
                    <div className="slide-label" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#065F46', fontWeight: 900, letterSpacing: '2px' }}>Collective Realization</div>
                    <h1 className="slide-title" style={{ fontSize: '40px', fontWeight: 900 }}>Key Insights from Every Session</h1>
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
                            whileHover={{ y: -5, background: '#fff', boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}
                            className="priority-card"
                            style={{ borderTop: '6px solid #10B981', padding: '32px 24px', background: '#F8FAFC' }}
                        >
                            <div className="priority-title" style={{ fontSize: '28px', marginBottom: '16px', color: '#0F172A', fontWeight: 900 }}><Star size={24} color="#10B981" fill="#10B981" style={{ opacity: 0.15, position: 'absolute', right: '20px', top: '20px' }} /><Star size={20} color="#10B981" /> {item.t}</div>
                            <p style={{ color: '#334155', fontWeight: 700, fontSize: '22px', lineHeight: '1.5' }}>{item.d}</p>
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
                        { t: 'Capabilities shifts required' },
                        { t: 'Focus areas for the next year' },
                        { t: 'Strategic Bets' }
                    ].map(item => (
                        <motion.div
                            key={item.t}
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ background: 'rgba(255,255,255,0.08)', y: -5 }}
                            className="priority-card"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                borderColor: 'rgba(255,255,255,0.1)',
                                padding: '40px 24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                minHeight: '160px',
                                borderRadius: '24px'
                            }}
                        >
                            <div className="priority-title" style={{ color: '#fff', fontSize: '24px', fontWeight: 900, margin: 0, lineHeight: '1.4', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <CheckCircle size={28} color="#10B981" />
                                {item.t}
                            </div>
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
                        { t: 'What has been decided', c: '#10B981' },
                        { t: 'What is still open', c: '#F59E0B' },
                        { t: 'What will not be pursued?', c: '#EF4444' }
                    ].map(item => (
                        <motion.div
                            key={item.t}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                            style={{
                                flex: 1,
                                padding: '40px 24px',
                                background: '#F8FAFC',
                                borderRadius: '24px',
                                borderLeft: `8px solid ${item.c}`,
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                minHeight: '160px'
                            }}
                        >
                            <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#1E293B', margin: 0, lineHeight: '1.4' }}>{item.t}</h3>
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
                        { t: 'Who owns what' },
                        { t: 'Any team specific drive' },
                        { t: 'Timelines & milestones' }
                    ].map(item => (
                        <motion.div
                            key={item.t}
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ background: 'rgba(255,255,255,0.06)', y: -5 }}
                            className="priority-card"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                borderColor: 'rgba(255,255,255,0.1)',
                                padding: '40px 24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                minHeight: '160px',
                                borderRadius: '24px'
                            }}
                        >
                            <div className="priority-title" style={{ color: '#fff', fontSize: '24px', fontWeight: 900, margin: 0, lineHeight: '1.4' }}>{item.t}</div>
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '20px 0' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                        >
                            <div className="label" style={{ color: '#34D399', marginBottom: '15px', fontSize: '15px', fontWeight: 900, letterSpacing: '2px' }}>ORGANIZATION PROVIDES</div>
                            <h3 className="ceo-quote" style={{ fontSize: '36px', color: '#FFFFFF', margin: 0, lineHeight: '1.2', fontWeight: 900 }}>What the organization will provide</h3>
                        </motion.div>
                        <motion.div
                            style={{ borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="label" style={{ color: '#FCD34D', marginBottom: '15px', fontSize: '15px', fontWeight: 900, letterSpacing: '2px' }}>ORGANIZATION EXPECTS</div>
                            <h3 className="ceo-quote" style={{ fontSize: '36px', color: '#FFFFFF', margin: 0, lineHeight: '1.2', fontWeight: 900 }}>What the organization expects</h3>
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
                        style={{ fontSize: '26px', color: '#FFFFFF', fontWeight: 800, fontFamily: "'Playfair Display', serif", fontStyle: 'italic', marginBottom: '32px', lineHeight: '1.4' }}
                    >
                        "What will be that one thing I will do differently from tomorrow?"
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
                    style={{ fontSize: '28px', color: '#064E3B', fontWeight: 900, marginTop: '20px', lineHeight: '1.4' }}
                >
                    Let’s come with one phrase that we all will remember.
                </motion.p>
                <div style={{ marginTop: '40px', width: '120px', height: '6px', background: '#10B981', margin: '40px auto', borderRadius: '4px' }}></div>
                <p style={{ fontSize: '20px', color: '#047857', letterSpacing: '4px', fontWeight: 900 }}>SNS ABPM • 2026-27</p>
            </motion.div>
        </div>
    );
};

export default Convergence;