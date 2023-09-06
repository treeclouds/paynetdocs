import styled from "styled-components";

export const Wrapper = styled.div
`
  .sl-uppercase {
    text-transform: uppercase;
  }

  .ElementsTableOfContentsItem:not(:first-child) {
    padding-left: 1rem;
  }

  .sl-bg-canvas-100 {
    background-color: #fff;
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) div {
    color: #344054 !important;
  }

  .sl-flex.sl-overflow-y-auto.sl-flex-col.sl-flex-grow.sl-flex-shrink div {
    padding: unset;
  }

  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) div svg {
    display: none;
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) div svg {
    display: none;
  }

  //sidebar title 
  .sl-text-paragraph.sl-leading-snug.sl-font-prose.sl-font-semibold.sl-text-heading {
    color: #344054;
    font-size: 23px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 150%
  }

  //sidebar wrapper
  .sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-bg-canvas-100.sl-border-r {
    padding: 24px 8px !important;
    border-right: 1px solid #EAECF0;
  }

  //link subtitle
  .sl-text-sm.sl-leading-relaxed.sl-tracking-wide.sl-font-bold.sl-uppercase {
    margin: 1.75rem 0 .75rem;
    padding-left: 1rem !important;
    
    color: #475467;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-transform: none;
  }

  //default badge state
  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-uppercase.sl-text-warning,
  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-uppercase.sl-text-success {
    color: #344054;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%
  }

  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-uppercase.sl-text-warning {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #FECDCA;
    background: #FEF3F2;
    color: #344054 !important;
    text-transform: uppercase;
  }

  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-uppercase.sl-text-success {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #AFE1B6;
    background: #EBF8ED;
    color: #344054 !important;
    text-transform: uppercase;
  }

  //highlighted badge state
  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-warning,
  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-success {
    color: #344054;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-warning {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #FECDCA;
    background: #FEF3F2;
    color: #344054 !important;
    text-transform: uppercase;
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-success {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #AFE1B6;
    background: #EBF8ED;
    color: #344054 !important;
    text-transform: uppercase;
  }

  // higlighted state link
  .ElementsTableOfContentsItem .sl-bg-primary-tint {
    display: flex;
    column-gap: 1rem;
    height: max-content;

    margin-top: .5rem;
    padding: .5rem 1rem !important;
    background-color: #2179BE;
    border-radius: 8px;
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div {
    color: #fff !important;
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(1) {
    text-overflow: unset;
    overflow: auto;
    white-space: wrap;

    color: #667085;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%
    letter-spacing: 0.32px;
  }

  // default state link
  .ElementsTableOfContentsItem .sl-bg-canvas-100:not(div[id="sl-toc-/"]) {
    display: flex;
    column-gap: 1rem;
    height: max-content;
    margin-top: .5rem;
    padding: .5rem 1rem !important;
  }

  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(1) {
    text-overflow: unset;
    overflow: auto;
    white-space: wrap;

    color: #667085;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%
    letter-spacing: 0.32px;
  }

  //link overview state
  div[id="sl-toc-/"] {
    height: max-content;
    padding: .5rem 0 .5rem 1rem !important;
  }

  div[id="sl-toc-/"].sl-bg-primary-tint,
  div[id="sl-toc-/"].sl-bg-canvas-100 {
    padding-top: .75rem !important;
    padding-bottom: .75rem !important;
  }

  div[id="sl-toc-/"].sl-bg-canvas-100 div:nth-child(1) {
    color: #475467 !important;
    font-size: 18px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 150% !important;
  }

  div[id="sl-toc-/"].sl-bg-primary-tint div:nth-child(1) {
    color: #fff !important;
    font-size: 18px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 150% !important;
  }

  div[id="sl-toc-/"] div:nth-child(2) {
    display: none;
  }

  div[id="sl-toc-/"] .sl-bg-canvas-100 {
    padding: 24px 8px !important;
    padding-left: 8px !important;
  }

  //sidebar footer stoplight href
  a[rel='noopener noreferrer'] {
    display: none;
  }

  // content wrapper
  .sl-stack.sl-stack--vertical.sl-stack--8.HttpOperation.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full,
  .sl-stack.sl-stack--vertical.sl-stack--8.HttpOperation.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col.sl-items-stretch {
    margin-top: 0;
  }

  // .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col > div.sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col.sl-items-stretch {
  //   margin-top: 0;
  // }

  .sl-overflow-y-auto.sl-flex-1.sl-w-full.sl-px-24.sl-bg-canvas {
    padding-left: 32px;
  }

  .sl-overflow-y-auto.sl-flex-1.sl-w-full.sl-px-24.sl-bg-canvas div.sl-py-16 {
    padding-top: 32px;
  }

  // content title
  .sl-leading-tight.sl-text-heading {
    color: #2179BE;
    font-size: 42px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 105%;
    letter-spacing: -0.42px;
  }

  // content panel wrapper
  .sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg {
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    background-color: #fff;

    overflow: hidden;
  }

  .sl-panel.sl-outline-none{
    border-radius: 0;
    border: unset;
    background-color: #fff;
  }

  .sl-panel .sl-panel__titlebar span[role="heading"] {
    padding: 3px 0px;
  }

  .sl-panel .sl-panel__titlebar.sl-leading-none {
    padding: .625rem .5rem .625rem .75rem;
  }

  .sl-panel__content-wrapper.sl-bg-canvas-100 div.sl-panel__content.sl-p-4 {
    padding: 0px .75rem 1rem;
  }

  // content panel wrapper canvas-300 
  .sl-panel .sl-panel__titlebar.sl-leading-none.sl-bg-canvas-300 {
    background-color: #F2F4F7;
  }

  .sl-panel .sl-panel__titlebar.sl-leading-none.sl-bg-canvas-300 div span[role="heading"] {
    color: #344054;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  // content panel wrapper canvas-200 
  .sl-panel .sl-panel__titlebar.sl-leading-none.sl-bg-canvas-200 {
    background-color: #FFF;
  }

  .sl-panel .sl-panel__titlebar.sl-leading-none.sl-bg-canvas-200 div span[role="heading"] {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  // content panel wrapper description
  .sl-markdown-viewer p:not(:nth-child(3)) {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
  }

  .sl-markdown-viewer p:nth-child(3) {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.32px;
  }

  .sl-markdown-viewer p:nth-child(1) b {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  .sl-markdown-viewer p:nth-child(1) a b {
    color: #2179BE !important;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.32px;
  }

  .sl-markdown-viewer p:nth-child(3) code {
    color: #344054;
    text-align: center;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .sl-panel__content-wrapper.sl-bg-canvas-100 div.sl-flex.sl-flex-col.sl-w-full.sl-p-4 {
    padding: 0;
  }

  // attention wrapper
  .sl-callout.sl-bg-primary {
    padding: 0;
    border: none;
    background-color: unset;
  }

  .sl-callout.sl-bg-primary .sl-stack.sl-stack--horizontal {
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    padding: 1rem !important;

    border: unset !important;
    border-radius: 12px !important;
    background-color: #EBF8ED !important;
  }

  .sl-callout.sl-bg-primary .sl-stack.sl-stack--horizontal div:nth-child(1) div[data-testid="icon"]:after {
    content: "Attention";
    margin-left: .5rem;

    color: #226C2C;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-callout.sl-bg-primary .sl-stack.sl-stack--horizontal div:nth-child(2) {
    margin-left: 0;
  }

  .sl-callout.sl-bg-primary .sl-stack.sl-stack--horizontal div:nth-child(2) p {
    color: #226C2C;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  .sl-callout.sl-bg-primary .sl-stack.sl-stack--horizontal div:nth-child(2) p strong {
    display: none;
  }

  // who-should-use wrapper
  h3#who-should-use a div {
    color: #344054;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 123%;
  }

  // This API should only be used by bank as the Issuer. wrapper
  .sl-prose.sl-markdown-viewer p {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  // badge wrapper 
  .sl-badge.sl-rounded-full.sl-border-input {
    padding: 4px 14px;
    border: none;
    border-radius: 16px;
    background-color: #EBF8ED !important;
  }

  .sl-badge.sl-rounded-full.sl-border-input div div div span {
    color: #226C2C;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-panel.sl-outline-none.BaseURLContent.sl-inverted.sl-w-full.sl-rounded-lg {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    padding: .75rem 1rem;
    border-radius: 12px;
    border: 1px solid #EAECF0;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }

  .sl-panel__titlebar.sl-flex.sl-items-center.sl-relative.sl-leading-none.sl-whitespace-nowrap.sl-pr-4.sl-pl-4.sl-bg-canvas-200.sl-text-body.sl-border-input.sl-select-none {
    background: unset;
    padding: 0;
  }

  .sl-panel__titlebar.sl-flex.sl-items-center.sl-relative.sl-leading-none.sl-whitespace-nowrap.sl-pr-4.sl-pl-4.sl-bg-canvas-200.sl-text-body.sl-border-input.sl-select-none >
  .sl-flex.sl-flex-1.sl-items-center.sl-h-lg {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  div.sl-panel__titlebar div {
    height: unset;
  }

  .sl-panel__content-wrapper.sl-bg-canvas-100 div div div div div span.sl-font-bold.sl-pr-2.sl-pl-0 {
    display: none;
  }

  .sl-panel__content-wrapper.sl-bg-canvas-100 div div div div div span[aria-label="Live Server"] span {
    color: #344054;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  // subtitle method wrapper
  .sl-relative .sl-stack.sl-stack--horizontal.sl-stack--3 {
    padding: .75rem 1rem;
    border-radius: 8px;
    border: 1px solid #EAECF0;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    background-color: unset;
  }

  .sl-relative .sl-stack.sl-stack--horizontal.sl-stack--3 .sl-text-lg.sl-bg-success.sl-text-on-primary.sl-rounded-lg {
    padding: 2px 6px!important;
    border-radius: 6px;
    border: 1px solid #AFE1B6;
    background: #EBF8ED;

    color: #344054 !important;
    text-transform: uppercase;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%
  }

  .sl-relative .sl-stack.sl-stack--horizontal.sl-stack--3 .sl-text-lg.sl-bg-warning.sl-text-on-primary.sl-rounded-lg {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #FECDCA;
    background: #FEF3F2;

    color: #344054 !important;
    text-transform: uppercase;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%
  }

  .sl-relative .sl-stack.sl-stack--horizontal.sl-stack--3 .sl-flex.sl-text-lg.sl-select-all div:nth-child(1) {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  .sl-relative .sl-stack.sl-stack--horizontal.sl-stack--3 .sl-flex.sl-text-lg.sl-select-all div:nth-child(2) {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  // Heading 3
  .sl-prose.sl-markdown-viewer.HttpOperation__Description p {
    color: #344054;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 134%
  }

  // Heading 2
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col {
    margin-top: 3.5rem;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col h2#Request {
    display: flex;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col h2#Request a div:nth-child(1) {
    color: #344054;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 123%;
  }

  // Heading 2 content wrapper
  .sl-stack.sl-stack--vertical.sl-stack--3.sl-flex.sl-flex-col {
    margin-top: 1rem;
  }

  .sl-stack.sl-stack--vertical.sl-stack--3.sl-flex.sl-flex-col .sl-panel__titlebar.sl-relative.sl-pr-4.sl-pl-3.sl-border-input {
    border-right: 1px solid #EAECF0;
    background: #F2F4F7;
  }

  .sl-stack.sl-stack--vertical.sl-stack--3.sl-flex.sl-flex-col .sl-panel__titlebar.sl-relative.sl-pr-4.sl-pl-3.sl-border-input div[role="heading"] {
    border-right: 1px solid #EAECF0;
    background: #F2F4F7;

    color: #344054;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  // Headers
  h3.sl-link-heading.sl-py-1.sl-pr-6.sl-text-2xl.sl-leading-snug.sl-text-heading a.sl-link.sl-link-heading__link div {
    color: #344054;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 134%;
  }

  // Headers wrapper
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col {
    margin-top: 2.5rem;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col > div:nth-child(2) {
    margin-top: 1rem;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div >
  div[data-test="schema-row"] {
    padding: 0;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div >
  div[data-test="schema-row"]:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(1) > .sl-text-base >
  .sl-font-mono.sl-font-semibold.sl-mr-2 {
    color: #475467;
    font-family: unset;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(1) > .sl-text-base >
  .sl-text-muted {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(1) > span[data-test="property-required"] {
    color: #D92D20;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }

  // data-test="property-description"
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(2) > p {
    color: #475467;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400;
    line-height: 150% !important;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(2) > p > b,
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(2) > p > span > strong {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(2) > p > a {
    color: #2179BE !important;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.32px;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(2) > li,
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(2) > li > b {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(2) > li > a > b {
    color: #2179BE !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  // data-test="property-validation"
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(3) > span {
    padding: 2px 6px;
    border-radius: 6px;
    border: 1px solid #EAECF0;
    background: #F9FAFB;

    color: #344054;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  // data-test="example"
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(4) > span {
    color: #475467;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(4) > div > span {
    padding: 2px 6px;
    border-radius: 6px;
    border: 1px solid #EAECF0;
    background: #F9FAFB;

    color: #344054;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }


  // data-test="Match pattern"
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(5) > span {
    color: #475467;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col >
  div:nth-child(2) > div > div > div > div >
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-1.sl-flex-col > 
  div:nth-child(5) > div > span {
    padding: 2px 6px;
    border-radius: 6px;
    border: 1px solid #EAECF0;
    background: #F9FAFB;

    color: #344054;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  // responses wrapper
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-col.sl-w-full.sl-h-auto div.sl-flex.sl-w-full:not(:has(h3#response-body)) {
    display: flex;
    flex-direction: column;
  }

  h2[aria-label="Responses"] > a > div:nth-child(1) {
    color: #344054;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 123%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-col.sl-w-full.sl-h-auto div.sl-flex.sl-w-full div:nth-child(2):not(:has(button)) {
    align-self: start;
  }

  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-col.sl-w-full.sl-h-auto div.sl-flex.sl-w-full > 
  div:nth-child(2) > div > 
  .sl-text-success.sl-rounded-lg.sl-border-light,
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-col.sl-w-full.sl-h-auto div.sl-flex.sl-w-full > 
  div:nth-child(2) > div > 
  .sl-text-warning.sl-rounded-lg.sl-border-light,
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-col.sl-w-full.sl-h-auto div.sl-flex.sl-w-full > 
  div:nth-child(2) > div > 
  .sl-text-danger.sl-rounded-lg.sl-border-light {
    padding: .625rem 1rem;
    border-radius: 8px;
    border: 1px solid #EAECF0;
    background: #FFF;

    color: #344054;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-col.sl-w-full.sl-h-auto div.sl-flex.sl-w-full > 
  div:nth-child(2) > div > 
  .sl-bg-success.sl-text-body.sl-rounded-lg.sl-border-light,
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-col.sl-w-full.sl-h-auto div.sl-flex.sl-w-full > 
  div:nth-child(2) > div > 
  .sl-bg-warning.sl-text-body.sl-rounded-lg.sl-border-light,
  .sl-stack.sl-stack--vertical.sl-stack--1.sl-flex.sl-flex-col.sl-w-full.sl-h-auto div.sl-flex.sl-w-full > 
  div:nth-child(2) > div > 
  .sl-bg-danger.sl-text-body.sl-rounded-lg.sl-border-light {
    padding: .625rem 1rem;
    border-radius: 8px;
    border: 1px solid #E9F2F9;
    background: #E9F2F9;

    color: #344054;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.32px;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 {
    margin-top: 0;
    padding-top: 0;
  }

  // Body content wrapper
  .sl-stack.sl-stack--vertical.sl-stack--5.sl-flex.sl-flex-col.sl-items-stretch > .sl-flex.sl-w-full > h3#response-body {
    display: flex;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 >
  .sl-flex.sl-w-full > div:nth-child(2) > div > div > div:nth-child(2) > 
  button.sl-button.sl-rounded.sl-border > div:nth-child(1) > div {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 >
  .sl-flex.sl-w-full > div:nth-child(2) > div > div > div:nth-child(2) > 
  button.sl-button.sl-rounded.sl-border > div:nth-child(2) {
    align-self: center !important;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 >
  div:nth-child(3) > div > div > div:nth-child(1) > div {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  // Body data title wrapper
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(1) > div:nth-child(2) > div > span:nth-child(4).sl-text-warning {
    color: #D92D20;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  
  // Body data content wrapper
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(1) > div:nth-child(1) > div {
    color: #475467;
    font-family: unset;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(1) > div:nth-child(1) > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(1) > span:nth-child(3) {
    color: #D92D20;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(2) > p > b {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(2) > p {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(2) > li {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(2) > li > a > b {
    color: #2179BE !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(3) > span {
    padding: 2px 6px;
    border-radius: 6px;
    border: 1px solid #EAECF0;
    background: #F9FAFB;
    
    color: #344054;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div > div:nth-child(2) > div:nth-child(1) {
    color: #475467;
    font-family: unset;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div > div:nth-child(2) > div:nth-child(2) > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;
