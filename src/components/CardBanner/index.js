import React from 'react'

import {Wrapper, IconWrapper, CardBody} from './element'
import MyButton from '../Button'

const CardBanner = (props) => {
  return (
    <>
    <Wrapper>
      <CardBody>
        <IconWrapper>
        {props.image}
        </IconWrapper>
        <h4 className='t21sm-t23lg bold font-gray-700'>{props.title}</h4>
        <p className='t16 font-gray-500'>{props.text}</p>
      </CardBody>
      <MyButton cta={props.cta} href={props.href}/>
    </Wrapper>
    </>
  )
}

export default CardBanner