import {
  USER_SIGNIN,
  USER_SIGNOUT,
  PRODUCT_ADD_TO_CART,
  PRODUCT_REMOVE_FROM_CART,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  CLEAR_CART,
} from "../actions";

const storeReducer = (state, action) => {
  switch (action.type) {
    case USER_SIGNIN: {
      return { ...state, userInfo: action.payload };
    }
    case USER_SIGNOUT: {
      return {
        ...state,
        userInfo: null,
        cart: { cartItems: [], shippingAddress: {}, paymentMethod: "" },
      };
    }
    case PRODUCT_ADD_TO_CART: {
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existingItem
        ? state.cart.cartItems.map((item) =>
          item._id === existingItem._id ? newItem : item
        )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case PRODUCT_REMOVE_FROM_CART: {
      const cartItems = state.cart.cartItems.filter(
        (product) => product._id !== action.payload._id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case SAVE_SHIPPING_ADDRESS: {
      const shippingAddress = action.payload;
      localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
      return {
        ...state,
        cart: { ...state.cart, shippingAddress: shippingAddress },
      };
    }
    case SAVE_PAYMENT_METHOD: {
      return { ...state, cart: { ...state.cart, paymentMethod: action.payload } };
    }
    case CLEAR_CART: {
      return { ...state, cart: { ...state.cart, cartItems: [] }};
    }
    default:
      return { ...state };
  }
};
export default storeReducer;
