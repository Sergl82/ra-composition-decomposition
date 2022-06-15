import React from 'react';
import news from '../../../../data/news';
import List from '../../../List';
import ListItem from '../../../ListItem';
/* 
   принимает состояние, осуществляет фильтрацию заголовков новостей,
   
   для отображения фильтрованого списка новостей используется 
   компонент List и ListItem
*/

export default function News__list() {
   return (
      <List className="News__list" items={news}>
         {(items) =>
            items.map((item, index) => (
               <ListItem key={index} className="News__list_item">
                  <a className="News__list_link" href={item.link} key={index}>
                     {item.title}
                  </a>
               </ListItem>
            ))
         }
      </List>
   );
}
