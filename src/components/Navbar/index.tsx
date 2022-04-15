import React from 'react';

const Navbar = () => {
  console.log('nav');
  return (
    <div className="bg-white border rounded-lg">
      <div className="bg-red-100 py-4 px-2 container mx-auto flex justify-between">
        <h4 className="cursor-pointer font-bold">UPayments</h4>
        {/* make btn */}
        <h4 className="cursor-pointer font-bold">Register</h4>
      </div>
    </div>
  );
};

export default Navbar;
