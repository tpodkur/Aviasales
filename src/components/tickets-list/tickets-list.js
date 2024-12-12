import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Ticket from '../ticket/ticket';
import { getTickets } from '../../redux/thunks';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
  const dispatch = useDispatch();
  const ticketsEntities = useSelector((state) => state.tickets.entities);
  const ids = useSelector((state) => state.tickets.ids);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <ul className={classes.list}>
      {ids
        .map((id) => ticketsEntities[id])
        .sort((a, b) => a.price - b.price)
        .map((ticket) => (
          <li className={classes.list__item} key={ticket.id}>
            <Ticket price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
          </li>
        ))}
    </ul>
  );
};

export default TicketsList;
