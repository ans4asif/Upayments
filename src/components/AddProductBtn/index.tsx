import React from 'react';

const ProductBtn = ({ onClick }: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className="w-20 h-20 rounded-full bg-black opacity-30 hover:opacity-40 relative"
      onClick={onClick}
    >
      <span className="font-bold text-6xl text-white block absolute top-1 left-1 translate-x-4">
        +
      </span>
    </button>
  );
};

export default ProductBtn;
