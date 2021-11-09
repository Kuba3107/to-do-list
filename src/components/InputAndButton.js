import React from 'react';
import '../css/InputAndButton.css';

function InputAndButton(props) {
  return (
    <div className="inputandbutton">
      <input
        value={props.inputValue}
        onChange={props.inputChange}
        placeholder="Add your task..."
      ></input>
      <button onClick={props.addToStateArray}>{props.textOnButton}</button>
    </div>
  );
}

export default InputAndButton;
