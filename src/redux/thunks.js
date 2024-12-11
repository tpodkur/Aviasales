import { setTickets } from './actions';

export const getTickets = () => (dispatch) => {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((res) => res.json())
    .then((res) => {
      fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${res.searchId}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(
            setTickets(
              res.tickets.splice(0, 5).map((item) => {
                const id = 'id' + Math.random().toString(16).slice(2);
                return {
                  ...item,
                  id,
                };
              })
            )
          );
        })
        .catch(() => dispatch(setTickets([])));
    })
    .catch(console.error);
};
