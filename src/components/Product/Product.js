import React from "react";

const Product = (props) => {
  const { pd, addToCart } = props;

  console.log(props);
  return (
    <div
      style={{
        border: "2px solid red",
        marginTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <h2>{pd.name}</h2>
      <button onClick={() => addToCart(pd)}>Add to cart</button>
    </div>
  );
};

export default Product;
