import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Index from './pages';

function App() {
  const Navigate = useNavigate();
  const location = useLocation();
  console.log({ location });
  useEffect(() => {
    // if ((location.pathname = '/products')) {
    Navigate('/products');
    // }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/:view" element={<Index />} />
        <Route path="/:view/:child" element={<Index />} />
        {/* <Route path="*" element={<Index />} /> */}
      </Routes>
    </>
  );
}

export default App;
