import React from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/products';

const ProductDetail = () => {
  const { child } = useParams();

  const { product } = productService.GetProductDetails(child);
  const { name, price, description, avatar } = product;
  return (
    <div className="container mt-8">
      <div className="flex gap-8">
        <div className="w-52 rounded-md bg-white overflow-hidden ">
          <img
            src={avatar}
            alt="product"
            className="w-full block h-auto rounded-sm "
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl ">{name}</h1>
          </div>
          <span className="block font-bold text-xl">${price}</span>
        </div>
      </div>
      <div className="mt-4 mx-8 ">
        <hr className="border-black border-1 border-rounded" />
      </div>
      <div className="">
        <div className="mt-3">
          <h1 className="font-bold text-2xl">Description</h1>
        </div>
        <div className="mt-4">
          <p>
            {description}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo
              similique fugit nemo. Sapiente veniam, ullam deserunt ratione
              saepe blanditiis dicta commodi quaerat ab exercitationem quos
              optio facilis? Voluptas, eos? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At quo similique fugit nemo.
              Sapiente veniam, ullam deserunt ratione saepe blanditiis dicta
              commodi quaerat ab exercitationem quos optio facilis? Voluptas,
              eos?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
