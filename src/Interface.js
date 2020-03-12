import React from 'react'
import info from './Info.json';
import Card from './Card'

function Interface(props) {
  return <Card content={info[props.index]} />
}

export default Interface
