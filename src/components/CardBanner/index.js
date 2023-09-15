import React from 'react'

import Link from "@docusaurus/Link"
import {Wrapper, IconWrapper, CardBody, ButtonDynamic} from './element'
import ChevronRight from "@site/static/img/chevron-right-white.svg"

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
      <Link to={props.href}>
        <ButtonDynamic>
          {props.cta}
          <ChevronRight />
        </ButtonDynamic>
      </Link>
    </Wrapper>
    </>
  )
}

export default CardBanner