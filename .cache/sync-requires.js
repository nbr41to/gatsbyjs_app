const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nob/dev/gatsbyjs_app/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nob/dev/gatsbyjs_app/src/pages/404.js"))),
  "component---src-pages-function-js": hot(preferDefault(require("/Users/nob/dev/gatsbyjs_app/src/pages/function.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nob/dev/gatsbyjs_app/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/nob/dev/gatsbyjs_app/src/pages/page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/nob/dev/gatsbyjs_app/src/pages/using-typescript.tsx")))
}

