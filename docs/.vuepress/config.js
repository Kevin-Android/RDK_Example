import {defineUserConfig, defaultTheme} from "vuepress";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Foxit PDF SDK for Android',
    description: 'Foxit PDF SDK for Android',
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
            }

        },
        navbar: [
            {
                text: '指南',
                link: '/guide/getting-started',
            },
            // {
            //     text: '示例代码',
            //     link: '/examples/view-pdf.html',
            // },
            {
                text: 'GitHub',
                link: 'https://github.com/',
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    children: [
                        '/guide/getting-started.md',
                        '/guide/installation.md',
                        '/guide/ui-extensions/README.md',
                    ],
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
