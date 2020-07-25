import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { addItem } from './cart.actions';

const INITIAL_STATE = { hidden: true, cartItems: [] };

// Every reducer gets every action, even if they are not relevant
// That is why we have to have the default return state if not relevant action

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // The line below originally read: cartItems: [...state.cartItems, action.payload],

        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
