import React from 'react';

import Sort from '../sort/sort';
import CardsList from '../cards-list/cards-list';

import classes from './content-block.module.scss';

const ContentBlock = () => {
  return (
    <div className={classes.content}>
      <Sort />
      <CardsList />
      <button className={classes['show-tickets']}>показать еще 5 билетов!</button>
    </div>
  );
};

export default ContentBlock;
