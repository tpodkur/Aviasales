import { configureStore } from '@reduxjs/toolkit';

import { CHEAP } from '../constants/sort-status';

const initialState = {
  sortStatus: CHEAP,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        sortStatus: action.payload.sortStatus,
      };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

// const act = () => ({ type: 'S' });
// store.dispatch(act());

export default store;
