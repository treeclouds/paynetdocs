import React from 'react'

import {Wrapper, CardLinkLeft, CardLinkRight} from './element'
import ChevronRight from '@site/static/img/chevron-right-blue.svg/'
import FileGray from '@site/static/img/file-gray.svg'
const CardLinkApi = () => {
  return (
    <Wrapper>
      <CardLinkLeft>
        <FileGray />
        <p className='t16sm-t18lg font-gray-700'>See also documentation for Credit transfer</p>
      </CardLinkLeft>
      <CardLinkRight>
        <a href='/credit-transfer/credit-transfer-reversal' className='t14sm-t18lg bold font-blue-500'>Check documentation</a>
        <ChevronRight/>
      </CardLinkRight>
    </Wrapper>
  )
}

export default CardLinkApi