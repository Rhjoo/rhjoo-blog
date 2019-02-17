import React from 'react'
import { Link } from 'gatsby'
import logo from '../../../content/assets/gatsby-icon.png'
// import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
// import { styles } from '../../../utils'

class NavbarHeader extends React.Component {
  render() {
    const { handleNavbar } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="company name" className="logo"/>
        </Link> 
       
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 10%;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

export default NavbarHeader