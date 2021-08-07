import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Actions/cartAction";
import Product from "../Product/Product";

const Shop = (props) => {
  const { product, cart, addToCart } = props;
  console.log("cart", cart);
  return (
    <div>
      <h2>This is Shop</h2>
      <div>
        {product.map((pd) => {
          return <Product pd={pd} key={pd.id} addToCart={addToCart}></Product>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    product: state.product,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
