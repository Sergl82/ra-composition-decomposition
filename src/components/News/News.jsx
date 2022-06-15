import React from 'react';
import News__tabs from './News-components/News__tabs/News__tabs';
import News__list from './News-components/News__list/News__list';
import News__exchangeRates from './News-components/News__exchangeRates/News__exchangeRates';
import './News.css';

/* объеденяет компоненты новостного блока в единую логику,
   (хранит состояните News__tabs (категории новостей), 
   передает его в News__list/>*/

export default function News() {
   return (
      <section className="News">
         <News__tabs />
         <News__list />
         <News__exchangeRates />
      </section>
   );
}
