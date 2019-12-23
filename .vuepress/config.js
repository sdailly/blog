module.exports = {
    title: 'Carnet technique',
    description: 'Blog de Stéphane Dailly',
    componentsDir: './components',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:900&display=swap'}],
    ],
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Articles',
                link: '/articles/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ],
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@images': 'public/images',
                '@components': '.vuepress/components'
            }
        }
    }
};
