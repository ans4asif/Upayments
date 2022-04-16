import React, { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import productService from '../services/products';
import SearchBox from '../components/SearchBox';
import SelectBox from '../components/Select';
import ProductBtn from '../components/AddProductBtn';
import { useNavigate } from 'react-router-dom';
import { ApiLoading } from '../components/Loaders';
import { UnknownObject } from '../helpers/commonInterface';
// import { categories } from '../data';
const Products = () => {
  const Navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const { products, products_loading } = productService.GetProducts();
  const { categories } = productService.GetCategories();
  const { myCategories } = useMemo(() => {
    const myCategories = categories.map((category: any) => {
      return {
        value: category.id,
        label: category.name,
      };
    });
    myCategories.unshift({
      value: '',
      label: 'All',
    });
    return { myCategories };
  }, [categories]);
  const { myProducts } = useMemo(
    () => ({
      myProducts:
        category !== 'All' && category !== ''
          ? products.filter((product: any) => product?.category === category)
          : searchText
          ? products.filter((product: any) =>
              product?.name?.toLowerCase()?.includes(searchText.toLowerCase())
            )
          : category && searchText
          ? products.filter(
              (product: any) =>
                product?.category === category &&
                product?.name?.toLowerCase()?.includes(searchText.toLowerCase())
            )
          : products,
    }),
    [products, category, searchText]
  );

  return (
    <>
      <div className="relative">
        <div className=" my-4 flex justify-between">
          <div className="w-80">
            <SearchBox
              onChange={({ value }: UnknownObject) => {
                setSearchText(value);
                setCategory('');
              }}
            />
          </div>
          <div className="ml-4 w-80 ">
            <SelectBox
              options={myCategories}
              placeholder="Select Category"
              handleInputChange={(e: UnknownObject) => {
                setCategory(e?.label);
              }}
            />
          </div>
        </div>
        {products_loading ? (
          <ApiLoading />
        ) : myProducts.length ? (
          <>
            <div className="grid grid-cols-4 m-3 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
              {myProducts.length &&
                myProducts.map((prod: any) => (
                  <ProductCard
                    src={prod?.avatar}
                    name={prod?.name}
                    price={prod?.price}
                    onClick={() => {
                      Navigate(`/products/${prod?.id}`);
                    }}
                  />
                ))}
            </div>
          </>
        ) : (
          <div className="text-center font-bold text-2xl absolute top-52 left-52">
            'No Products Found'
          </div>
        )}
        <div className="fixed bottom-1 right-1">
          <ProductBtn
            onClick={() => {
              Navigate('/create-product');
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
