import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Field from '../components/Field';
import { ButtonLoading } from '../components/Loaders';
import SelectBox from '../components/Select';
import { UnknownObject } from '../helpers/commonInterface';
import productService from '../services/products';

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const [errors, setErros] = useState({
    name: '',
    price: '',
    category: '',
    avatar: '',
    description: '',
  });
  const [state, setState] = useState({
    name: '',
    price: 0,
    category: '',
    description: '',
    avatar: '',
    developerEmail: 'test+1@gmail.com',
  });
  const { categories } = productService.GetCategories();

  const { myCategories } = useMemo(
    () => ({
      myCategories: categories.map((category: any) => {
        return {
          value: category.id,
          label: category.name,
        };
      }),
    }),
    [categories]
  );

  const validateFields = (): boolean => {
    let isValid = true;
    const errors: UnknownObject = {};
    if (!state.name) {
      errors.name = 'Product name is required';
      isValid = false;
    }
    if (!state.price) {
      errors.price = 'Price is required';
      isValid = false;
    }
    if (!state.category) {
      errors.category = 'Category is required';
      isValid = false;
    }
    if (!state.description) {
      errors.description = 'Description is required';
      isValid = false;
    }
    if (!state.avatar) {
      errors.avatar = 'Image url is required';
      isValid = false;
    }
    setErros({ ...errors });
    return isValid;
  };
  const handleSubmit = async (e: UnknownObject) => {
    e.preventDefault();
    setLoading(true);
    if (validateFields()) {
      try {
        const res = await productService.createProduct(state);
        setLoading(false);
        Navigate('/products');
      } catch (error) {
        setLoading(false);
        Navigate('/products');
      }
    } else {
      setLoading(false);
    }
  };
  const onChange = (e: UnknownObject) => {
    setState({ ...state, [e?.target?.name]: e?.target?.value });
  };
  return (
    <div className="flex justify-center">
      <div className="container-lg:w-96 md:w-96 xs:w-96  flex justify-center align-middle flex-col mt-4">
        <div className="text-center mt-4 py-4">
          <h1 className="font-bold text-2xl">Create Product</h1>
        </div>
        <div className="grid grid-cols-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Field
                name="name"
                type="text"
                placeholder="Product name"
                error={errors.name}
                onChange={onChange}
              />
            </div>

            <div className="mb-3">
              <Field
                type="text"
                className="h-40"
                placeholder="Enter description"
                onChange={onChange}
                name="description"
                error={errors.description}
              />
            </div>
            <div className="mb-3">
              <Field
                type="text"
                placeholder="Enter image url"
                onChange={onChange}
                name="avatar"
                error={errors.avatar}
              />
            </div>
            <div className="mb-3">
              <SelectBox
                options={myCategories}
                placeholder="Select category"
                handleInputChange={({ label }: UnknownObject) => {
                  setState({ ...state, category: label });
                }}
                error={errors.category}
              />
            </div>
            <div className="mb-3">
              <Field
                type="number"
                placeholder="Enter price"
                name="price"
                onChange={onChange}
                error={errors.price}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className=" w-full rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300"
            >
              {loading ? <ButtonLoading /> : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
