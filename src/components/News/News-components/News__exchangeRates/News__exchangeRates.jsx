import React from 'react';
import exchangeRates from '../../../../data/exchangeRates';
import List from '../../../List';
import ListItem from '../../../ListItem';

/* отображает курс валют */

export default function News__exchangeRates() {
   return (
      <List className="News__exchangeRates" items={exchangeRates}>
         {(items) =>
            items.map((item, index) => (
               <ListItem key={index} className="News__exchangeRates_item">
                  <a className="News__exchangeRates_link" href={item.link}>
                     {item.name}
                  </a>
                  <span className="News__exchangeRates_rate">
                     {item.rate.toFixed(2)}
                  </span>
                  <span className="News__exchangeRates_variation">
                     {item.variation.toFixed(2)}
                  </span>
               </ListItem>
            ))
         }
      </List>
   );
}
