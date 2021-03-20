require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "bitbudd",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-typescript`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sass`,
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`figures`],
        loginData: {
          identifier: process.env.STRAPI_IDENTIFIER,
          password: process.env.STRAPI_PASSWORD,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        purgeOnly: [`src/styles/tailwind.css`],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `bitbudd`,
        short_name: `bitbudd`,
        start_url: `/`,
        //background_color: defaultTheme.colors.indigo['900'],
        // theme_color: defaultTheme.colors.teal['400'],
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-offline`
  ],
};
