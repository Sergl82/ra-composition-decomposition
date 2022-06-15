/* eslint-disable react/prop-types */
import React from 'react';

/* создает элемент списка  */

const ListItem = (props) => (
   <li className={props.className}>{props.children}</li>
);

export default ListItem;
