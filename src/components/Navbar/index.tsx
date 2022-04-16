import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className="border bg-rose-white rounded-lg">
      <div className=" py-4 px-2 container mx-auto flex justify-between">
        <h4
          className="cursor-pointer font-bold italic hover:text-logo"
          onClick={() => {
            Navigate('/products');
          }}
        >
          UPayments Store
        </h4>
        {/* make btn */}
        <h4 className="cursor-pointer font-bold italic hover:text-logo">
          Register
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
