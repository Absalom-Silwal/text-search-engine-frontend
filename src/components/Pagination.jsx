import React from 'react';

const Pagination = ({ config, page, totalPages, onPageChange }) => {
  const sz = config.font_size;
  const surface = config.surface_color;
  const txt = config.text_color;
  const secondary = config.secondary_action;

  return (
    <div className="flex justify-center items-center gap-4 mt-8 mb-4">
      <button 
        id="prev-btn" 
        disabled={page <= 1} 
        onClick={() => onPageChange(page - 1)}
        className={`rounded-lg px-5 py-2 font-medium transition-opacity ${page <= 1 ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}`}
        style={{
          background: surface, 
          color: txt, 
          border: '1px solid #e2e8f0', 
          fontSize: `${sz * 0.85}px`
        }}
      >
        ← Previous
      </button>
      <span style={{ fontSize: `${sz * 0.82}px`, color: secondary }}>
        Page {page} of {totalPages}
      </span>
      <button 
        id="next-btn" 
        disabled={page >= totalPages} 
        onClick={() => onPageChange(page + 1)}
        className={`rounded-lg px-5 py-2 font-medium transition-opacity ${page >= totalPages ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}`}
        style={{
          background: surface, 
          color: txt, 
          border: '1px solid #e2e8f0', 
          fontSize: `${sz * 0.85}px`
        }}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
