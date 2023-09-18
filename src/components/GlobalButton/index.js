import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'
import { Wrapper } from './element'

const GlobalButton = ({type="button", label="Click me"}) => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Wrapper>
      {type==="button"? 
      <a href={`/${siteConfig.themeConfig.GLOBAL_URL}`} className="button">{label}</a>
      : 
      <a href={`/${siteConfig.themeConfig.GLOBAL_URL}`} className="word">{label}</a>
      }
    </Wrapper>
  )
}
export default GlobalButton