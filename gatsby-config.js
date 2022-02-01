module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-svgr',
            options: {
                namedExport: 'Image',
                ref: true,
                replaceAttrValues: { '#000': 'currentColor' },
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Michael van Engelshoven',
                short_name: 'micha149',
                start_url: '/',
                background_color: '#000000',
                theme_color: '#000000',
                display: 'standalone',
                icon: 'src/images/icon.svg',
            },
        },
    ],
};
