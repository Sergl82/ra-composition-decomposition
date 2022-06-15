import React from 'react';
import List from '../../List';
import ListItem from '../../ListItem';
import TvList_item from './TvList_item';
import live from '../../../data/live';

function LiveList() {
   return (
      <List items={live} className="LiveList">
         {(items) =>
            items.map((item) => (
               <ListItem className="LiveItem" key={live.title}>
                  <TvList_item item={item}>
                     <div className="LiveItem__icon" />
                  </TvList_item>
               </ListItem>
            ))
         }
      </List>
   );
}

export default LiveList;
