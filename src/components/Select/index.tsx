import React from 'react';
import Select from 'react-select';
import { UnknownObject } from '../../helpers/commonInterface';
const SelectBox = ({
  options,
  handleInputChange,
  placeholder,
  error,
  bggradient,
  ...props
}: UnknownObject): JSX.Element => {
  return (
    <>
      <Select
        className={`border  h-12 sm:h-14 rounded-xl bg-white dark:bg-primary outline-none text-paua dark:text-white w-full px-3 sm:px-5 py-2 placeholder-heather focus:shadow-none focus:ring-oyster-bay dark:focus:ring-scampi  font-inter cursor-pointer ${
          props.className || ''
        } ${
          bggradient &&
          'bg-gradient-to-l from-paris-rgba via-paua-rgba to-paua-dark-rgba'
        } ${
          error
            ? 'border-danger focus:border-danger'
            : 'border-oyster-bay dark:border-scampi focus:border-oyster-bay  dark:focus:border-scampi'
        } ${props.disabled ? 'opacity-60' : ''}`}
        options={options}
        placeholder={placeholder}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      {error && <span className="text-danger block text-xs">{error}</span>}
    </>
  );
};

export default SelectBox;
