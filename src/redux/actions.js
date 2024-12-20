import {
  SET_SORT_STATUS,
  TOGGLE_FILTER,
  SET_TICKETS,
  SET_SEARCH_STATUS,
  SET_SEARCH_ID,
  INCREASE_VISIBLE_TICKETS_COUNT,
} from './action-types';

export const setSortStatus = (sortStatus) => ({ type: SET_SORT_STATUS, sortStatus });

export const toggleFilter = (filterName) => ({ type: TOGGLE_FILTER, filterName });

export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets });

export const setSearchStatus = (status) => ({ type: SET_SEARCH_STATUS, status });

export const setSearchId = (id) => ({ type: SET_SEARCH_ID, id });

export const increaseVisibleTicketsCount = () => ({ type: INCREASE_VISIBLE_TICKETS_COUNT });
