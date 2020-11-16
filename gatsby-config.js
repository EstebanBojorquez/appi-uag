module.exports = {
  siteMetadata: {
    title: 'SIAUG - Sistema de Investigación UAG v2.0',
    description: 'Sistema web para el almacenamiento y procesamiento de productos de investigación (APPI) generados en la Universidad Autónoma de Guadalajaram',
    keywords: 'UAG, APPI, SIAUG, investigación, tesis',
    lang: 'es'
  },
  pathPrefix: '/appi-uag',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#7D211A',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: '',
        titleType: 'prepend',
        iconPath: './static/images/UAG-1.png'
      },
    },
  ],
};
