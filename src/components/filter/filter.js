import React from 'react';
import { connect } from 'react-redux';

import { ALL, WITHOUT_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from '../../constants/filters';
import { toggleFilter } from '../../actions/actions';

import classes from './filter.module.scss';

const Filter = ({ filters, toggleFilter }) => {
  const onChange = (e) => {
    toggleFilter(e.target.id);
  };

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

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps, { toggleFilter })(Filter);
