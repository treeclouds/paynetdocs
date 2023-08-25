import React from 'react'

import {Wrapper, CardLinkLeft, CardLinkRight} from './element'
import ChevronRight from '@site/static/img/chevron-right-blue.svg/'

const CardLink = (props) => {
  return (
    <Wrapper>
      <CardLinkLeft>
        {props.image}
        <p className='t16sm-t18lg font-gray-700'>See also {props.text} for Credit transfer</p>
      </CardLinkLeft>
      <CardLinkRight>
        <a href='/credit-transfer/credit-transfer-reversal' className='t14sm-t18lg bold font-blue-500'>See {props.text}</a>
        <ChevronRight/>
      </CardLinkRight>
    </Wrapper>
  )
}

export default CardLink