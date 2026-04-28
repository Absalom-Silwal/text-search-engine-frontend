import React from 'react';

const Footer = ({ config }) => {
  const sz = config.font_size;
  const secondary = config.secondary_action;

  return (
    <footer className="text-center py-6 mt-auto">
      <p id="footer-text" style={{ fontSize: `${sz * 0.78}px`, color: secondary }}>
        {config.footer_text}
      </p>
    </footer>
  );
};

export default Footer;
