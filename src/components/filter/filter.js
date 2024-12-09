import React from 'react';

import store from '../../store';
import { ALL, WITHOUT_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from '../../constants/filters';
import { toggleFilter } from '../../actions/actions';

import classes from './filter.module.scss';

const Filter = () => {
  const [filters, setFilters] = React.useState(store.getState().filters);

  const onChange = (e) => {
    store.dispatch(toggleFilter(e.target.id));
  };

  store.subscribe(() => {
    setFilters(store.getState().filters);
  });

  return (
    <div className={classes.filter}>
      <p className={classes.filter__name}>количество пересадок</p>
      <label className={classes.option}>
        <input type="checkbox" id={ALL} className={classes.option__input} checked={filters[ALL]} onChange={onChange} />
        <span className={classes.option__check}></span>
        <span className={classes.option__label}>все</span>
      </label>
      <label className={classes.option}>
        <input
          type="checkbox"
          id={WITHOUT_TRANSFERS}
          className={classes.option__input}
          checked={filters[WITHOUT_TRANSFERS]}
          onChange={onChange}
        />
        <span className={classes.option__check}></span>
        <span className={classes.option__label}>без пересадок</span>
      </label>
      <label className={classes.option}>
        <input
          type="checkbox"
          id={ONE_TRANSFER}
          className={classes.option__input}
          checked={filters[ONE_TRANSFER]}
          onChange={onChange}
        />
        <span className={classes.option__check}></span>
        <span className={classes.option__label}>1 пересадка</span>
      </label>
      <label className={classes.option}>
        <input
          type="checkbox"
          id={TWO_TRANSFERS}
          className={classes.option__input}
          checked={filters[TWO_TRANSFERS]}
          onChange={onChange}
        />
        <span className={classes.option__check}></span>
        <span className={classes.option__label}>2 пересадки</span>
      </label>
      <label className={classes.option}>
        <input
          type="checkbox"
          id={THREE_TRANSFERS}
          className={classes.option__input}
          checked={filters[THREE_TRANSFERS]}
          onChange={onChange}
        />
        <span className={classes.option__check}></span>
        <span className={classes.option__label}>3 пересадки</span>
      </label>
    </div>
  );
};

export default Filter;
