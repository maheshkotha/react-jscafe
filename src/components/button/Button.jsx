import React from 'react';
import './button.scss';

const Button = (props) => {

  const { 
    type="button", 
    label="button", 
    onclick=() => {}, 
    className="", style={}
  } = props;

  return (
    <button 
      className={`button ${className}`}
      style={style}
      onClick={onclick}
      type={type}
    >
        {label}
    </button>
  )
}

export default Button
