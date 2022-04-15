import React from 'react';

const SearchBox = () => {
  console.log('search');
  return (
    <input
      id="product-search"
      className="w-full text-paua dark:text-white border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4 bg-transparent"
      type="search"
      placeholder="Apple Watch,Samsung S21…"
      // ref={searchInput}
    />
  );
};

export default SearchBox;
