import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'

const GlobalButton = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <div>
      <a href={`/${siteConfig.themeConfig.GLOBAL_URL}`} class="button">Click Me</a>
    </div>
  )
}
export default GlobalButton