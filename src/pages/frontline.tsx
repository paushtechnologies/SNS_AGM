import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, ArrowRight, MessageSquare } from 'lucide-react';
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
                    <div className="slide-label">SESSION 02 • THE DIALOGUE</div>
                    <h1 className="slide-title">Frontline Connect</h1>
                    <p className="slide-subtitle">
                        One-on-one interaction between Relationship Managers and the senior management team.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '40px' }}>
                    <div className="participant-card">
                        <div className="avatar-circle"><Target /></div>
                        <div>
                            <div className="participant-name">Performance Review</div>
                            <p style={{ margin: 0, opacity: 0.7, fontSize: '18px' }}>Deep dive into FY25 achievements and learning.</p>
                        </div>
                    </div>
                    <div className="participant-card">
                        <div className="avatar-circle"><ArrowRight /></div>
                        <div>
                            <div className="participant-name">Goal Alignment</div>
                            <p style={{ margin: 0, opacity: 0.7, fontSize: '18px' }}>Setting the trajectory for FY26 growth.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* PURPOSE SLIDE */}
            <motion.div 
                className="slide-section"
                {...slideIn}
            >
                <div className="slide-header">
                    <div className="slide-label">The Purpose</div>
                    <h1 className="slide-title">Clarity & Commitment</h1>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '24px', lineHeight: '1.6', color: 'var(--navy)', fontWeight: 500 }}>
                        "These discussions help establish clear expectations and provide clarity on each RM’s role in the next phase of SNS’s growth journey."
                    </p>
                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <div style={{ padding: '20px 40px', background: '#F8FAFC', borderRadius: '100px', border: '1px solid #E2E8F0', fontWeight: 700 }}>
                            Role Clarity
                        </div>
                        <div style={{ padding: '20px 40px', background: '#F8FAFC', borderRadius: '100px', border: '1px solid #E2E8F0', fontWeight: 700 }}>
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
                    <div className="slide-label">THE FRONTLINE TEAM</div>
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
                style={{ textAlign: 'center', background: 'linear-gradient(135deg, #141E33 0%, #E63946 200%)' }}
                {...slideIn}
            >
                <h1 className="slide-title">Empowering the Individual.</h1>
                <p className="slide-subtitle">The strength of the team is each individual member. The strength of each member is the team.</p>
                <div style={{ marginTop: '40px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 32px', background: 'white', color: '#E63946', borderRadius: '100px', fontWeight: 900, cursor: 'pointer' }}>
                        <MessageSquare size={20} /> Start the Conversation
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FrontlineConnect;