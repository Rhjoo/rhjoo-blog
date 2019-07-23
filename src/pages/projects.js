import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeContextProvider from "../contexts/ThemeContext"

class Projects extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    )
  }
}

export default Projects