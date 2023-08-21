import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;

  display: grid;
  row-gap: 8px;

  padding: 0.88rem;
  background: linear-gradient(170deg, #fff 56%, #F9FAFB 56%);

  @media (min-width: 768px) {
    padding: 6.75rem 5% 0;
    background: linear-gradient(170deg, #fff 73%, #F9FAFB 73%);
  }

  @media (min-width: 1440px) {
    padding: 6.75rem 8.5rem 0;
  }
`
export const BgWrapper = styled.div `
  position: absolute;

  @media (min-width: 1440px) {
    left: 0;
    right: 0;
  }
`

export const BannerCaptionWrapper = styled.div `
  min-height: 20.4rem;
  
  h1 {
    margin-bottom: 8px !important;
  }

  @media (min-width: 768px) {
    width: 60%;
    min-height: 10rem;

    h1 {
      margin-bottom: 16px !important;
    }
  
  }

  @media (min-width: 1440px) {
    width: 50%;
    min-height: 11rem;
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