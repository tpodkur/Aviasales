import React from 'react';
import { getHours, getMinutes, add } from 'date-fns';

import classes from './ticket.module.scss';

const Ticket = ({ id, price, carrier, segments }) => {
  const carrierLogoUrl = `https://images.daisycon.io/airline/?width=110&height=36&color=ffffff&iata=${carrier}`;
  const thousands = Math.trunc(price / 1000).toString();
  const hundreds = price % 1000 < 100 ? '0' + (price % 1000) : price % 1000;
  price = thousands + ' ' + hundreds;

  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <div className={classes.card__price}>{price} Р</div>
        <img src={carrierLogoUrl} alt="carrier logo" />
      </div>

      {segments.map((item) => {
        let stopsWord;
        if (item.stops.length % 10 === 1) {
          stopsWord = 'пересадка';
        } else if (item.stops.length % 10 === 0 || item.stops % 10 > 4) {
          stopsWord = 'пересадок';
        } else {
          stopsWord = 'пересадки';
        }

        const finishDate = add(item.date, { minutes: item.duration });
        const startHours = getHours(item.date) < 10 ? `0${getHours(item.date)}` : getHours(item.date);
        const startMinutes = getMinutes(item.date) < 10 ? `0${getMinutes(item.date)}` : getMinutes(item.date);
        const finishHours = getHours(finishDate) < 10 ? `0${getHours(finishDate)}` : getHours(finishDate);
        const finishMinutes = getMinutes(finishDate) < 10 ? `0${getMinutes(finishDate)}` : getMinutes(finishDate);

        const stops = item.stops
          .reduce((acc, stopName) => {
            return acc + stopName + ', ';
          }, '')
          .slice(0, -2);

        return (
          <div className={classes.card__details} key={id + item.origin}>
            <div className={`${classes.card__column} ${classes.column}`}>
              <div className={classes.column__info}>
                <p className={classes.column__field}>
                  {item.origin} - {item.destination}
                </p>
                <p className={classes.column__value}>
                  {startHours}:{startMinutes} - {finishHours}:{finishMinutes}
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
                  {item.stops.length ? stops : '-'}
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
