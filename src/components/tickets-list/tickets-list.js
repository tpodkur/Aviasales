import React from 'react';

import Ticket from '../ticket/ticket';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
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
