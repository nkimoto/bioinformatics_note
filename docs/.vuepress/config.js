module.exports = {
  locales: {
    '/': {
      lang: '日本語',
      title: 'Bioinformatics Tips',
      description: 'Bioinformaticsに関する知見まとめ',
    },
    '/en/': {
      lang: 'English',
      title: 'Bioinformatics Tips',
      description: 'Summarized knowledge of Bioinformatics',
    },
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/assets/favicon.jpeg' }],
  ],
  port: 8080,
  serviceWorker: false,
  extend: '@vuepress/theme-default',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: '', // UA-00000000-0
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        },
      },
    ],
  ],
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: '言語',
        // label for this locale in the language dropdown
        label: '日本語',
        // Aria Label for locale in the dropdown
        ariaLabel: '言語',
        displayAllHeaders: true,
        repo: 'nkimoto/bioinformatics_note',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Bioinformatics', link: '/biology/' },
          { text: 'Python', link: '/python/' },
          { text: 'R', link: '/r/' },
        ],
        sidebar: {
          '/biology/': [
            {
              title: '生物学入門', // required
              path: '/biology/', // optional, link of the title, which should be an absolute path and must exist
              collapsable: true, // optional, defaults to true
              sidebarDepth: 3, // optional, defaults to 1
              children: ['/biology/'],
            },
            {
              title: 'DNA-seq', // required
              path: '/biology/dna-seq/', // optional, link of the title, which should be an absolute path and must exist
              collapsable: true, // optional, defaults to true
              sidebarDepth: 3, // optional, defaults to 1
              children: [
                '/biology/dna-seq/test/',
                '/biology/dna-seq/test/test',
              ],
            },
            {
              title: 'RNA-seq', // required
              path: '/biology/rna-seq/', // optional, link of the title, which should be an absolute path and must exist
              collapsable: true, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: [],
            },
            {
              title: '用語集', // required
              path: '/biology/glossary/', // optional, link of the title, which should be an absolute path and must exist
              collapsable: true, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: [],
            },
          ],
          '/python/': [
            {
              title: 'Python', // required
              path: '/python/', // optional, link of the title, which should be an absolute path and must exist
              collapsable: true, // optional, defaults to true
              sidebarDepth: 3, // optional, defaults to 1
              children: ['/python/vscode'],
            },
          ],
          '/r/': [
            {
              title: 'R', // required
              path: '/r/', // optional, link of the title, which should be an absolute path and must exist
              collapsable: true, // optional, defaults to true
              sidebarDepth: 3, // optional, defaults to 1
              children: ['/r/build-environment'],
            },
          ],
        },
      },
      '/en/': {
        // text for the language dropdown
        selectText: 'Language',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Language',
        displayAllHeaders: true,
        repo: 'nkimoto/bioinformatics_note',
        lastUpdated: 'Last Updated',
        nav: [{ text: 'Home', link: '/' }],
        sidebar: [
          {
            title: '生物学入門', // required
            path: '/en/biology/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 3, // optional, defaults to 1
            children: [],
          },
        ],
      },
    },
  },
}
