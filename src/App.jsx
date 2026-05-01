import React, { useState } from 'react';
import Header from './components/Header';
import DisclaimerBanner from './components/DisclaimerBanner';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import Footer from './components/Footer';
import { mockResults, defaultConfig } from './mockData';
import client from './api/client';


function App() {
  const [query, setQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [config] = useState(defaultConfig);

  const doSearch = async (changedPage=null) => {
    if (!query.trim()) return;
    const q = query.toLowerCase();
    try {
      const response = await client.get(`/search?q=${q}&&page=${changedPage?changedPage:page}`);
      const  data = response.data
      setResults(data.items);
      setSearchedQuery(query);
      setPage(data.page);
      setHasSearched(true);
      setTotalPages(data.pages)
    } catch (err) {
      //setError('Search failed');
      console.error(err);
    } 
  };

    const sendFeedback = async (docId) => {
    try {
      await client.post('/feedback', {
        query: query,
        doc_id: docId
      });
      // Optionally re-search to show updated ranking immediately
      await doSearch();
      //window.open(link, "_blank");

    } catch (err) {
      console.error('Feedback failed', err);
    }
  };


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
        results={results}
        searchedQuery={searchedQuery}
        hasSearched={hasSearched}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        changePage = {doSearch}
        sendFeedback = {sendFeedback}
      />
      
      <Footer config={config} />
    </div>
  );
}

export default App;
