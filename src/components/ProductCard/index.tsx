import React from 'react';

interface Props {
  src?: string | undefined;
  name: string;
  price: string;
}
const ProductCard: React.FC<Props> = ({ src, name, price }) => {
  console.log('first');

  return (
    <div className="bg-blue-100 max-w-card w-[calc(50%-8px)] hover:shadow-md cursor-pointer transition-all">
      <div className="container mx-auto my-2">
        <div className="w-full bg-white">
          <img
            src={src}
            alt="product"
            className="object-cover w-full h-auto rounded-sm"
          />
        </div>
        <div className="flex justify-between align-middle py-2">
          <div className=" text-gray-700 text-sm ml-1">
            <span className="font-bold">{name}</span>
          </div>
          <div className="text-gray-700 text-sm mr-1 flex flex-col">
            <span className="font-bold">Price</span>
            <strong>{price}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
