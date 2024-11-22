import React from 'react';

import classes from './sort.module.scss';

const Sort = () => {
  return (
    <div className={classes.sort}>
      <label className={`${classes.sort__option} ${classes.radio}`}>
        <input type="radio" className={classes.radio__input} checked />
        самый дешевый
      </label>
      <label className={`${classes.sort__option} ${classes.radio}`}>
        <input type="radio" className={classes.radio__input} />
        самый быстрый
      </label>
      <label className={`${classes.sort__option} ${classes.radio}`}>
        <input type="radio" className={classes.radio__input} />
        оптимальный
      </label>
    </div>
  );
};

export default Sort;
