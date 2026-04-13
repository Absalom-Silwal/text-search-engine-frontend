import React from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import { useSearch } from './hooks/useSearch';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function App() {
  const { results, loading, error, search, sendFeedback } = useSearch();
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = React.useState('');
  const handleChange = (event, value) => {
    setPage(value);
    search(query,value)
  };
  const handleSetQuery = (query)=>{
    setQuery(query)
  }
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>🔍 Feedback Search Engine</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Ranking improves as you click on results!
      </p>
      <p style={{ color: '#de5656', marginBottom: '30px' }}>Note: All data displayed in this application is synthetically generated and used solely for learning and demonstration purposes.</p>
      
      <SearchBar page={page} query={query} onSetQuery={handleSetQuery} onSearch={search} />
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && (
        <div>
        <ResultsList results={results} onResultClick={sendFeedback} />
        {
          results.items && results.items.length>0 && (
           <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <Pagination count={results.pages} variant="outlined" shape="rounded" defaultPage={results.page} onChange={handleChange} />
          </Stack>)
        }
        </div>
        
       
        

      )}
    </div>
  );
}

export default App;
