import React from 'react'
import {CardBody, CardHeader, CardTitle, CardTitleWrapper, Wrapper, IconWrapper} from './element'
import MyButton from '../Button'
import fileGray from "../../../static/img/file-gray.svg"
import arrowRight from "../../../static/img/arrow-right-blue.svg"

const Box = () => {
  return (
    <>
    <Wrapper banner>
      <CardTitleWrapper banner>
        <p>Icon</p>
        <CardTitle>API Reference</CardTitle>
      </CardTitleWrapper>
      <CardBody banner>
        Explore our API reference page to gain a comprehensive understanding of our API
      </CardBody>
      <MyButton text="Explore now"/>
    </Wrapper>

    <Wrapper href='/'>
      <CardHeader>
        <CardTitleWrapper>
          <img src={fileGray} alt={fileGray}/>
          <CardTitle>Credit Transfer</CardTitle>
        </CardTitleWrapper>
        <IconWrapper>
          <p>Icon Right</p>
        </IconWrapper>
      </CardHeader>
      <CardBody>
        Fast and convenient payment method that allows instant transfer of funds between bank accounts using proxy (Mobile number, NRIC, passport number, etc)
      </CardBody>
    </Wrapper>
    </>
  )
}

export default Box