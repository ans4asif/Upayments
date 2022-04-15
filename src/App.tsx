import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Index from './pages';

function App() {
  const Navigate = useNavigate();
  useEffect(() => {
    Navigate('/products');
  }, []);
  return (
    <>
      <Routes>
        <Route path="/:view" element={<Index />} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
