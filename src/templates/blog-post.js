import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import ThemeContextProvider from "../contexts/ThemeContext"


class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props)
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <ThemeContextProvider>
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h2 style={{ fontFamily: `sans-serif`, marginBottom: 0 }}>{post.frontmatter.title}</h2>
        <p>
          {post.frontmatter.date}
        </p>
        <ContentWrapper>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ContentWrapper>
        <hr/>
        

        <ul style={{ display: `flex`, justifyContent: `space-between` }}>
          <li style={{ listStyleType: `none` }}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li style={{ listStyleType: `none` }}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
      </ThemeContextProvider>
    )
  }
}

const ContentWrapper = styled.div`
  .language-js {
    border-radius: 4px;
  }
  .language-html {
    border-radius: 4px;
  }
`
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
