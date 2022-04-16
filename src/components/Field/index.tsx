import React from 'react';
import { JsxEmit } from 'typescript';

interface InputInterface extends React.HTMLProps<HTMLInputElement> {
  id?: string;
  name?: string;
  className?: string;
  bgGradient?: boolean;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  readOnly?: boolean;
  error?: string;
  as?: string;
}
const Field = ({
  error,
  bgGradient: bggradient,
  ...props
}: InputInterface): JSX.Element => {
  return (
    <>
      <input
        {...props}
        className={`border  h-12 sm:h-14 rounded-xl bg-white dark:bg-primary outline-none text-paua dark:text-white w-full px-3 sm:px-5 py-2 placeholder-heather focus:shadow-none focus:ring-oyster-bay dark:focus:ring-scampi  font-inter ${
          props.className || ''
        } ${
          bggradient &&
          'bg-gradient-to-l from-paris-rgba via-paua-rgba to-paua-dark-rgba'
        } ${
          error
            ? 'border-danger focus:border-danger'
            : 'border-oyster-bay dark:border-scampi focus:border-oyster-bay  dark:focus:border-scampi'
        } ${props.disabled ? 'opacity-60' : ''}`}
      />
      {error && <span className="text-danger block text-xs">{error}</span>}
    </>
  );
};

export default Field;
