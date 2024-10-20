import React from 'react';

const SearchBar = () => {
  return (
    <div className="mt-6 w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 rounded-md text-gray-900"
          placeholder="Search for a hospital, airport, hotel... nearest to you"
        />
        <button className="absolute top-0 right-0 h-full px-6 bg-gray-700 text-white rounded-r-md">
          &#x2191;
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
