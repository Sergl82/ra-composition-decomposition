/* eslint-disable react/prop-types */
import React from 'react';

/*
  Компонент отвечает за отображение рекламного баннера.
*/

function Banner({ img, link }) {
   return (
      <div className="Banner">
         <a
            className="Banner__link"
            href={link}
            target="_blank"
            rel="noreferrer"
         >
            <img className="Banner__img" src={img} alt="" />
         </a>
      </div>
   );
}

export default Banner;
