import { setTickets } from './actions';

export const getTickets = () => (dispatch) => {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((res) => res.json())
    .then((res) => {
      fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res.searchId}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          dispatch(setTickets([]));
        })
        .catch(() => dispatch(setTickets([])));
    })
    .catch(console.error);
};
