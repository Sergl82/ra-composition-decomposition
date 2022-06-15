import React from 'react';
import List from '../../List';
import ListItem from '../../ListItem';
import tv from '../../../data/tv';
import TvList_item from './TvList_item';

/*  Компонент отвечает за отображение виджета "Телепрограмма". */

function TvList() {
   return (
      <List items={tv} className="TvProgramList">
         {(items) =>
            items.map((item) => (
               <ListItem className="TvProgramItem" key={tv.title}>
                  <TvList_item item={item}>
                     <span className="TvList_item__time">{item.time}</span>
                  </TvList_item>
               </ListItem>
            ))
         }
      </List>
   );
}

export default TvList;
