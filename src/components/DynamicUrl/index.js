import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'
import { Wrapper } from './element'

const DynamicUrl = ({type="button", label="Click me"}) => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Wrapper>
      {type==="button"? 
      <a href={`/${siteConfig.themeConfig.GLOBAL_URL}`} className="button">{label}</a>
      : 
      <a href={`/${siteConfig.themeConfig.GLOBAL_URL}`} className="text">{label}</a>
      }
    </Wrapper>
  )
}
export default DynamicUrl