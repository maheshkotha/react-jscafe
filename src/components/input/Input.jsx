import React from 'react'

const Input = (props) => {
  const {
    type="text",
    name="",
    onChange=() => {},
    id='',
    className='',
    style={}
  } = props;

  return (
    <input 
      type={type} 
      className={className} 
      style={style} 
      name={name} 
      onChange={onChange} 
      id={id} 
    />
  )
}

export default Input