const themeReco = require('./themeReco.js')
const nav = require('../nav')
const sidebar = require('../sidebar')

module.exports = Object.assign({}, themeReco, {
    nav,
    sidebar: {
        '/practices/': [
            '每日oj',
        ]
    },
    // logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
})