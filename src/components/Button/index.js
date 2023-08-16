import React from 'react'
import {Button, ButtonDynamic} from './element'

import ChevronRight from "@site/static/img/chevron-right-white.svg"

const MyButton = (props) => {
  return (
    <ButtonDynamic href={props.href}>
      {props.cta}
      <ChevronRight />
    </ButtonDynamic>
  )
}

export default MyButton