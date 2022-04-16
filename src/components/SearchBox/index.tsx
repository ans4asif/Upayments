import React from 'react';
import { UnknownObject } from '../../helpers/commonInterface';

const SearchBox = ({ onChange }: UnknownObject): JSX.Element => {
  return (
    <input
      id="product-search"
      className="border  h-12 sm:h-14 rounded-xl bg-white dark:bg-primary outline-none text-paua dark:text-white w-full px-3 sm:px-5 py-2 placeholder-heather focus:shadow-none focus:ring-oyster-bay dark:focus:ring-scampi  font-inter border-oyster-bay dark:border-scampi focus:border-oyster-bay  dark:focus:border-scampi
      "
      type="search"
      onChange={(e) => {
        onChange({ value: e.target.value });
      }}
      placeholder="Apple Watch,Samsung S21…"
    />
  );
};

export default SearchBox;
