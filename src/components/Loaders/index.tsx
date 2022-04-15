import React from 'react';

interface Props {
  pageLoader?: boolean;
}
const Loaders: React.FC<Props> = ({ pageLoader }) => {
  return <div>Loaders</div>;
};

export default Loaders;
