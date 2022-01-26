import "./Product.css";

const Product = (props) => {
  const { removeItemFromBasket, addItemToBasket } = props;
  const { id, name, price, highlight, image, inStock } = props.product;
  return (
    <div className="product" key={id}>
      <div className="product_details-media">
        <img src={image} alt={name} />
        <div className="product_details">
          <span className="product_name">{name}</span>
          <div className="product_details-price_wrapper">
            <span>from</span>
            <span>
              <span className="product_details-price">£{price}</span> a month
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          highlight
            ? "product_details-extra_info"
            : "product_details-extra_info-end"
        }
      >
        {highlight && (
          <div className="product_highlight-wrapper">
            <span className="product_highlight">{highlight}</span>
          </div>
        )}
        {inStock ? (
          removeItemFromBasket ? (
            <button className="product_details-add-to-basket"
            onClick={()=> {props.removeItemFromBasket(id)}}>
              Remove from basket
            </button>
          ) : (
            <button className="product_details-add-to-basket"
            onClick={()=> {props.addItemToBasket(id)}}>
              Add to basket
            </button>
          )
        ) : (
          <button className="product_details-add-to-basket-disabled">
            Out of stock
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
