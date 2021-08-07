import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/Actions/cartAction";

const Cart = (props) => {
  const { cart, removeFromCart, product } = props;
  console.log("cart from cart", cart);
  return (
    <div>
      <h4>This is cart</h4>
      <ul>
        {cart.map((cart) => {
          return (
            <li>
              {cart.name}
              <button onClick={() => removeFromCart(cart)}>x</button>
            </li>
          );
        })}
      </ul>
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
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
