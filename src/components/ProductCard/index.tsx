import React from 'react';

interface Props {
  src?: string | undefined;
  name: string;
  price: string;
  onClick: () => void;
}
const ProductCard: React.FC<Props> = ({
  src,
  name,
  price,
  onClick = () => {},
}) => {
  return (
    <div
      className="bg-white  rounded-lg hover:shadow-md cursor-pointer transition-all"
      onClick={onClick}
    >
      <div className="w-full h-80 bg-white overflow-hidden ">
        <img
          src={src}
          alt="product"
          className="w-full block h-auto rounded-sm "
        />
      </div>
      <div className="flex justify-between align-middle py-4 bg-rose-white ">
        <div className=" text-gray1 text-sm ml-2">
          <span className="font-bold">{name}</span>
        </div>
        <div className="text-golden text-md font-bold mr-2">
          <small className="font-bold inline-block mr-2 line-through">
            {(parseFloat(price) * 1.5).toFixed(2)}
          </small>
          ${parseFloat(price).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
