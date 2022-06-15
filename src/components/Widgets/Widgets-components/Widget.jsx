/* eslint-disable react/prop-types */
import React from 'react';

/*  Компонент отвечает за отображение отдельного виджета. */

function Widget({ link, title, children }) {
   return (
      <div className="Widget">
         <h3 className="Widget-title">
            <a href={link}>{title}</a>
         </h3>
         {children}
      </div>
   );
}

export default Widget;
