import React from 'react'
import Image from '@theme/IdealImage';

import {Wrapper, CardHeader, CardHeaderLeft, CardHeaderRight} from './element'

import FileGray from "@site/static/img/file-gray.svg"
import ArrowRightBlue from "@site/static/img/arrow-right-blue.svg"

const Card = (props) => {
  return (
    <>
    <Wrapper>
      <CardHeader>
        <CardHeaderLeft>
          <FileGray />
          <h4 className='t16sm-t18lg bold font-gray-700'>{props.title}</h4>
        </CardHeaderLeft>
        <CardHeaderRight>
          <ArrowRightBlue />
        </CardHeaderRight>
      </CardHeader>
      <p className='t14sm-t16lg font-gray-500'>{props.text}</p>
    </Wrapper>
    </>
  )
}

export default Card