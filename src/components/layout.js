import React from "react"
import Navbar from "./navbar/navbar"
import styled from "styled-components"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    
    return (
      <div>
        <Navbar />
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built by RHJoo with
          {` `}
          <a href="https://github.com/gatsbyjs/gatsby-starter-blog" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={{ boxShadow: `none`, color: `#FFFFFF` }}
          >
            Gatsby
          </a>
        </Footer>
      </div>
    )
  }
}

const Main = styled.div`
  margin: auto;
  width: 90%;
  max-width: 850px; 
  font-family: sans-serif;
  background-color: #0d2439;
`
const Footer = styled.footer`
  margin: auto;
  width: 90%;
  max-width: 850px; 
  font-family: sans-serif;
  color: #ffffff;
`

export default Layout
