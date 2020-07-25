import { CartActionTypes } from './cart.types';

const INITIAL_STATE = { hidden: true };

// Every reducer gets every action, even if they are not relevant
// That is why we have to have the default return state if not relevant action

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
