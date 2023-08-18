import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  row-gap: 1.33rem;

  * {
    margin-bottom: 0;
  }
`;

export const Capsule = styled.div`
  display: grid;
  align-items: flex-start;
  gap: 0.88rem;

  padding: 16px;
  border-radius: 12px;
  border: 1px solid #eaecf0;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  .horizontal-line {
    background-color: #eaecf0;
    height: 1px;

    @media (min-width: 1024px) {
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 7rem 1px auto;
  }
`;

export const ChangelogPill = styled.div `
  background-color: #eaf5fb;
  padding: 2px 10px;
  width: max-content;
  border-radius: 16px;

  font-size: 0.77rem;
  color: var(--blue-600);
  font-style: normal;
  font-weight: 700;
  line-height: 21px;

  @media (min-width: 1024px) {
    padding: 5px 10px;
  }
`

export const ChangelogCardDate = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  @media (min-width: 1024px) {
    display: grid;
    row-gap: 8px;
  }
`

export const ChangelogCardStatus = styled.div`
  display: grid;
  row-gap: 0.88rem;

  li {
    padding-left: 0;
  }
`
