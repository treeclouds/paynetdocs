import styled from 'styled-components'

// ================================
// ========== Typography ==========
// ================================

// 0.875 --> 14px with base 100%
export const CardTitle = styled.p `
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 150%;
  color: #344054;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`
export const CardText = styled.p `
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 150%;
  color: #667085;

  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.32px;
  }
`

// ================================
// ============= Style ============
// ================================
export const Wrapper = styled.a`
  display: grid;
  row-gap: 1rem;

  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 1rem;

  text-decoration: none !important;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);

    ${CardTitle} {
      color: #2179BE;
    }
  }
`

export const CardHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-bottom: 0;
  }
`

export const CardHeaderLeft = styled.div `
  display: flex;
  align-items: center;
  column-gap: 12px;

  p {
    margin-bottom: 0;
  }
`

export const CardHeaderRight = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`