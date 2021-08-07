const initialState = {
  cart: [],
  product: [
    { name: "lenovo", id: 1 },
    { name: "Apple", id: 2 },
    { name: "Toshiba", id: 3 },
    { name: "Dell", id: 4 },
    { name: "Accer", id: 5 },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const cartItem = { ...newItem, cartId: state.cart.length + 1 };
      const newCart = [...state.cart, cartItem];

      return {
        ...state,
        cart: newCart,
      };
    case "REMOVE_FROM_CART":
      const remainingCart = state.cart.filter(
        (item) => item.cartId !== action.payload.cartId
      );
      return {
        ...state,
        cart: remainingCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
