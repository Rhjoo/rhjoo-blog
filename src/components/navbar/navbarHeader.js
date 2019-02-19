import React from 'react'
import { Link } from 'gatsby'
import logo from '../../../content/assets/gatsby-icon.png'
import styled from 'styled-components'

class NavbarHeader extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Link to="/" className="link">
          <img src={logo} alt="company name" className="logo"/>
        </Link> 
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: auto;
  display: flex;
  align-items: center;
  width: 50px;
  height: 70px;
  .logo {
    margin: auto;
    width: 100%
    align-items: center;
  }
  .link {
    box-shadow: none;
  }
`

export default NavbarHeader