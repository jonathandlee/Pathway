// src/components/SearchBar.tsx
import { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <form className="flex" role="search" aria-label="Search for places">
      <label htmlFor="search-input" className="sr-only">
        Search for places
      </label>
      <input
        id="search-input"
        type="text"
        className="flex-grow p-2 border rounded-l"
        placeholder="Search for places"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded-r">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
