const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const guidelineTemplate = path.resolve(`src/templates/guidelinePage.js`);

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges;

        result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
          const slug = node.fields.slug;
          createPage({
            path: slug,
            component: guidelineTemplate,
            context: {
              pathSlug: slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node
            }
          });

          resolve();
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
