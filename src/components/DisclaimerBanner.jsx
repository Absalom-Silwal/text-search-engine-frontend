import React from 'react';

const DisclaimerBanner = ({ config }) => {
  const sz = config.font_size;

  return (
    <div className="max-w-2xl mx-auto px-4 mb-6">
      <div className="rounded-lg px-4 py-2.5" style={{ background: '#fef9c3', border: '1px solid #fde68a' }}>
        <p 
          id="disclaimer" 
          style={{
            fontSize: `${sz * 0.78}px`, 
            color: '#92400e', 
            textAlign: 'center', 
            lineHeight: 1.5
          }}
        >
          {config.disclaimer_text}
        </p>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
