import React, { useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import productService from '../services/products';
import productz from '../data.json';
import SearchBox from '../components/SearchBox';
import SelectBox from '../components/Select';
import { categories } from '../data';
const products = () => {
  // const { products, products_loading } = productService.GetProducts();
  // const { categories, categories_loading } = productService.GetCategories();

  // const {myCategories} =useMemo(() => {
  //   const myCategories = categories.map((category) => {
  //     return {
  //       value: category.id,
  //       label: category.name,
  //     };
  //   });
  //   return {myCategories};
  // },[categories]))
  console.log({ products });
  return (
    <>
      <div className="my-4">
        <div className="flex justify-between">
          <div className="w-lg">
            <SearchBox />
          </div>
          <div className="ml-4 w-lg">
            <SelectBox options={categories} />
          </div>
        </div>
      </div>

      <div className="flex justify-between m-3 flex-wrap ">
        {productz.length &&
          productz.map((prod: any) => (
            <ProductCard
              src={prod?.avatar}
              name={prod?.name}
              price={prod?.price}
            />
          ))}
      </div>
    </>
  );
};

export default products;
