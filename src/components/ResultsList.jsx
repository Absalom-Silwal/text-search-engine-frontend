import React from 'react';
import ResultCard from './ResultCard';
import Pagination from './Pagination';
import { FileSearch } from 'lucide-react';

const ResultsList = ({ config, results, searchedQuery, hasSearched, page, totalPages, setPage }) => {
  const sz = config.font_size;
  const secondary = config.secondary_action;
  const txt = config.text_color;

  if (!hasSearched) {
    return (
      <div className="max-w-2xl mx-auto px-4 flex-1">
        <div className="text-center py-16">
          <FileSearch 
            style={{
              width: '48px',
              height: '48px',
              color: '#cbd5e1',
              margin: '0 auto 12px',
              display: 'block'
            }} 
          />
          <p style={{ fontSize: `${sz * 0.95}px`, color: secondary }}>
            Enter a query above to search documents
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 flex-1">
      <p style={{ fontSize: `${sz * 0.82}px`, color: secondary, marginBottom: '12px' }}>
        {results.length} result{results.length !== 1 ? 's' : ''} for "<strong style={{ color: txt }}>{searchedQuery}</strong>"
      </p>
      <div className="flex flex-col gap-4">
        {results.map(r => (
          <ResultCard key={r.id} config={config} result={r} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination 
          config={config} 
          page={page} 
          totalPages={totalPages} 
          onPageChange={setPage} 
        />
      )}
    </div>
  );
};

export default ResultsList;
