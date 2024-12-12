import { setSearchStatus, setTickets, setSearchId } from './actions';

export const getSearchId = () => (dispatch) => {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((res) => res.json())
    .then((res) => {
      dispatch(setSearchId(res.searchId));
      dispatch(getTickets(res.searchId));
    })
    .catch(console.error);
};

export const getTickets = (searchId) => (dispatch) => {
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
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
      dispatch(setSearchStatus(res.stop));
    })
    .catch(() => dispatch(setTickets([])));
};
