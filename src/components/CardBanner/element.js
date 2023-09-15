import styled from 'styled-components'

// ================================
// ============= Style ============
// ================================

export const Wrapper = styled.div`
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

export const Button = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 1px solid #2179BE;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  min-width: 150px;
  width: max-content;
  padding: 8px 14px;
  color: #fff;
  column-gap: 8px;
  background: #2179BE;
  font-size: 0.89rem; //16px
  font-weight: 700;
  line-height: 133%;

  cursor: pointer;
    
  &:hover {
    background: #144972;
    color: #fff !important;
    text-decoration: none;
  }
`

export const ButtonDynamic = styled(Button) `
  width: 100%;

  @media (min-width: 768px) {
    width: max-content;
  }
`