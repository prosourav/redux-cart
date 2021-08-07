export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (prd) => {
  return {
    type: ADD_TO_CART,
    payload: prd,
  };
};

export const removeFromCart = (prd) => {
  return {
    type: REMOVE_FROM_CART,
    payload: prd,
  };
};
