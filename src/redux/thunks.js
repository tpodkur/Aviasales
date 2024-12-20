import { setSearchStatus, setTickets, setSearchId } from './actions';

export const getTickets =
  (searchId = '') =>
  (dispatch) => {
    if (!searchId) {
      fetch('https://aviasales-test-api.kata.academy/search')
        .then((res) => res.json())
        .then((res) => {
          dispatch(setSearchId(res.searchId));
          queryTickets(res.searchId, dispatch);
        })
        .catch(console.error);
    } else {
      queryTickets(searchId, dispatch);
    }
  };

const queryTickets = (searchId, dispatch) => {
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(
        setTickets(
          res.tickets.map((item) => {
            const id = 'id' + Math.random().toString(16).slice(2);
            return {
              ...item,
              id,
            };
          })
        )
      );

      if (!res.stop) {
        queryTickets(searchId, dispatch);
      }

      dispatch(setSearchStatus(res.stop));
    })
    .catch(() => dispatch(setTickets([])));
};
