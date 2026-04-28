import React from 'react';

const ResultCard = ({ config, result }) => {
  const sz = config.font_size;
  const primary = config.primary_action;
  const secondary = config.secondary_action;
  const surface = config.surface_color;

  return (
    <div 
      className="rounded-xl p-5 transition-shadow hover:shadow-md" 
      style={{
        background: surface, 
        border: '1px solid #e2e8f0', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
      }}
    >
      <h3 
        style={{
          fontSize: `${sz * 1.1}px`, 
          fontWeight: 600, 
          color: primary, 
          marginBottom: '6px'
        }}
      >
        {result.title}
      </h3>
      <p 
        style={{
          fontSize: `${sz * 0.88}px`, 
          color: secondary, 
          lineHeight: 1.6, 
          marginBottom: '12px'
        }}
      >
        {result.snippet}
      </p>
      <div className="flex flex-wrap gap-3">
        <span 
          className="rounded-md px-2.5 py-1" 
          style={{
            fontSize: `${sz * 0.72}px`, 
            background: '#eff6ff', 
            color: '#1d4ed8'
          }}
        >
          TF-IDF: {result.tfidf.toFixed(2)}
        </span>
        <span 
          className="rounded-md px-2.5 py-1" 
          style={{
            fontSize: `${sz * 0.72}px`, 
            background: '#f0fdf4', 
            color: '#15803d'
          }}
        >
          Feedback: +{result.feedback.toFixed(2)}
        </span>
        <span 
          className="rounded-md px-2.5 py-1 font-semibold" 
          style={{
            fontSize: `${sz * 0.72}px`, 
            background: '#faf5ff', 
            color: '#7e22ce'
          }}
        >
          Final: {result.final.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ResultCard;
