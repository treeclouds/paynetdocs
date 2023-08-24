import styled from 'styled-components'

// ================================
// ============= Style ============
// ================================

export const Wrapper = styled.div`
  display: grid;
  row-gap: 0.88rem;

  border-radius: 12px;
  border: 1px solid var(--gray-200);
  padding: 16px;
  margin-bottom: 1.88rem;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  p {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.77rem;
  }


`

export const CardLinkLeft = styled.div `
  display: grid;
  row-gap: 0.67rem;

    
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
`
export const CardLinkRight = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8px;

  cursor: pointer;
`