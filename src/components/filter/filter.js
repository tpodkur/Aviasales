import React from 'react';

import classes from './filter.module.scss';

const Filter = () => {
  const arr = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  const filterOptions = arr.map((item) => (
    <label className={classes.option} key={Math.random().toString(16).slice(2)}>
      <input type="checkbox" className={classes.option__input} />
      <span className={classes.option__check}></span>
      <span className={classes.option__label}>{item}</span>
    </label>
  ));

  return (
    <div className={classes.filter}>
      <p className={classes.filter__name}>количество пересадок</p>
      {filterOptions}
    </div>
  );
};

export default Filter;
