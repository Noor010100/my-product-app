const ProductList = ({ products }) => (
    <div>
      {products.length ? (
        <ul>
          {products.map((product, index) => (
            <li key={index} className="my-2">
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
  
  export default ProductList;
  