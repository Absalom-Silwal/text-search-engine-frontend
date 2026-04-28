import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ config, query, setQuery, onSearch }) => {
  const sz = config.font_size;
  const primary = config.primary_action;
  const secondary = config.secondary_action;
  const surface = config.surface_color;
  const txt = config.text_color;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 mb-8">
      <form id="search-form" className="flex gap-2" onSubmit={handleSubmit}>
        <div className="flex-1 relative">
          <Search 
            style={{
              width: '18px',
              height: '18px',
              color: secondary,
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)'
            }} 
          />
          <input 
            id="search-input" 
            type="text" 
            placeholder="Search for documents..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl pl-11 pr-4 py-3 outline-none transition-shadow"
            style={{
              fontSize: `${sz}px`, 
              background: surface, 
              color: txt, 
              border: '1.5px solid #e2e8f0', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = primary;
              e.target.style.boxShadow = `0 0 0 3px ${primary}22`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
            }}
          />
        </div>
        <button 
          type="submit" 
          className="rounded-xl px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80 flex items-center gap-2"
          style={{
            background: primary, 
            fontSize: `${sz * 0.9}px`
          }}
        >
          <Search style={{ width: '16px', height: '16px' }} /> Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
