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
      href:"/documentation",
      className: 'icon__link home__link',
    },
    {
      type: "link",
      href:"/documentation/getting-started",
      label: "Getting Started",
      className: 'icon__link getting-started__link',
    },
    {
      type: "category",
      label: "API",
      items: [
      "intro",
      "API/rate-limit",
      "API/http-status-codes",
      "API/ip-&-domains",
      "API/keys",
      "API/jws",
      "API/webhooks",
      "API/versioning",
      "API/api-reference",
      ],
      className: 'icon__link api__link',
    },
    {
      type: "link",
      label: "FI Server",
      href:"/documentation/fi-server",
      className: 'icon__link fi-server__link',
    },
    {
      type: "link",
      label: "Sandbox",
      href:"/documentation/sandbox",
      className: 'icon__link sandbox__link',
    },
    {
      type: "link",
      label: "Changelog",
      href:"/documentation/changelog",
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
        "example-component/resource-table-2",
        "example-component/codes",
        "example-component/resource-card",
        "example-component/duitnow-resource",
        "example-component/duitnow-signature",
        "example-component/mapping-table",
        "example-component/fi-server",
      ],
      className: 'icon__link api__link',
    }

  ],
  anotherSideBar: [
    {
      type: "link",
      label: "Back",
      href: "/documentation",
      className: "menu__back",
    },
    {
      type: "html",
      value: "DuitNow Transfer",
      className: "menu__link-title t16sm-t23lg bold font-gray-700",
    },
    {
      type: "category",
      label: "Overview",
      items: [
        {
          type: "category",
          label: "Credit Transfer",
          items: [
            "credit-transfer/introduction",
            "credit-transfer/introduction-2",
            "credit-transfer/introduction-3",
            "credit-transfer/introduction-toc",
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
  sideBarDuitNowQr: [
    {
      type: "link",
      label: "Back",
      href: "/documentation",
      className: "menu__back",
    },
    {
      type: "html",
      value: "DuitNow QR",
      className: "menu__link-title t16sm-t23lg bold font-gray-700",
    },
    {
      type: "category",
      label: "Overview",
      items: [
        {
          type: "category",
          label: "Merchant Presented QR",
          items: [
            "merchant-presented-qr/domestic-qr",
            "merchant-presented-qr/cross-border-outward-qr",
            "merchant-presented-qr/cross-border-inward-qr"
          ],
        },
      ],
    },
  ],
  sideBarApiReference: [
    {
      type: "link",
      label: "Home",
      href:"/api-reference/home",
      className: 'icon__link api-home__link',
    },
    {
      type: "html",
      value: "<a href='/api-reference/credit-transfer'>Credit Transfer</a>",
      className: 'theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__link icon__link',
    },
  ]
};

module.exports = sidebars;
