module.exports = {
  siteMetadata: {
    title: `Ruční mytí aut v Praze Alfa Wash. Kompletní mytí zvenku a čištění uvnitř vozu`,
    description: `Alfa Wash - ruční mytí aut v Praze. Čištění interiéru: renovace čalounění, plastů, chromu. Mytí karoserie nejlepší autokosmetikou. Zdarma Náhradní vůz a služba Pick up`,
    author: `@websolutionsforyou`,
    siteUrl: `https://alfawashrucnimyti.cz/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
