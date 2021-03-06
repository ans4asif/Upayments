import React from 'react';
import api_loading from '../../assets/icons/fetching-api-loading.svg';
import icon_loader from '../../assets/icons/loader.svg';

interface Props {
  pageLoader?: boolean;
}
export const Loaders: React.FC<Props> = ({ pageLoader }) => {
  return <div>Loaders</div>;
};

export function Loader(): JSX.Element {
  return (
    <div className="loader-parent flex justify-center items-center min-h-screen">
      <div className="loader">
        <img src={icon_loader} alt="loading..." />
      </div>
    </div>
  );
}

export function ApiLoading(): JSX.Element {
  return (
    <div className="flex justify-center">
      <img src={api_loading} alt="loading..." />
    </div>
  );
}

export function ButtonLoading({ fill }: { fill?: string }): JSX.Element {
  return (
    <span className="loading-icon inline-block align-middle">
      <svg
        viewBox="0 0 1024 1024"
        focusable="false"
        data-icon="loading"
        width="1em"
        height="1em"
        fill={fill ?? '#1C1A42'}
        aria-hidden="true"
      >
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
      </svg>
    </span>
  );
}
export default Loaders;
