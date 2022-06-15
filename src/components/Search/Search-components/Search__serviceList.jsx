import React from 'react';
import services from '../../../data/services';
import List from '../../List';
import ListItem from '../../ListItem';

/* отображает перечень доступных сервисов */

export default function Search__serviceList() {
   return (
      <List className="Search__serviceList" items={services}>
         {(items) =>
            items.map((item, index) => (
               <ListItem key={index} className="Search__serviceList_item">
                  <a
                     className="Search__serviceList_link"
                     href={item.link}
                     key={index}
                  >
                     {item.title}
                  </a>
               </ListItem>
            ))
         }
      </List>
   );
}
