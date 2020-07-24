// would actually be better to have const sfile of SET_CURRENT_USER

export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
