import React from 'react';
import Select from 'react-select';
import { UnknownObject } from '../../helpers/commonInterface';
const SelectBox = ({ options }: UnknownObject): JSX.Element => {
  console.log('select');
  return <Select options={options} />;
};

export default SelectBox;
