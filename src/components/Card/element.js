import styled from 'styled-components'

export const Wrapper = styled.a`
  display: grid;
  row-gap: 0.88rem;

  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 0.88rem;

  text-decoration: none !important;
  cursor: pointer;
  * {
    margin-bottom: 0;
  }
  
  &:hover {
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);

    h4 {
      color: #2179BE;
    }
  }
`

export const CardHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardHeaderLeft = styled.div `
  display: flex;
  align-items: center;
  column-gap: 12px;
`

export const CardHeaderRight = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`