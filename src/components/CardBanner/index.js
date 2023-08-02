import React from 'react'
import Image from '@theme/IdealImage';

import {CardTitle, Wrapper, IconWrapper, CardText, CardBody} from './element'
import MyButton from '../Button'
import Rocket from "../../../static/img/rocket.jpg"

const Box = (props) => {
  return (
    <>
    <Wrapper>
      <CardBody>
        <IconWrapper>
          <Image img={Rocket} />
        </IconWrapper>
        <CardTitle>{props.title}</CardTitle>
        <CardText>
          {props.text}
        </CardText>
      </CardBody>
      <MyButton text="Explore now"/>
    </Wrapper>
    </>
  )
}

export default Box