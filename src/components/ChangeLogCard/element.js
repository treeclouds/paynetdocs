import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  row-gap: 1rem;
`;

export const Capsule = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 15% 1px auto;
  }
  padding: 16px;
  gap: 1rem;
  border-radius: 12px;
  border: 1px solid #eaecf0;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  .horizontal-line {
    background-color: #eaecf0;
    height: 1px;

    @media (min-width: 1024px) {
      height: 100%;
    }
  }
  .padding-10 {
    padding-top: 1rem;
  }

  .button-changelog {
    color: #1a6198;
    background-color: #eaf5fb;
    padding: 5px 10px;
    border: 1px solid;
    width: max-content;
    border-radius: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
