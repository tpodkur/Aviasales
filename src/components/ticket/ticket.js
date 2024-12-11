import React from 'react';
import { getHours, getMinutes, add } from 'date-fns';

import classes from './ticket.module.scss';

const Ticket = ({ id, price, carrier, segments }) => {
  const carrierLogoUrl = `https://images.daisycon.io/airline/?width=110&height=36&color=ffffff&iata=${carrier}`;
  price = price.toString().slice(0, 2) + ' ' + price.toString().slice(2);

  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <div className={classes.card__price}>{price} Р</div>
        <img src={carrierLogoUrl} alt="carrier logo" />
      </div>

      {segments.map((item) => {
        let stopsWord;
        if (item.stops % 10 === 1) {
          stopsWord = 'пересадка';
        } else if (item.stops % 10 === 0 || item.stops % 10 > 4) {
          stopsWord = 'пересадок';
        } else {
          stopsWord = 'пересадки';
        }

        const finishDate = add(item.date, { minutes: item.duration });

        return (
          <div className={classes.card__details} key={id + item.origin}>
            <div className={`${classes.card__column} ${classes.column}`}>
              <div className={classes.column__info}>
                <p className={classes.column__field}>
                  {item.origin} - {item.destination}
                </p>
                <p className={classes.column__value}>
                  {getHours(item.date)}:{getMinutes(item.date)} - {getHours(finishDate)}:{getMinutes(finishDate)}
                </p>
              </div>
            </div>
            <div className={`${classes.card__column} ${classes.column}`}>
              <div className={classes.column__info}>
                <p className={classes.column__field}>в пути</p>
                <p className={classes.column__value}>
                  {Math.trunc(item.duration / 60)}ч {item.duration - Math.trunc(item.duration / 60) * 60}м
                </p>
              </div>
            </div>
            <div className={`${classes.card__column} ${classes.column}`}>
              <div className={classes.column__info}>
                <p className={classes.column__field}>
                  {item.stops.length} {stopsWord}
                </p>
                <p className={`${classes.column__value} ${classes['column__value--uppercase']}`}>
                  {item.stops.length ? `${item.stops[0]}, ${item.stops[1]}` : '-'}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ticket;
