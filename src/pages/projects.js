import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: `#0d2439`, color: '#9cb3c9', height: `100vh` }}>
        <Layout>
          <SEO
            title="Projects"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <h2 style={{ color: '#FFFFFF' }}>Projects</h2>
          <p>
            Coming soon...
          </p>
        </Layout>
      </div>
    )
  }
}

export default Projects