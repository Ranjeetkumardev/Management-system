import { SearchIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Card from './Card';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false);

  // Debounced fetch function
  const fetchSearchResults = async (query) => {
    if (query && query.length >= 2) { // Only search if the query has at least 2 characters
      try {
        const response = await axios.get(`http://localhost:4000/search?query=${query}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setResults([]); // Clear results if input is empty or less than 3 characters
    }
  };
  
  // Debounce the fetch function
  const debouncedFetchSearchResults = debounce(fetchSearchResults, 300);

  // Effect to handle search on input change
  useEffect(() => {
    debouncedFetchSearchResults(searchQuery);

    // Clean up the debounce function on component unmount
    return () => {
      debouncedFetchSearchResults.cancel();
    };
  }, [searchQuery ,isSearchExecuted]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearchExecuted(false); // Reset search execution state on input change
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsSearchExecuted(true);
      setSearchQuery(e.target.value);
    }
  };

  return (
    <div className="w-full h-full mt-4 px-5">
      <div className='flex items-center pl-2 sticky top-14  bg-white h-14 mb-4'>
        <input
          type="search"
          placeholder='Search anything..'
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown} 
          className="w-96 p-2   border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <span
          className="p-2 border border-gray-900 cursor-pointer text-center hover:bg-gray-200"
         
          onClick={() =>{ 
            setIsSearchExecuted(true)
             setSearchQuery(searchQuery) }}
        >
          <SearchIcon />
        </span>
      </div>

      {/* Display search results below the search bar */}
      <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {results.length > 0 ? (
          results.map((item) => (
            <Card 
              key={item._id} 
              title={item.title}
              category={item.category}
              quantity={item.quantity}
              price={item.price}
            />
          ))
        ) :  (
          isSearchExecuted && searchQuery.length >= 3 ? ( 
            <div className="text-center text-gray-600 mt-4">No results found.</div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Search;
