import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

// this exports collections as an object (how it is anyway)
export const selectCollections = memoize(
  createSelector([selectShop], (shop) => shop.collections)
);

// this exports collections as an array
export const selectCollectionsAsArray = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// this is a curried fucntion because it is a functino that returns another function
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
