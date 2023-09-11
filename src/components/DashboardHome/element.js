import styled from 'styled-components'

export const HeaderBannerWrapper = styled.div`
  position: relative;
  
  .accent {
    position: absolute;
  }

  .accent-right {
    top: -100px;
    right: -150px;

    transform: scaleX(-1);
  }

  .accent-left {
    bottom: -165px;
    left: -150px;
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
      bottom: -215px;
    }

    .accent-right {
      top: -5px;
    }

    canvas {
      width: 300px;
      height: 300px;
      margin-right: 0;
    }
  }

  @media(min-width: 1440px) {
    canvas {
      width: 400px;
      height: 400px;
      margin-right: 0;
    }
  }
`
export const Wrapper = styled.section`
  position: relative;

  overflow: hidden;

  padding: 0.88rem;

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
export const CardBannerWrapper = styled.div `
  display: grid;
  row-gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3%;
  }
`
export const CardProductSection = styled.section `
  display: grid;
  row-gap: 2rem;

  background: #F9FAFB;
  padding: 1rem 1rem 4rem;

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
  row-gap: 1rem;

  @media (min-width: 768px) {
    row-gap: 1.5rem;
  }
`

export const CardProductWrapper = styled.div `
  display: grid;
  row-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3%;
    row-gap: 1.75rem;
  }
`
export const MobileOnly = styled.div `
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`

export const DesktopOnly = styled.div `
  display: none !important;

  @media (min-width: 768px) {
    display: block !important;
  }
`
export const TextBesidesIcon = styled.div `
  display: flex;
  align-items: center;
  column-gap: 8px;
  p {
    margin-bottom: 0;
  }
`