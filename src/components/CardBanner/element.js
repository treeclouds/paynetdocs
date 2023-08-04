import styled from 'styled-components'

// ================================
// ========== Typography ==========
// ================================

// 1.3125rem --> 21px with base 100%
export const CardTitle = styled.p `
  font-family: 'Roboto', sans-serif;
  font-size: 1.3125rem;
  font-weight: 700;
  line-height: 150%;
  color: #344054;

  @media (min-width: 768px) {
    font-size: 1.4375rem;
  }
`

export const CardText = styled.p `
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 150%;
  color: #667085;

  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.32px;
  }
`

// ================================
// ============= Style ============
// ================================

export const Wrapper = styled.a`
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.5rem;

  background: #fff;
  border: 1px solid #EAECF0;
  border-radius: 14px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 1rem;

  text-decoration: none !important;

  &:hover {
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);

    ${CardTitle} {
      color: #2179BE;
    }
  }
`

export const CardBody = styled.div `
  display: grid;
  row-gap: 8px;

  p {
    margin-bottom: 0;
  }
`

export const IconWrapper = styled.div`
  width: max-content;
`