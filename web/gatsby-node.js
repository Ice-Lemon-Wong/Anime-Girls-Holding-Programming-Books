const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
  const pageTemplate = path.resolve("./src/templates/ImagePage/ImagePage.js");
  const { createPage } = actions;
  const query = graphql(`
    query PageQuery {
      allDirectory(filter: { relativePath: { ne: "" } }) {
        nodes {
          relativePath
        }
      }
    }
  `);
  const { data } = await query;
  const paths = data.allDirectory.nodes.filter(({ relativePath }) => {
    return relativePath !== "web";
  });
  paths.forEach(({ relativePath }) => {
    createPage({
      path: relativePath,
      component: pageTemplate,
      context: {
        name: relativePath,
      },
    });
  });
};

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.(png|.jpe?g|gif|webp)/,
//           use: [
//             {
//               loader: "file-loader",
//               options: {
//                 name: "[hash].[ext]",
//               },
//             },
//           ],
//         },
//       ],
//     },
//   });
// };
