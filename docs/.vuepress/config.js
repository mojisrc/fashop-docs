module.exports = {
    dest: 'website',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'FaShop 开源商城系统',
            description: 'FaShop 开源商城系统',
            keywords: 'FaShop,开源商城系统,小程序商城系统,开源商城APP,开源商城小程序',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', href: `/favicon.ico`, type: 'image/x-icon', media: 'screen' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#C64435' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#C64435' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    themeConfig: {
        repo: 'mojisrc/fashop',
        docsRepo: 'mojisrc/fashop-docs',
        logo: '/logo.png',
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/': {
                label: '简体中文',
                languageDropdown: false,
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用",
                        buttonText: "刷新"
                    }
                },
                nav: [
                    {
                        text: '使用',
                        link: '/guide/',
                    },
                    {
                        text: '文档',
                        items: [
                            {
                                text: '管理端接口',
                                link: '/docs/admin/'
                            },
                            {
                                text: '客户端接口',
                                link: '/docs/server/'
                            },
                            {
                                text: '小程序',
                                link: '/docs/wechatmini/'
                            },
                            {
                                text: '设计',
                                link: '/docs/design/'
                            }
                        ]
                    },
                    {
                        text: '帮助',
                        link: '/docs/help/',
                    },
                ],
                sidebar: {
                    '/guide/': genGuideSidebarConfig('指南'),
                    '/docs/admin/': genSidebarAdminDocsConfig('管理端接口'),
                    '/docs/server/': genSidebarServerDocsConfig('客户端接口'),
                    '/docs/help/': genSidebarHelpDocsConfig('帮助'),
                }
            }
        }
    }
}

function genGuideSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'issue',
                'localhost-debug',
                'separate'
            ]
        }
    ]
}


function genSidebarAdminDocsConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'shop',
                'goods',
                'goods-category',
                'goods-spec',
                'goods-evaluate',
                'member',
                'image',
                'upload',
                'news',
                'order',
                'order-refund',
                'page',
                'payment',
                'shipper',
                'logistics',
                'statistics',
                'user',
                'wechat',
                'mini-template',
            ]
        }
    ]
}

function genSidebarServerDocsConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'shop',
                'goods',
                'goods-category',
                'goods-evaluate',
                'goods-collect',
                'user',
                'image',
                'freight',
                'order',
                'order-refund',
                'page',
                'payment',
                'wechat',
                'address',
                'area',
                'buy',
                'cart',
                'version',
            ]
        }
    ]
}


function genSidebarHelpDocsConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'shop',
                'goods',
                'goods-category',
                'goods-evaluate',
                'goods-collect',
                'goods-group',
                'user',
                'image',
                'freight',
                'order',
                'order-refund',
                'page',
                'payment',
                'wechat',
                'address',
                'buy',
                'cart',
                'version',
                'mini-template',
            ]
        }
    ]
}
