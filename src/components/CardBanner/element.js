import styled from 'styled-components'

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
  padding: 0.88rem;

  text-decoration: none !important;

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