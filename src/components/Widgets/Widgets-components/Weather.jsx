/* eslint-disable react/prop-types */
import React from 'react';

/* Компонент отвечает за отображение прогноза погоды. */

function Weather({ icon, temp }) {
   return (
      <div className="Weather">
         <div
            className="Weather__icon"
            style={{
               backgroundImage: `url(${icon})`,
               width: '48px',
               height: '48px',
            }}
         />
         <div className="Weather__temp">{temp.morning}</div>

         <div className="Weather__forecast">
            <span>
               Днём
               {temp.afternoon},
            </span>
            <span>
               вечером
               {temp.evening}
            </span>
         </div>
      </div>
   );
}

export default Weather;
