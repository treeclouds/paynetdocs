import React from 'react'
import {Button, ButtonDynamic} from './element'

const MyButton = (props) => {
  return (
    <ButtonDynamic>
      {props.text}
      <img src={props.buttonIcon} />
    </ButtonDynamic>
  )
}

export default MyButton