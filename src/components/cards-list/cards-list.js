import React from 'react';

import Card from '../card/card';

import classes from './cards-list.module.scss';

const CardsList = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.list__item}>
        <Card />
      </li>
      <li className={classes.list__item}>
        <Card />
      </li>
      <li className={classes.list__item}>
        <Card />
      </li>
    </ul>
  );
};

export default CardsList;
