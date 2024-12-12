import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTickets } from '../../redux/thunks';
import Sort from '../sort/sort';
import TicketsList from '../tickets-list/tickets-list';

import classes from './content-block.module.scss';

const ContentBlock = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId);

  const onClick = () => {
    dispatch(getTickets(searchId));
  };

  return (
    <div className={classes.content}>
      <Sort />
      <TicketsList />
      <button className={classes['show-tickets']} onClick={onClick}>
        показать еще 5 билетов!
      </button>
    </div>
  );
};

export default ContentBlock;
