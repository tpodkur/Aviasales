import { CHEAP } from '../constants/sort-status';
import { ALL, WITHOUT_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from '../constants/filters';

import { SET_SORT_STATUS, TOGGLE_FILTER, SET_TICKETS, SET_SEARCH_STATUS, SET_SEARCH_ID } from './action-types';

const initialState = {
  sortStatus: CHEAP,
  filters: {
    [ALL]: false,
    [WITHOUT_TRANSFERS]: false,
    [ONE_TRANSFER]: false,
    [TWO_TRANSFERS]: false,
    [THREE_TRANSFERS]: false,
  },
  tickets: [],
  stopSearch: false,
  searchId: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_STATUS:
      return {
        ...state,
        sortStatus: action.sortStatus,
      };
    case TOGGLE_FILTER: {
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
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };
    case SET_SEARCH_STATUS:
      return {
        ...state,
        stopSearch: action.status,
      };
    case SET_SEARCH_ID:
      if (!state.searchId) {
        return {
          ...state,
          searchId: action.id,
        };
      }
      return state;
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
