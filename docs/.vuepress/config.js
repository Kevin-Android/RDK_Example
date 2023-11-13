import {defineUserConfig, defaultTheme} from "vuepress";

import { } from "vuepress"

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Foxit PDF SDK for Android',
    description: 'Foxit PDF SDK for Android Doc',
    base: '/RDK_Example/',
    theme: defaultTheme({
        logo: '/images/ic_launcher.png',
        locales: {

            '/guide/': {
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                tip: '提示',
                warning: '注意',
                danger: '警告',
            },
            '/faq/': {
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                tip: '提示',
                warning: '注意',
                danger: '警告',
            }

        },
        navbar: [
            // {
            //     text: '指南',
            //     link: '/guide/getting-started',
            // },
            {
                text: '开发者指南',
                link: '/guide/developer-guide/introduction',
            },
            {
                text: 'FAQ',
                link: '/faq/README.md',
            },
            // {
            //     text: '示例代码',
            //     link: '/examples/view-pdf.html',
            // },
            {
                text: 'GitHub',
                link: 'https://github.com/Kevin-Android/RDK_Example',
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '开发者指南',
                    children: [
                        '/guide/developer-guide/introduction',
                        '/guide/developer-guide/getting-started-guide',
                        '/guide/developer-guide/build-quickly.md',
                        '/guide/developer-guide/custom-ui.md',
                        '/guide/developer-guide/using-sdk-api.md',
                        '/guide/developer-guide/create-custom-tools.md',
                        '/guide/developer-guide/other-resources.md',
                        '/guide/developer-guide/technical-support.md',
                    ],
                },
            ],
            '/faq/': [
                {
                    text: 'FAQ',
                    children: ['/faq/README.md']
                },
            ],
            // '/examples/': [
            //     {
            //         text: '示例代码',
            //         children: [
            //             '/examples/view-pdf.md',
            //             '/examples/edit-pdf.md',
            //             '/examples/sign-pdf.md',
            //         ],
            //     },
            // ],
        },
    })

})
