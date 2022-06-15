import React from 'react';
import newsTabs from '../../../../data/newsTabs';
import List from '../../../List';
import ListItem from '../../../ListItem';

/* 
   принимает функцию изменения состояния у родителя,
   реализует переключение между категориями, 
   для отображения элементов списка вкладок использует функцию 
*/

export default function News__tabs() {
   return (
      <section className="News__tabs">
         <List className="News__tab" items={newsTabs}>
            {(items) =>
               items.map((item, index) => (
                  <ListItem key={index} className="News__tab_item">
                     <a className="News__tab_link" href={item.link} key={index}>
                        {item.title}
                     </a>
                  </ListItem>
               ))
            }
         </List>
      </section>
   );
}
