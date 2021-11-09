import React from 'react';
import '../css/List.css';
function List(props) {
  return (
    <ul>
      {props.tasksStateArray.map((item, index) => (
        <li key={index} data-key={item}>
          {item}
          <button onClick={props.deleteElement}>{props.textOnButton}</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
