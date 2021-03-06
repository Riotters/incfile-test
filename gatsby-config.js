const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
    path: `.env.${activeEnv}`,
});

console.log(`Using environment config: '${activeEnv}'`)

module.exports = {
    flags: {
        PRESERVE_WEBPACK_CACHE: true,
    },
    pathPrefix: `/incfile-test`,
    siteMetadata: {
        title: `What is a Nonprofit Organization? How to Start a Nonprofit`,
        description: `Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground.`,
        author: `Krzysztof Stefański`,
        siteUrl: `${process.env.SITE_URL}`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
                name: `fonts`,
                path: `${__dirname}/src/fonts/`,
            },
        },
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `${process.env.SITE_URL}`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-lodash`,
        // {
        //   resolve: `gatsby-plugin-csp`,
        //   options: {
        //     mergeScriptHashes: false,
        //     mergeStyleHashes: false,
        //     directives: {
        //       "script-src": `'self' 'unsafe-eval' 'unsafe-inline'`,
        //       "style-src": `'self' 'unsafe-inline'`,
        //       "img-src": `data: 'self'`,
        //       "font-src": `data: 'self'`,
        //     },
        //   },
        // },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-svgr-svgo`,
        `gatsby-plugin-styled-components`,
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                exclude: [`/form/*`, `/business-entity-quiz/*`]
            }
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: `${process.env.SITE_URL}`,
                sitemap: `${process.env.SITE_URL}/sitemap.xml`,
                policy: [{
                    userAgent: "*",
                    disallow: [
                        "/blog/post/help_center/",
                        "/blog/help_center/",
                        "/search-article/",
                    ],
                }],
            },
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    "/*": [
                        "X-Frame-Options: DENY",
                        "X-XSS-Protection: 1; mode=block",
                        "X-Content-Type-Options: nosniff",
                        "Referrer-Policy: no-referrer-when-downgrade",
                    ],
                    "*.js": ["Cache-Control: public, max-age=604800"],
                },
            },
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `incfile`
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}