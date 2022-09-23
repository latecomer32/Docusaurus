// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "지각생",
  tagline: "Dinosaurs are cool",
  url: "https://late90.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "지각생",
        logo: {
          alt: "지각생 Logo",
          src: "img/android-chrome-192x192.png",
        },
        items: [
          { type: "docsVersionDropdown" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/latecomer32/Docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      algolia: {
        // 알골리아에서 제공한 appId를 사용하세요.
        appId: "S1Z273DKRI",

        // 공개 API 키: 커밋해도 문제가 생기지 않습니다.
        apiKey: "78bb218ad08577172a81fc7f3e96c161",

        indexName: "late90",

        // 옵션: 아래 문서를 참고
        contextualSearch: true,

        // 옵션: history.push 대신 window.location을 통해 탐색해야 하는 도메인을 지정합니다. 여러 문서 사이트를 크롤링하고 window.location.href를 사용하여 해당 사이트로 이동하려는 경우에 유용한 알골리아 설정입니다.
        externalUrlRegex: "external\\.com|domain\\.com",

        // 옵션: 알골리아 검색 파라미터
        searchParameters: {},

        // 옵션: 기본적으로 활성화된 검색 페이지 경로(비활성화하려면 `false`로 설정)
        searchPagePath: "search",

        //... 다른 알골리아 파라미터
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Tistory",
                to: "https://late90.tistory.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/latecomer32/Docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 지각생, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
