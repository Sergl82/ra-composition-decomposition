import React from 'react';
import Widget from './Widgets-components/Widget';
import Weather from './Widgets-components/Weather';
import weather from '../../data/weather';
import Popular from './Widgets-components/Popular';
import TvList from './Widgets-components/TvList';
import LiveList from './Widgets-components/LiveList';
import './Widgets.css';

/* Компонент отвечает за вывод блока с дополнительными виджетами. */

export default function Widgets() {
   return (
      <section className="Widgets">
         <Widget title="Погода" link="#0">
            <Weather icon={weather.icon} temp={weather.temp} />
         </Widget>
         <Widget title="Посещаемое" link="#0">
            <Popular />
         </Widget>
         <Widget title="Карта Германии" link="#0">
            <div>Расписания</div>
         </Widget>
         <Widget title="Телепрограмма" link="#0">
            <TvList />
         </Widget>
         <Widget title="Эфир" link="#0">
            <LiveList />
         </Widget>
      </section>
   );
}
