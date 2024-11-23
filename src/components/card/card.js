import React from 'react';

import classes from './card.module.scss';

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <div className={classes.card__price}>13400 Р</div>
        <div className={classes.card__company}></div>
      </div>
      <div className={classes.card__details}>
        <div className={`${classes.card__column} ${classes.column}`}>
          <div className={classes.column__info}>
            <p className={classes.column__field}>mow - hkt</p>
            <p className={classes.column__value}>10:45 - 08.00</p>
          </div>
          <div className={classes.column__info}>
            <p className={classes.column__field}>mow - hkt</p>
            <p className={classes.column__value}>11:20 - 00.50</p>
          </div>
        </div>
        <div className={`${classes.card__column} ${classes.column}`}>
          <div className={classes.column__info}>
            <p className={classes.column__field}>в пути</p>
            <p className={classes.column__value}>21ч 15м</p>
          </div>
          <div className={classes.column__info}>
            <p className={classes.column__field}>в пути</p>
            <p className={classes.column__value}>13ч 30м</p>
          </div>
        </div>
        <div className={`${classes.card__column} ${classes.column}`}>
          <div className={classes.column__info}>
            <p className={classes.column__field}>2 пересадки</p>
            <p className={classes.column__value}>hkg, jnb</p>
          </div>
          <div className={classes.column__info}>
            <p className={classes.column__field}>1 пересадка</p>
            <p className={classes.column__value}>hkg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
