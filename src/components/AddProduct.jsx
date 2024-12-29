import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (name && price) {
      addProduct({ name, price });
      setName('');
      setPrice('');
    } else {
      alert('Enter valid product details!');
    }
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Product Name"
        className="block mb-2 p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        className="block mb-2 p-2 border rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleAdd}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
