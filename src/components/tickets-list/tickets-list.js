import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { CHEAP, FAST } from '../../constants/sort-status';
import { getTickets } from '../../redux/thunks';
import Ticket from '../ticket/ticket';

import classes from './tickets-list.module.scss';

const selectSortedTickets = createSelector(
  (state) => state.tickets.ids,
  (state) => state.tickets.entities,
  (state) => state.sortStatus,
  (ids, entities, sortStatus) => {
    return ids
      .map((id) => entities[id])
      .sort((a, b) => {
        if (sortStatus === CHEAP) {
          return a.price - b.price;
        }

        const aDuration = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
        const bDuration = b.segments.reduce((acc, segment) => acc + segment.duration, 0);

        if (sortStatus === FAST) {
          return aDuration - bDuration;
        }
        return aDuration + a.price - (bDuration + b.price);
      });
  }
);

const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(selectSortedTickets);

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
