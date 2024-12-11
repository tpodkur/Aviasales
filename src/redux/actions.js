import { SET_SORT_STATUS, TOGGLE_FILTER, SET_TICKETS } from './action-types';

export const setSortStatus = (sortStatus) => ({ type: SET_SORT_STATUS, sortStatus });

export const toggleFilter = (filterName) => ({ type: TOGGLE_FILTER, filterName });

export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets });
