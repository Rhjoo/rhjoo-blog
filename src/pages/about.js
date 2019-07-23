import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeContextProvider from "../contexts/ThemeContext"

class About extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <Layout>
          <SEO
            title="About Me"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <h2>About me</h2>
          <p>
            Hi, I'm Ryan. I'm not a technical person, and I don't work in the tech industry. But, I'm very curious and interested in learning technology of the future. 
            This is my playground where I try new things and share my experience. Welcome!
          </p>
        </Layout>
      </ThemeContextProvider>
    )
  }
}

export default About

