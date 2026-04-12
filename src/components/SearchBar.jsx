import React, { useState } from 'react';

const SearchBar = ({ page,query,onSetQuery,onSearch }) => {
 // const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query,page);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => onSetQuery(e.target.value)}
        placeholder="Search documents..."
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '5px' }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
