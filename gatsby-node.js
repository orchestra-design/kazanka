const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      parks: allPrismicPark {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const parks = pages && pages.data.parks.edges

  const parksMaker = (data) => {
    data.map(({ node }) => {
      const { uid } = node
      createPage({
        component: path.resolve(`src/templates/park.tsx`),
        context: { uid },
        path: uid,
      })
    })
  }

  parks && parksMaker(parks)
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      targets: {
        browsers: ['>0.25%', 'not dead'],
      },
    },
  })
  actions.setBabelPreset({
    name: '@emotion/babel-preset-css-prop',
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()
  config.node = {
    fs: 'empty',
  }
  actions.replaceWebpackConfig(config)
}
