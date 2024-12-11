import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Ticket from '../ticket/ticket';
import { getTickets } from '../../redux/thunks';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <ul className={classes.list}>
      {tickets.map((ticket) => (
        <li className={classes.list__item} key={ticket.id}>
          <Ticket price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
