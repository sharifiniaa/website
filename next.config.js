const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withSass({
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      config.module.rules.push({
        enforce: "pre",
        test: /\.scss$/,
        loader: "sass-resources-loader",
        options: {
          resources: "./assets/styles/sass/abstracts/_variables.scss"
        }
      })
  
      return config
    }
  })
)
