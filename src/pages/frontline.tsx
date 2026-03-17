import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, ArrowRight, MessageSquare, TrendingUp } from 'lucide-react';
import './frontline.css';

const FrontlineConnect: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const slideIn = {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" as any }
    };

    const cardColors = [
        '#6366f1', // Indigo
        '#ec4899', // Pink
        '#8b5cf6', // Violet
        '#10b981', // Emerald
        '#f59e0b', // Amber
        '#3b82f6'  // Blue
    ];

    const participants = [
        "Neha Shah", "Jignesh Panani", "Samir Mehta", "Sachin Palekar",
        "Sagar Kasare", "Ashish Kesarkar", "Bharat Kumar", "Hiral Pathak",
        "Nishita Shah", "Ruchika Kesarkar", "Sumeet Gupta", "Akash Vaishya"
    ];

    return (
        <div className="frontline-container">
            {/* HER0 SLIDE */}
            <motion.div
                className="slide-section dark"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="connect-icon"><Users size={200} /></div>

                <div className="slide-header">
                    <div className="slide-label" style={{ fontSize: '18px' }}>SESSION 02 • THE DIALOGUE</div>
                    <h1 className="slide-title">Frontline Connect</h1>
                    <p className="slide-subtitle" style={{ fontSize: '22px', maxWidth: '1000px', fontWeight: 700, margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
                        One-on-one interaction between Relationship Managers and the senior management team.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '0px',
                    width: '100%',
                    position: 'relative'
                }}>
                    <motion.div
                        whileHover={{ y: -10 }}
                        style={{
                            flex: 1,
                            background: 'rgba(255,255,255,0.05)',
                            padding: '32px',
                            borderRadius: '24px',
                            border: '1.5px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            textAlign: 'left',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'rgba(16, 185, 129, 0.2)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#10B981',
                            marginBottom: '20px',
                            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                        }}><Target size={32} /></div>
                        <div style={{ fontSize: '26px', fontWeight: 900, marginBottom: '8px', color: '#fff' }}>Performance Review</div>
                        <p style={{ margin: 0, opacity: 0.8, fontSize: '20px', fontWeight: 500, lineHeight: 1.4 }}>
                            Deep dive into 2025-26 achievements and learning.
                        </p>
                    </motion.div>

                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        style={{ color: '#10B981', opacity: 0.8 }}
                    >
                        <ArrowRight size={48} strokeWidth={3} />
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        style={{
                            flex: 1,
                            background: 'rgba(16, 185, 129, 0.1)',
                            padding: '32px',
                            borderRadius: '24px',
                            border: '1.5px solid rgba(16, 185, 129, 0.3)',
                            backdropFilter: 'blur(10px)',
                            textAlign: 'left',
                            boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: '#10B981',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            marginBottom: '20px',
                            boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
                        }}><TrendingUp size={32} /></div>
                        <div style={{ fontSize: '26px', fontWeight: 900, marginBottom: '8px', color: '#fff' }}>Goal Alignment</div>
                        <p style={{ margin: 0, opacity: 0.8, fontSize: '20px', fontWeight: 500, lineHeight: 1.4, color: '#D1FAE5' }}>
                            Setting the trajectory for 2026-27 growth.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* PURPOSE SLIDE */}
            <motion.div
                className="slide-section"
                {...slideIn}
            >
                <div className="slide-header">
                    <div className="slide-label" style={{ fontSize: '28px' }}>The Purpose</div>
                    <h1 className="slide-title">Clarity & Commitment</h1>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p className="slide-subtitle" style={{ color: 'var(--navy)', fontWeight: 500, textAlign: 'center' }}>
                        "These discussions help establish clear expectations and provide clarity on each RM’s role in the next phase of SNS’s growth journey."
                    </p>
                    <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
                        <div style={{ padding: '16px 40px', background: 'rgba(230, 57, 70, 0.1)', borderRadius: '100px', border: '1px solid rgba(230, 57, 70, 0.25)', fontWeight: 800, fontSize: '20px', color: '#1E293B', boxShadow: '0 4px 12px rgba(230, 57, 70, 0.05)' }}>
                            Role Clarity
                        </div>
                        <div style={{ padding: '16px 40px', background: 'rgba(230, 57, 70, 0.1)', borderRadius: '100px', border: '1px solid rgba(230, 57, 70, 0.25)', fontWeight: 800, fontSize: '20px', color: '#1E293B', boxShadow: '0 4px 12px rgba(230, 57, 70, 0.05)' }}>
                            Vision Alignment
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* PARTICIPANTS SLIDE */}
            <motion.div
                className="slide-section"
                {...slideIn}
            >
                <div className="slide-header">
                    <div className="slide-label" style={{ fontSize: '28px' }}>THE FRONTLINE TEAM</div>
                    <h1 className="slide-title">Participants</h1>
                </div>

                <motion.div
                    className="participant-grid"
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {participants.map((name, index) => {
                        const accentColor = cardColors[index % cardColors.length];
                        return (
                            <motion.div
                                key={name}
                                className="participant-card creative"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8, rotate: -2 },
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                        transition: { type: "spring", damping: 12, stiffness: 100 }
                                    }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 1,
                                    zIndex: 10
                                }}
                                animate={{
                                    y: [0, -4, 0],
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                        ease: "easeInOut"
                                    }
                                }}
                                style={{
                                    '--accent': accentColor,
                                    borderColor: `${accentColor}30`
                                } as any}
                            >
                                <div className="avatar-box" style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)` }}>
                                    {index + 1}
                                </div>

                                <div className="participant-info">
                                    <div className="participant-name">{name}</div>
                                    <div className="participant-role">Relationship Manager</div>
                                </div>

                                <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${accentColor}20, transparent 70%)` }}></div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* CTA SECTION */}
            <motion.div
                className="slide-section dark"
                style={{ textAlign: 'center', background: 'linear-gradient(135deg, #141E33 0%, #10B981 200%)' }}
                {...slideIn}
            >
                <h1 className="slide-title">Empowering the Individual.</h1>
                <p className="slide-subtitle">The strength of the team is each individual member. The strength of each member is the team.</p>
                <div style={{ marginTop: '32px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 32px', background: 'white', color: '#10B981', borderRadius: '100px', fontWeight: 900, cursor: 'pointer' }}>
                        <MessageSquare size={20} /> Start the Conversation
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FrontlineConnect;