/* eslint-disable react/prop-types */
import React from 'react';

/*
 формирует список, передавая элементы
  в функцию, записанную в children
 */

const List = (props) => (
   <ul className={props.className}>{props.children(props.items)}</ul>
);

export default List;
