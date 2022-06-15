/* eslint-disable react/prop-types */
import React from 'react';

/* Компонент отвечает за отображение элементов списка
 телепрограммы и эфира.
 */

function TvItem({ item, children }) {
   const { link, title, tvChannel } = item;

   return (
      <div className="TvList_Item__container">
         {children}
         <a href={link} target="_blank" rel="noreferrer">
            <span className="TvItem__title">{title}</span>
         </a>
         <span className="TvItem__channel">{tvChannel}</span>
      </div>
   );
}

export default TvItem;
