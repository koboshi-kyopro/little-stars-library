// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Little Star\'s Library',
  tagline: 'Competitive Programming Library',
  url: 'https://little-stars-library.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'koboshi-kyopro', // Usually your GitHub org/user name.
  projectName: 'little-stars-library', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Little Star\'s Library',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Library',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/koboshi-kyopro/little-stars-library',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Competitive Programming',
            items: [
              {
                label: 'Kotlin Library',
                to: '/docs/intro',
              },
              {
                label: 'Codeforces 日本語解説',
                href: 'https://koboshi.growi.cloud/',
              },
              {
                label: 'koboshiの競プロメモ',
                href: 'https://scrapbox.io/koboshi-memo/',
              },
            ],
          },
          {
            title: 'Account',
            items: [
              {
                label: 'AtCoder',
                href: 'https://atcoder.jp/users/koboshi',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/koboshi_kyopro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/koboshi-kyopro',
              },
              {
                label: 'Zenn',
                href: 'https://zenn.dev/koboshi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'little star\'s memory',
                href: 'https://koboshi-kyopro.hatenablog.com/',
              },
              {
                label: '月刊組合せ論 Natori',
                href: 'https://hackmd.io/@koboshi/H1N_Kepks',
              },
              {
                label: 'incremental',
                to: '/incremental',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['kotlin'],
      },
    }),
};

module.exports = config;
