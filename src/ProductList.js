import Product from "./Product";
import "./ProductList.css";

const ProductList = ({ products, removeItemFromBasket, addItemToBasket }) => {
  return (
    <div className="product_list-wrapper">
      {products.map((item) => (
        <Product
          key={item.id}
          product={item}
          removeItemFromBasket={removeItemFromBasket}
          addItemToBasket={addItemToBasket}
        />
      ))}
    </div>
  );
};

export default ProductList;
