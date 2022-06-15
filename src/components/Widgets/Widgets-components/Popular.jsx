import React from 'react';
import popular from '../../../data/popular';
import List from '../../List';
import ListItem from '../../ListItem';

function Popular() {
   return (
      <List items={popular} className="PopularList">
         {(items) =>
            items.map((item) => (
               <ListItem className="PopularItem" key={item.title}>
                  <a
                     href={item.link}
                     className="PopularItem__link"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span className="PopularItem__title">{item.title}</span>
                  </a>
                  <span className="PopularItem__description">
                     {item.description}
                  </span>
               </ListItem>
            ))
         }
      </List>
   );
}

export default Popular;
