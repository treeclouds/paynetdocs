/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // sideBarHome: [{type: 'autogenerated', dirName: '.'}],

  sideBarHome: [
    {
      type: "link",
      label: "Home",
      href:"/home",
      className: 'icon__link home__link',
    },
    {
      type: "link",
      label: "Getting Started",
      href:"/getting-started",
      className: 'icon__link getting-started__link',
    },
    {
      type: "category",
      label: "API",
      items: ["API/InsideAPI/Inside", "intro"],
      className: 'icon__link api__link',
    },
    {
      type: "link",
      label: "FI Server",
      href:"/fi-server",
      className: 'icon__link fi-server__link',
    },
    {
      type: "link",
      label: "Sandbox",
      href:"/sandbox",
      className: 'icon__link sandbox__link',
    },
    {
      type: "link",
      label: "Changelog",
      href:"/changelog",
      className: 'icon__link changelog__link',
    },
    {
      type: "category",
      label: "Products",
      items: [
        "products/duitnow-transfer",
        "products/duitnow-online-banking",
        "products/duitnow-qr",
        "products/duitnow-bill-payment",
        "products/mydebit",
        "products/fpx",
        "products/jompay",
      ],
      className: 'icon__link products__link',
      collapsed: false,
    },
    {
      type: "category",
      label: "Example",
      items: [
        "example-component/resource-table",
        "example-component/codes",
        "example-component/resource-card",
      ],
      className: 'icon__link api__link',
    },
  ],
  anotherSideBar: [
    {
      type: "link",
      label: "Back",
      href: "/home",
    },
    "products/duitnow-transfer",
    {
      type: "category",
      label: "Overview",
      items: [
        {
          type: "category",
          label: "Credit Transfer",
          items: [
            "credit-transfer/introduction",
            "credit-transfer/credit-transfer-reversal",
            "credit-transfer/transaction-enquiry",
            "credit-transfer/repeat-handling",
            "credit-transfer/store-and-forward",
            "credit-transfer/communication-protocol",
          ],
        },
        "credit-transfer/nad",
        "credit-transfer/network-administration"
      ],
    },
    {
      type: "category",
      label: "API Standards & Specifications",
      items: [
        "api-standards/security-&-encryption",
        "api-standards/message-endpoints",
        "api-standards/message-signature",
      ],
    },
    "duitnow-transfer/reporting-specifications",
    "duitnow-transfer/transaction-codes",
    "duitnow-transfer/mapping-tables",
    "duitnow-transfer/response-codes",
    "duitnow-transfer/connectivity-requirements",
  ],
};

module.exports = sidebars;
