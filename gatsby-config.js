module.exports = {
  siteMetadata: {
    title: `Subvert the Algorithm`,
    description: `A site which aims to raise awareness about how algorithms curate all the content we consume online.`,
    url: `https://subvert-the-algorithm.com`,
    twitterUsername: `@seba1342`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`)
      }
    },
    `gatsby-plugin-netlify-cms`
  ]
};
