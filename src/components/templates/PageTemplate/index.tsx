import React, { Suspense } from 'react';
import Loaders from '../../Loaders';
import Navbar from '../../Navbar';

interface Props {
  children: React.ReactNode;
}
const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto my-2">
      <Navbar />
      <Suspense fallback={<Loaders pageLoader />}>{children}</Suspense>
    </div>
  );
};

export default PageTemplate;
