const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danger/DevelopeDan/gatsby-serverless/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/danger/DevelopeDan/gatsby-serverless/gatsby/src/pages/cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danger/DevelopeDan/gatsby-serverless/gatsby/src/pages/index.js"))),
  "component---src-pages-store-js": hot(preferDefault(require("/Users/danger/DevelopeDan/gatsby-serverless/gatsby/src/pages/store.js")))
}

