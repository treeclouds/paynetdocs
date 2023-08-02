import React from 'react'
import Image from '@theme/IdealImage';

import {Wrapper, CardHeader, CardHeaderLeft, CardHeaderRight, CardTitle, CardText} from './element'

import MyButton from '../Button'

import Rocket from "../../../static/img/rocket.jpg"
import ArrowRIghtBlue from "../../../static/img/arrow-right-blue.png"

const Box = (props) => {
  return (
    <>
    <Wrapper>
      <CardHeader>
        <CardHeaderLeft>
          <Image img={Rocket} />
          <CardTitle>{props.title}</CardTitle>
        </CardHeaderLeft>
        <CardHeaderRight>
          <Image img={ArrowRIghtBlue} />
        </CardHeaderRight>
      </CardHeader>

      <CardText>
        {props.text}
      </CardText>
      <MyButton text="Explore now"/>
    </Wrapper>
    </>
  )
}

export default Box