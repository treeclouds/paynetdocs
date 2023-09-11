import styled from 'styled-components'

export const HeaderBannerWrapper = styled.div`
  position: relative;
  
  display: grid;
  row-gap: 4rem;

  .accent {
    position: absolute;
  }

  .accent-right {
    bottom: 0;
    right: 0;
  }

  .accent-left {
    bottom: 0;
    left: 0;
  }

  canvas {
    position: relative;
    z-index: 1;
    
    margin-right: auto;
    margin-left: auto;

    width: 300px;
    height: 250px;
    object-fit: cover;
  }

  @media(min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .accent-left {
      left: -5%;
    }
    
    .accent-right {
      right: -5%;
    }

    canvas {
      width: 400px;
      height: 400px;
      margin-right: 0;
    }
  }

  @media(min-width: 1440px) {
    .accent-left {
      left: -8.5rem;
    }
    
    .accent-right {
      right: -8.5rem;
    }
  }
`
export const Wrapper = styled.section`
  position: relative;

  overflow: hidden;

  padding: 0.88rem 0.88rem 3rem;

  p {
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 0 5% 0;
  }

  @media (min-width: 1440px) {
    padding: 0 8.5rem 0;
  }
`

export const BannerCaptionWrapper = styled.div `
  position: relative;
  z-index: 1;

  h1 {
    margin-bottom: 8px !important;
  }
  
  @media (min-width: 768px) {
    h1 {
      margin-bottom: 16px !important;
    }
  }
`

export const CardProductSection = styled.section `
  display: grid;
  row-gap: 2rem;

  background: #F9FAFB;
  padding: 2.67rem 0.88rem 4rem;

  * {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    row-gap: 2.5rem;
    padding: 3rem 5%;
  }

  @media (min-width: 1440px) {
    padding: 3rem 8.5rem;
  }
`

export const CardProductListWrapper = styled.div `
  display: grid;
  row-gap: 1.78rem;

  @media (min-width: 768px) {
    row-gap: 2.67rem;
  }
  
`
export const CardProductItem = styled.div `
  .api-prod__header { grid-area: header; }
  
  .api-prod__content {
    display: grid;
    grid-area: content;
    row-gap: 0.87rem;
  }

  .card-link__wrapper { grid-area: links; }

  display: grid;
  grid-template-areas: 
  "header"
  "content"
  "links";

  row-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-areas: 
    "header header"
    "content links"
    "content links";

    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    column-gap: 3%;
  }
`

export const ApiLinkContent = styled.div`
  display: grid;
  row-gap: 0.88rem;
`

export const ApiLinkWrapper = styled.div`
  display: grid;
  row-gap: 0.88rem;
`

export const ApiLinkCard = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 0.88rem;

  text-decoration: none !important;
  cursor: pointer;

  h4 {
    font-weight: 400 !important;
    color: var(--gray-600);
  }
  * {
    margin-bottom: 0;
  }

  .icon-active {
    display: none;
  }

  &:hover {
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);

    h4 {
      color: #2179BE;
    }

    .icon-default {
      display: none;
    }

    .icon-active {
      display: block;
    }
  }
`
export const TextBesidesIcon = styled.div `
  display: flex;
  align-items: center;
  column-gap: 8px;

  cursor: pointer;
  
  p {
    margin-bottom: 0;
  }
`