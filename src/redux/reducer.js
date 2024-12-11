import { CHEAP } from '../constants/sort-status';
import { ALL, WITHOUT_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from '../constants/filters';

const initialState = {
  sortStatus: CHEAP,
  filters: {
    [ALL]: false,
    [WITHOUT_TRANSFERS]: false,
    [ONE_TRANSFER]: false,
    [TWO_TRANSFERS]: false,
    [THREE_TRANSFERS]: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_STATUS':
      return {
        ...state,
        sortStatus: action.sortStatus,
      };
    case 'TOGGLE_FILTER': {
      let res = {};
      if (action.filterName === ALL) {
        for (let prop in state.filters) {
          res[prop] = !state.filters[ALL];
        }
      } else {
        res = {
          ...state.filters,
          [ALL]: whetherToggleAllFilter(state.filters, action.filterName) ? !state.filters[ALL] : state.filters[ALL],
          [action.filterName]: !state.filters[action.filterName],
        };
      }

      return {
        ...state,
        filters: res,
      };
    }
    default:
      return state;
  }
};

const whetherToggleAllFilter = (prevFilters, toggledFilterName) => {
  let allButOneChecked = true;
  for (let prop in prevFilters) {
    if (prop === ALL) continue;
    if (prop === toggledFilterName) continue;
    allButOneChecked &&= prevFilters[prop];
  }

  return prevFilters[ALL] === prevFilters[toggledFilterName] && allButOneChecked;
};

export default reducer;
