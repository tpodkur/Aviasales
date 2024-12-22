import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { CHEAP, FAST } from '../../constants/sort-status';
import { ALL, WITHOUT_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from '../../constants/filters';
import { getTickets } from '../../redux/thunks';
import { increaseVisibleTicketsCount } from '../../redux/actions';
import Ticket from '../ticket/ticket';
import Spinner from '../spinner/spinner';

import classes from './tickets-list.module.scss';

const selectSortedTickets = createSelector(
  (state) => state.tickets.ids,
  (state) => state.tickets.entities,
  (state) => state.sortStatus,
  (state) => state.filters,
  (state) => state.visibleTicketsCount,
  (ids, entities, sortStatus, filters, ticketsCount) => {
    const sortedTickets = ids
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

    if (filters[ALL]) {
      return sortedTickets.slice(0, ticketsCount);
    }

    return sortedTickets
      .filter((ticket) => {
        const transfersMap = {
          [WITHOUT_TRANSFERS]: 0,
          [ONE_TRANSFER]: 1,
          [TWO_TRANSFERS]: 2,
          [THREE_TRANSFERS]: 3,
        };
        const validValues = [];
        for (let prop in filters) {
          if (filters[prop]) {
            validValues.push(transfersMap[prop]);
          }
        }

        return (
          validValues.includes(ticket.segments[0].stops.length) && validValues.includes(ticket.segments[1].stops.length)
        );
      })
      .slice(0, ticketsCount);
  }
);

const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(selectSortedTickets);
  const loading = useSelector((state) => state.loading);

  const onClick = () => {
    dispatch(increaseVisibleTicketsCount());
  };

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  const spinner = (
    <div className={classes.list__spinner}>
      <Spinner size="large" />
    </div>
  );

  const content = tickets.length ? (
    <>
      <ul className={classes.list}>
        {tickets.map((ticket) => (
          <li className={classes.list__item} key={ticket.id}>
            <Ticket price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
          </li>
        ))}
      </ul>
      <button className={`${classes['show-tickets']} ${classes['list__show-tickets']}`} onClick={onClick}>
        показать еще 5 билетов!
      </button>
    </>
  ) : (
    <p className={classes.list__message}>Рейсов, подходящих под заданные фильтры, не найдено</p>
  );

  return <div className={classes['list-container']}>{loading ? spinner : content}</div>;
};

export default TicketsList;
