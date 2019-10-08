import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div style={{ backgroundColor: `#0d2439`}}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} style={{ color: '#9cb3c9' }}>
                <h3 style={{ fontFamily: `sans-serif`, marginBottom: 0 }}>
                  <Link to={node.fields.slug} style={{ boxShadow: `none`, color: '#FFFFFF' }}>
                    {title}
                  </Link>
                </h3>
                <small style={{ color: '#FFFFFF' }}>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
              </div>
            )
          })}
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
