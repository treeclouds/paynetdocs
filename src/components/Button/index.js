import React from 'react'
import {Button, ButtonDynamic} from './element'

const MyButton = (props) => {
  return (
    <Button>
      {props.text}
      <img src={props.buttonIcon} />
    </Button>
  )
}

export default MyButton