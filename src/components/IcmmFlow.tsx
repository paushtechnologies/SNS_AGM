import React from 'react';

const icmmSteps = [
  'Client Segmentation', 'Onboarding', 'CRM Tracking', 'Portfolio Review',
  'Continuous Communication', 'Opportunity Identification', 'Client Retention', 'Business Growth'
];
const icmmColors = ['#1A2744', '#4A7FD4', '#2C8FA5', '#2E7D5B', '#6B4FA0', '#E55A3A', '#C9922A', '#1A2744'];

const IcmmFlow: React.FC = () => {
  return (
    <div className="icmm-flow">
      {icmmSteps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="icmm-step">
            <div className="icmm-num">{i + 1}</div>
            <div className="icmm-box" style={{ background: icmmColors[i] }}>{step}</div>
          </div>
          {i < icmmSteps.length - 1 && (
            <div className="icmm-arr">→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default IcmmFlow;
