import styled from 'styled-components'

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