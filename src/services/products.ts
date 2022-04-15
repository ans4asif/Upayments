import { useEffect, useState } from 'react';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const productService = {
  _url: 'https://62286b649fd6174ca82321f1.mockapi.io/case-study',

  //HOOKS
  GetProducts() {
    const [products, setProducts] = useState<any>([]);
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      this.getProducts()
        .then((data) => {
          setProducts(data);
          setStatus(STATUS.SUCCESS);
        })
        .catch((error) => {
          setStatus(STATUS.ERROR);
        });
    }, []);
    return {
      products,
      products_loading: status === STATUS.LOADING,
      products_error: status === STATUS.ERROR ? status : '',
    };
  },
  GetCategories() {
    const [categories, setCategories] = useState<any>([]);
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      this.getCategories()
        .then((data) => {
          setCategories(data);
          setStatus(STATUS.SUCCESS);
        })
        .catch((error) => {
          setStatus(STATUS.ERROR);
        });
    }, []);
    return {
      categories,
      categories_loading: status === STATUS.LOADING,
      categories_error: status === STATUS.ERROR ? status : '',
    };
  },
  async getProducts() {
    let res = await fetch(`${productService._url}/products/`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },
  async getCategories() {
    let res = await fetch(`${productService._url}/categories/`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },
};
export default productService;
