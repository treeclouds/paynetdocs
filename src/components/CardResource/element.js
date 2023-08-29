import styled from 'styled-components'

// ================================
// ============= Style ============
// ================================

export const Wrapper = styled.div`
  display: grid;
  row-gap: 0.88rem;

  border: 1px solid #EAECF0;
  border-radius: 14px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 0.88rem;

  text-decoration: none !important;

  p {
    margin-bottom: 0;
  }

  .file-active {
    display: none;
  }

  &:hover {
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);

    h4 {
      color: #2179BE;
    }

    .file-active {
      display: block;
    }
    .file-default {
      display: none;
    }
  }
`

export const CardHeader = styled.div `
  display: grid;
  grid-template-columns: 20px 1fr;
  column-gap: 8px;
  align-items: center;
`
export const CardBody = styled.div `
  display: grid;
  row-gap: 8px;

  p {
    margin-bottom: 0;
  }
`

export const DownloadWrapper = styled.div `
  display: flex;
  align-items: center;
  column-gap: 8px;

  cursor: pointer;
`