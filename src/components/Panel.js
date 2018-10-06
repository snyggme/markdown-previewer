import React from 'react'

export const Panel = (props) => {
  return (
    <header>
      <span>{props.name}</span>
      <div className='panel' onClick={props.onClick}><i className={props.icon}></i></div>
    </header>
  );
}