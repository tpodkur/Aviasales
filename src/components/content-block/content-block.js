import React from 'react';

import Sort from '../sort/sort';
import TicketsList from '../tickets-list/tickets-list';

import classes from './content-block.module.scss';

const ContentBlock = () => {
  return (
    <div className={classes.content}>
      <Sort />
      <TicketsList />
    </div>
  );
};

export default ContentBlock;
