import styled from 'styled-components'

export const BreadCrumbWrapper = styled.div`
  display:flex;
  flex-direction:row ;
  align-items:center;
  gap: 0.66rem;
  margin-top:1rem ;
  margin-bottom: 1.33rem;

  @media(min-width: 1024px) {
    margin-bottom: 1.56rem;
  }
`