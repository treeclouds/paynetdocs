import React from 'react'

import {Wrapper, CardHeader, DownloadWrapper} from './element'
import FileGray from "@site/static/img/file-gray.svg"
import FileBlue from "@site/static/img/file-blue.svg"
import DownloadBlue from "@site/static/img/download-blue.svg"

const CardResource = (props) => {
  return (
    <>
    <Wrapper>
      <CardHeader>
        <div className='file-default'>
          {props.image}
        </div>
        <div className='file-active'>
          {props.imageHover}
        </div>
        <h4 className='t16sm-t18lg bold font-gray-700'>{props.title}</h4>
      </CardHeader>
      <p className='t14sm-t16lg font-gray-500'>{props.text}</p>
      <DownloadWrapper>
        <DownloadBlue/>
        <p className='t16sm-t18lg bold font-blue-500 ml-2'>{props.linkText}</p>
      </DownloadWrapper>
    </Wrapper>
    </>
  )
}

export default CardResource