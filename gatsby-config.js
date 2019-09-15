require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: 'Poop'
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.API,
        accessToken: process.env.TOKEN,
        linkResolver: () => doc => doc.slug,
        schemas: {
          index: require('./src/schemas/index.json'),
        },
      },
    },
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-netlify-cache`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: siteTitle,
    //     short_name: utilsTitleShort,
    //     start_url: '/',
    //     theme_color: siteThemeColor,
    //     background_color: utilsBackgroundColor,
    //     display: 'minimal-ui',
    //     icon: utilsIcon, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
  ],
}
