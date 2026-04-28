import React, { useState } from 'react';
import Header from './components/Header';
import DisclaimerBanner from './components/DisclaimerBanner';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import Footer from './components/Footer';
import { mockResults, defaultConfig } from './mockData';

const RESULTS_PER_PAGE = 3;

function App() {
  const [query, setQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [config] = useState(defaultConfig);

  const doSearch = () => {
    if (!query.trim()) return;
    
    const q = query.toLowerCase();
    let filteredResults = mockResults.filter(r =>
      r.title.toLowerCase().includes(q) || r.snippet.toLowerCase().includes(q)
    );
    
    if (filteredResults.length === 0) {
      filteredResults = mockResults;
    }
    
    setResults(filteredResults);
    setSearchedQuery(query);
    setPage(1);
    setHasSearched(true);
  };

  const getPageResults = () => {
    const start = (page - 1) * RESULTS_PER_PAGE;
    return results.slice(start, start + RESULTS_PER_PAGE);
  };

  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);

  return (
    <div 
      className="h-full w-full overflow-auto flex flex-col" 
      style={{ 
        backgroundColor: config.background_color,
        color: config.text_color,
        fontFamily: `${config.font_family}, DM Sans, sans-serif`
      }}
    >
      <Header config={config} />
      
      <DisclaimerBanner config={config} />
      
      <SearchBar 
        config={config} 
        query={query} 
        setQuery={setQuery} 
        onSearch={doSearch} 
      />
      
      <ResultsList 
        config={config}
        results={getPageResults()}
        searchedQuery={searchedQuery}
        hasSearched={hasSearched}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
      
      <Footer config={config} />
    </div>
  );
}

export default App;
