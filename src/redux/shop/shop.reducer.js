import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
};

// why do we need a reducer if we don't modify state? because it is easier for testing
// and makes it re-usable, even though we aren't re-using it it outside of directory
// right now

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
