import React from 'react';

import Card from '../card/card';

import classes from './cards-list.module.scss';

const CardsList = () => {
  return (
    <ul className={classes['cards-list']}>
      <li>
        <Card />
      </li>
    </ul>
  );
};

export default CardsList;
