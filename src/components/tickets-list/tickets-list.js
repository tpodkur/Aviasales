import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Ticket from '../ticket/ticket';
import { getTickets } from '../../redux/thunks';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <ul className={classes.list}>
      <li className={classes.list__item}>
        <Ticket />
      </li>
      <li className={classes.list__item}>
        <Ticket />
      </li>
      <li className={classes.list__item}>
        <Ticket />
      </li>
    </ul>
  );
};

export default TicketsList;
