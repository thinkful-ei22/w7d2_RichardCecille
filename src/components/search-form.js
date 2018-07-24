import React from 'react';


export default function SearchFrom(props) {
  return (
    <input type='text' name='text' placeholder='Dale Cooper' onChange={event => props.onChange(event.target.value)} />
  )
}
