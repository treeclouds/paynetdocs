import styled from "styled-components";

export const Wrapper = styled.div
`
  // sidebar schema
  .sl-flex.sl-overflow-y-auto.sl-flex-col.sl-flex-grow.sl-flex-shrink div {
    padding: unset;
  }
  
  // sidebar dropdown
  .sl-flex.sl-items-center.sl-h-md.sl-pr-4.sl-pl-4.sl-bg-canvas-100.sl-cursor-pointer.sl-select-none:has( > div:nth-child(2) > div > svg.fa-chevron-right ),
  .sl-flex.sl-items-center.sl-h-md.sl-pr-4.sl-pl-4.sl-bg-canvas-100.sl-cursor-pointer.sl-select-none:has( > div:nth-child(2) > div > svg.fa-chevron-down ) {
    margin: 1.75rem 0 0.75rem;
    padding: 0 1rem !important;
    color: #475467;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-transform: none;
  }

  // end //

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
  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-uppercase.sl-text-success ,
  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-uppercase.sl-text-primary{
    color: #344054 !important;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-transform: uppercase;
  }

  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-uppercase.sl-text-warning {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #FECDCA;
    background: #FEF3F2;
  }

  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-uppercase.sl-text-success {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #AFE1B6;
    background: #EBF8ED;
  }

  .ElementsTableOfContentsItem .sl-bg-canvas-100 div:nth-child(2) .sl-text-primary {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #A6C9E5;
    background: #E9F2F9;
  }

  //highlighted badge state
  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-warning,
  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-success,
  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-primary {
    color: #344054 !important;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-transform: uppercase;
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-warning {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #FECDCA;
    background: #FEF3F2;
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-success {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #AFE1B6;
    background: #EBF8ED;
  }

  .ElementsTableOfContentsItem .sl-bg-primary-tint div:nth-child(2) .sl-uppercase.sl-text-primary {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #A6C9E5;
    background: #E9F2F9;
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
    padding-right: 32px;
  }

  .sl-overflow-y-auto.sl-flex-1.sl-w-full.sl-px-24.sl-bg-canvas div.sl-py-16 {
    padding-top: 32px;
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

  // default global state
  .sl-leading-tight.sl-text-heading {
    color: #2179BE;
    font-size: 42px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 105%;
    letter-spacing: -0.42px;
  }

  .sl-prose.sl-markdown-viewer p,
  .sl-prose.sl-markdown-viewer ul li {
    color: #475467;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  // dropdown global state
  .sl-overflow-y-auto.sl-flex-1.sl-w-full.sl-px-24.sl-bg-canvas > 
  div > div > div:nth-child(1) > div:nth-child(2) > button {
    column-gap: 8px;
    height: max-content;
    padding: .5rem .875rem;
    border-radius: 8px;
    border: unset;
    outline: 1px solid #D0D5DD;

    color: #344054;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  .sl-overflow-y-auto.sl-flex-1.sl-w-full.sl-px-24.sl-bg-canvas > 
  div > div > div:nth-child(1) > div:nth-child(2) > button:hover {
    background: unset;
  }

  .sl-overflow-y-auto.sl-flex-1.sl-w-full.sl-px-24.sl-bg-canvas > 
  div > div > div:nth-child(1) > div:nth-child(2) > button[aria-expanded="true"] {
    outline: 1px solid #7AAFD8;
  }

  .sl-popover.sl-inline-flex {
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.10);

    overflow: hidden;
    --tw-drop-shadow: none;
  }

  .sl-popover.sl-inline-flex > div:nth-child(2) {
    opacity: 0;
  }

  .sl-popover.sl-inline-flex > div:nth-child(1) {
    display: grid;
    row-gap: .5rem;
    padding: .875rem;
  }

  .sl-popover.sl-inline-flex > div:nth-child(1) > .sl-menu-item {
    padding: .625rem .875rem;
  }

  .sl-popover.sl-inline-flex > div:nth-child(1) > .sl-menu-item:hover {
    background: #E9F2F9;
  }

  .sl-popover.sl-inline-flex > div:nth-child(1) > .sl-menu-item:hover > div > div {
    color: #2179BE;
  }

  .sl-popover.sl-inline-flex > div:nth-child(1) > .sl-menu-item > div > div {
    color: #101828;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
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

  .sl-relative .sl-stack.sl-stack--horizontal.sl-stack--3 .sl-text-lg.sl-bg-primary.sl-text-on-primary.sl-rounded-lg {
    padding: 2px 6px !important;
    border-radius: 6px;
    border: 1px solid #A6C9E5;
    background: #E9F2F9;

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
    font-family: unset;
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
    font-size: 14px;
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
  div:nth-child(3) > div > div > div:nth-child(1) > div,
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 >
  div:nth-child(3) > div > div > div:nth-child(1) > div > div {
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
  div:nth-child(3) > div > span {
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
  div:nth-child(1) > div:nth-child(2) > div {
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
  div:nth-child(1) > div:nth-child(2) > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(2) > p > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-pt-8 > 
  div:nth-child(3) > div > div > div:nth-child(3) > 
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2).sl-stack.sl-stack--vertical >
  div:nth-child(2) > p > a {
    color: #2179BE !important;
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

  // First Body content wrapper
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(1) > h3 > a > div:nth-child(1) {
    color: #344054;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 134%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) >
  button > div:nth-child(1) > div,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(3) >
  button > div:nth-child(1) > div {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div[data-test="schema-row"] > div:nth-child(2) > div > div:nth-child(2) > div,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div[data-test="schema-row"] > div:nth-child(2) > div > div:nth-child(2) > div {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div[data-test="schema-row"] > div:nth-child(2) > div > div:nth-child(2) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div[data-test="schema-row"] > div:nth-child(2) > div > div:nth-child(2) > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div[data-test="schema-row"] > div:nth-child(2) > div > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div[data-test="schema-row"] > div:nth-child(2) > div > span {
    color: #D92D20;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > div,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > div,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > div,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > div {
    color: #475467;
    font-family: unset;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > span {
    color: #D92D20;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(3) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(3) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(3) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(3) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(3) > div > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(3) > div > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(4) > div > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
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
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) p > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) p > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(4) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(4) > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p > b,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p > b,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p > b,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p > b {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > li,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > li,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > li,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > li {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > li > a > b,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > li > a > b,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > li > a > b,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > li > a > b,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) p > a,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-level="2"] > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) p > a {
    color: #2179BE!important;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p > a,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(2) > p > a {
    color: #2179BE!important;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(2) > div,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(2) > div {
    color: #475467;
    font-family: unset;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(2) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(2) > span,
  .sl-stack.sl-stack--vertical.sl-stack--6.sl-flex.sl-flex-col > 
  div:nth-child(2) > div > div > div:nth-child(3) >
  div:nth-child(2) > div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(2) > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }

  // schemas item content
  // data no required
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full {
    margin-top: 0;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(1) > div > div > 
  div:nth-child(2) > div,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(2) > p > b,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div {
    color: #475467;
    font-family: unset;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(1) > div > div > 
  div:nth-child(2) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(2) > p,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(2) > li,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(2) > p > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(1)> div:nth-child(2) > span  {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(1) > span {
    color: #D92D20;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(2) > li > a > b,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(2) > p > a {
    color: #2179BE !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] >
  div:nth-child(2) > div:nth-child(3) > span {
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

  // businessMessageId first
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div > 
  div:nth-child(1) > div:nth-child(1) > div,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(2) > p > b,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(1) > div:nth-child(2) > div,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div:nth-child(2)
  div:nth-child(1) > div:nth-child(1) > div {
    color: #475467;
    font-family: unset;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div > 
  div:nth-child(1) > div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(2) > p,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(2) > li,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(2) > p > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(1) > div:nth-child(2) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div:nth-child(2) >
  div:nth-child(2) > p,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div
  div:nth-child(4) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div:nth-child(2) >
  div:nth-child(2) > p > span {
    color: #475467;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div > 
  div:nth-child(1) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div:nth-child(2) > 
  div:nth-child(1) > span {
    color: #D92D20;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(2) > li > a > b,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(2) > p > a,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div:nth-child(2) >
  div:nth-child(2) > p > a {
    color: #2179BE !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-test="schema-row"] > div
  div:nth-child(3) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(1) > div > div > div > div > 
  div:nth-child(2) > div:nth-child(2) > div[data-test="schema-row"] > 
  div:nth-child(2) > div:nth-child(3) > div > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div
  div:nth-child(3) > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div
  div:nth-child(3) > div > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.Model.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full >
  div:nth-child(2) > div:nth-child(1) > div > div > div > div >
  div:nth-child(2) > div[data-level="1"] div[data-test="schema-row"] > div
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

  // right sidebar
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div {
    background: #1D2939;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(1) {
    background-color: #1D2939;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(2), 
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.SendButtonHolder {
    background-color: #344054;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.SendButtonHolder {
    margin: 0;
    padding: 1rem;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(2) > div {
    margin: 0;
    padding: 1rem .75rem;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(1) > div {
    color: #D0D5DD;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(2) > div > label,
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(2) > div > span,
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(2) > div > div > div > input,
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(2) > div > div > div > div > input {
    color: #D0D5DD;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(2) > div > div > div > 
  pre > div > div.sl-flex > div:nth-child(1),
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div:nth-child(1) > div > div > div.sl-panel.sl-outline-none.sl-w-full >
  div:nth-child(2) > div > div > div > 
  pre > div > div.sl-flex > div:nth-child(2) > span.token.punctuation {
    color: #D0D5DD !important;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400;
    opacity: 1;
  }

  button.sl-button.sl-h-sm.sl-font-medium.sl-bg-primary.sl-text-on-primary.sl-rounded.sl-border-transparent.sl-border {
    display: flex;
    padding: .5rem .875rem;
    justify-content: center;
    align-items: center;

    height: max-content;
    border-radius: 8px;
    border: 1px solid #2179BE;
    background: #2179BE;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.32px;
  }

  // white rightside panel content
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div.sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg {
    border-radius: 8px;
    border-right: 1px solid #D0D5DD;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div.sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg > div:nth-child(1),
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div.sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg > 
  div:nth-child(1) {
    background: #F2F4F7;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div.sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg > div:nth-child(2),
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div.sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg > 
  div:nth-child(2) {
    background: #F9FAFB;
  }

  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div.sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg > div:nth-child(1) > div:nth-child(1) >
  div > button,
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div > 
  div.sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg > div:nth-child(1) > div:nth-child(1) >
  span,
  .sl-stack.sl-stack--vertical.sl-stack--8.sl-flex.sl-flex-col.sl-items-stretch.sl-w-full > 
  div:nth-child(2) > div:nth-child(2) > div.sl-panel.sl-outline-none.sl-w-full.sl-rounded-lg > 
  div:nth-child(1) > div:nth-child(1) > span {
    column-gap: .5rem;
    flex-direction: row-reverse;

    color: #344054;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  // overview content
  h3#before-getting-started > 
  a > div {
    color: #344054;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 109%;
    letter-spacing: 0.35px;
  }

  h3#v2-api > 
  a > div {
    color: #344054;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 123%;
  }
  
  h3#endpoints > 
  a > div {
    color: #344054;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 133%;
  }
`;
