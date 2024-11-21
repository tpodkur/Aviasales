import React from 'react';

import Filter from '../filter/filter';
import ContentBlock from '../content-block/content-block';

import classes from './main.module.scss';

const Main = () => {
  return (
    <div className={classes.main}>
      <Filter />
      <ContentBlock />
    </div>
  );
};

export default Main;
