import React from 'react';

import classes from './sort.module.scss';

const Sort = () => {
  return (
    <div className={classes.sort}>
      <input type="radio" id="cheepest" className={classes.sort__option} checked />
      <label htmlFor="cheepest">самый дешевый</label>
      <input type="radio" id="fastest" className={classes.sort__option} />
      <label htmlFor="fastest">самый быстрый</label>
      <input type="radio" id="optimal" className={classes.sort__option} />
      <label htmlFor="optimal">оптимальный</label>
    </div>
  );
};

export default Sort;
