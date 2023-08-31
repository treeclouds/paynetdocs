import React from 'react'

import {Wrapper, CardLinkLeft, CardLinkRight} from './element'
import ChevronRight from '@site/static/img/chevron-right-blue.svg/'
import CodeGray from '@site/static/img/api-gray.svg'
const CardLinkApi = () => {
  return (
    <Wrapper>
      <CardLinkLeft>
        <CodeGray />
        <p className='t16sm-t18lg font-gray-700'>See also API reference for Credit transfer</p>
      </CardLinkLeft>
      <CardLinkRight>
        <a href='/credit-transfer/credit-transfer-reversal' className='t14sm-t18lg bold font-blue-500'>Check API</a>
        <ChevronRight/>
      </CardLinkRight>
    </Wrapper>
  )
}

export default CardLinkApi