import React from 'react';
import { connect } from 'react-redux';

import { CHEAP, FAST, OPT } from '../../constants/sort-status';
import { setSortStatus } from '../../actions/actions';

import classes from './sort.module.scss';

const Sort = ({ sortStatus, setSortStatus }) => {
  const onChange = (e) => {
    setSortStatus(e.target.id);
  };

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

const mapStateToProps = (state) => ({
  sortStatus: state.sortStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setSortStatus: (sortStatus) => dispatch(setSortStatus(sortStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
