import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const addProduct = (product) => {
    if (!products.some((p) => p.name === product.name)) {
      setProducts([...products, product]);
    } else {
      alert('Duplicate product!');
    }
  };

  const deleteProduct = (name) => {
    setProducts(products.filter((p) => p.name !== name));
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Add Product Form */}
      <div className="mb-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.productName.value.trim();
            const price = e.target.productPrice.value.trim();
            if (name && price) {
              addProduct({ name, price });
              e.target.reset();
            }
          }}
          className="flex items-center gap-2"
        >
          <input
            name="productName"
            type="text"
            placeholder="Product Name"
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="productPrice"
            type="text"
            placeholder="Product Price"
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>

      {/* Product List Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.name}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  ${product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => deleteProduct(product.name)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredProducts.length === 0 && (
          <p className="p-4 text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
