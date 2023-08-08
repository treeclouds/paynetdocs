import React from 'react'
import Image from '@theme/IdealImage';

import {Wrapper, IconWrapper, CardBody} from './element'
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
        <h4 className='t21sm-t23lg bold font-gray-700'>{props.title}</h4>
        <p className='t16 font-gray-500'>{props.text}</p>
      </CardBody>
      <MyButton text="Explore now"/>
    </Wrapper>
    </>
  )
}

export default Box