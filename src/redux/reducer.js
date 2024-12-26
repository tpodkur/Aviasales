import { CHEAP } from '../constants/sort-status';
import { ALL, WITHOUT_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from '../constants/filters';

import {
  SET_SORT_STATUS,
  TOGGLE_FILTER,
  SET_TICKETS,
  SET_SEARCH_STATUS,
  SET_SEARCH_ID,
  INCREASE_VISIBLE_TICKETS_COUNT,
  SET_REQUEST_ERROR,
} from './action-types';

const initialTicketsState = {
  entities: {},
  ids: [],
};

const initialState = {
  sortStatus: CHEAP,
  filters: {
    [ALL]: true,
    [WITHOUT_TRANSFERS]: true,
    [ONE_TRANSFER]: true,
    [TWO_TRANSFERS]: true,
    [THREE_TRANSFERS]: true,
  },
  tickets: initialTicketsState,
  stopSearch: false,
  searchId: '',
  visibleTicketsCount: 5,
  loading: true,
  requestError: false,
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
        loading: false,
        tickets: {
          ...state.tickets,
          entities: {
            ...state.tickets.entities,
            ...action.tickets.reduce((acc, ticket) => {
              return {
                ...acc,
                [ticket.id]: ticket,
              };
            }, {}),
          },
          ids: [...state.tickets.ids, ...action.tickets.map((ticket) => ticket.id)],
        },
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
    case INCREASE_VISIBLE_TICKETS_COUNT:
      return {
        ...state,
        visibleTicketsCount: state.visibleTicketsCount + 5,
      };
    case SET_REQUEST_ERROR:
      if (state.tickets.ids.length) {
        return {
          ...state,
          requestError: false,
        };
      }
      return {
        ...state,
        requestError: true,
      };
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
