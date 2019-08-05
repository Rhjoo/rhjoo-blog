import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Projects"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h2>Projects</h2>
        <p>
          Coming soon...
        </p>
      </Layout>
    )
  }
}

export default Projects