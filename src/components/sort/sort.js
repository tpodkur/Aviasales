import React from 'react';

import store from '../store';
import { CHEAP, FAST, OPT } from '../../constants/sort-status';

import classes from './sort.module.scss';

const Sort = () => {
  const [sortStatus, setSortStatus] = React.useState(CHEAP);

  const onChange = (e) => {
    store.dispatch({ type: 'SET_STATUS', payload: { sortStatus: e.target.id } });
  };

  store.subscribe(() => {
    setSortStatus(store.getState().sortStatus);
  });

  return (
    <div className={classes.sort}>
      <label className={`${classes.sort__option} ${classes.radio}`}>
        <input
          type="radio"
          id={CHEAP}
          className={classes.radio__input}
          checked={sortStatus === CHEAP}
          onChange={onChange}
        />
        самый дешевый
      </label>
      <label className={`${classes.sort__option} ${classes.radio}`}>
        <input
          type="radio"
          id={FAST}
          className={classes.radio__input}
          checked={sortStatus === FAST}
          onChange={onChange}
        />
        самый быстрый
      </label>
      <label className={`${classes.sort__option} ${classes.radio}`}>
        <input
          type="radio"
          id={OPT}
          className={classes.radio__input}
          checked={sortStatus === OPT}
          onChange={onChange}
        />
        оптимальный
      </label>
    </div>
  );
};

export default Sort;
