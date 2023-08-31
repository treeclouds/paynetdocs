// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://paynet-docu.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:"/",
           breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog:false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 100,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      'docusaurus2-dotenv',
      {
        path: './.env',
        safe: false,
        systemvars: false,
        silent: false,
        expand: false,
        defaults: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo-paynet.svg",
      algolia: {
        apiKey:'d202c6e09c0827e99714d9a7d679d421',
        indexName:'paynetvercel',
        contextualSearch:true,
        appId:'L8A42RG0IL',
      },
      navbar: {
        title: "",
        logo: {
          alt: "Paynet Documentation",
          src: "img/logo-paynet.svg",
        },
        items: [
          {
            to: "/home",
            sidebarid: "sideBarHome",
            activeBaseRoute: 'home',
            position: "left",
            label: "Documentations",
          },
          {
            to: "/api-reference",
            label: "API Reference",
            className: "mr-3",
            position: "left"
          },
          {
            type: 'search',
            position: 'left',
          },
          {
            to: "#",
            label: "Go to Sandbox",
            className: "button button--small button--white desktop-only",
            position: "right"
          }

          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Home',
                href: '#',
              },
              {
                label: 'API',
                href: '#',
              },
              {
                label: 'Documentation',
                href: '#',
              },
              {
                label: 'Contact Us',
                href: '#',
              },
            ],
          },
        ],
        copyright:
        `
        © ${new Date().getFullYear()} Payments Network Malaysia Sdn Bhd (PayNet) 200801035403 (836743-D). All Rights Reserved.
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' }],
      ]
    }),
};

module.exports = config;
