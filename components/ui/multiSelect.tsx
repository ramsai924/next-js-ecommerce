import React from 'react';
import Select from 'react-select';

const MultiSelect = ({ options, onChange, value, name, placeholder }: any) => {
  return (
    <Select
      isMulti
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      value={value}
      name={name}
      styles={{
        control: (provided) => ({
          ...provided,
          borderRadius: '8px',
          borderColor: '#ebe8e8',
          fontFamily: 'inherit'
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: '#e4e4e4',
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          color: '#333',
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          color: '#999',
          ':hover': {
            backgroundColor: '#ccc',
            color: '#333',
          },
        }),
      }}
    />
  );
};

export default MultiSelect;
