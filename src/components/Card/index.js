import React from 'react'
import Image from '@theme/IdealImage';

import {Wrapper, CardHeader, CardHeaderLeft, CardHeaderRight} from './element'

import FileGray from "../../../static/img/file-gray.png"
import ArrowRIghtBlue from "../../../static/img/arrow-right-blue.png"

const Box = (props) => {
  return (
    <>
    <Wrapper>
      <CardHeader>
        <CardHeaderLeft>
          <Image img={FileGray} />
          <h4 className='t16sm-t18lg bold font-gray-700'>{props.title}</h4>
        </CardHeaderLeft>
        <CardHeaderRight>
          <Image img={ArrowRIghtBlue} />
        </CardHeaderRight>
      </CardHeader>
      <p className='t14sm-t16lg font-gray-500'>{props.text}</p>
    </Wrapper>
    </>
  )
}

export default Box