import styled from 'styled-components'

// ================================
// ========== Typography ==========
// ================================

// 1.625rem --> 26 with base 100%
export const BannerTitle = styled.p `
  font-family: 'Roboto', sans-serif;
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 123%;
  color: #1D2939;

  @media (min-width: 768px) {
    font-size: 2.625rem;
    letter-spacing: -0.42px;
  }
`

export const BannerText = styled.p `
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 150%;
  color: #667085;
  letter-spacing: 0.32px;

  @media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.32px;
  }
`
export const ProductTitle = styled.p `
	font-size: 1.625rem;
	line-height: 123%;
  font-weight: 700;
  
  @media (min-width: 768px) {
		font-size: 2.1875rem;
		line-height: 108%;
    letter-spacing: 0.35px;
  }
`

// 1.3125rem --> 21px with base 100%
export const ProductSubtitle = styled.p `
  font-family: 'Roboto', sans-serif;
  font-size: 1.3125rem;
  font-weight: 700;
  line-height: 150%;
  color: #344054;

  @media (min-width: 768px) {
    font-size: 1.4375rem;
  }
`
// ================================
// ============= Style ============
// ================================

export const Wrapper = styled.section`
  position: relative;

  display: grid;
  row-gap: 8px;

  padding: 1rem;
  background: linear-gradient(170deg, #fff 56%, #F9FAFB 56%);

  p {
    margin-bottom: 0;
  }

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
  margin-bottom: 17rem;
  
  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 6.375rem;
  }

  @media (min-width: 1440px) {
    width: 50%;
    margin-bottom: 6.375rem;
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

  p{
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