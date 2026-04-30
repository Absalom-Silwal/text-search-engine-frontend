import React from 'react';

const Header = ({ config }) => {
  const sz = config.font_size;
  const primary = config.primary_action;
  const secondary = config.secondary_action;

  return (
    <header className="pt-10 pb-4 text-center">
      <h1 
        id="app-title" 
        style={{
          fontSize: `${sz * 2.2}px`, 
          color: primary, 
          fontWeight: 700, 
          letterSpacing: '-0.5px'
        }}
      >
        {config.app_title}
      </h1>
      <p 
        id="app-subtitle" 
        style={{
          fontSize: `${sz * 0.95}px`, 
          color: secondary, 
          marginTop: '4px'
        }}
      >
        {config.subtitle}
      </p>
    </header>
  );
};

export default Header;
