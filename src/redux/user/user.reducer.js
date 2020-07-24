const INITIAL_STATE = { currentUser: null };

// Every reducer gets every action, even if they are not relevant
// That is why we have to have the default return state if not relevant action

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        ...(state.currentUser = action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
