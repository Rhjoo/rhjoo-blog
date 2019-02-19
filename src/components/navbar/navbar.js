import React from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'
import styled from 'styled-components'

class Navbar extends React.Component {
  state = {
    navbarOpen: false
  }
  handleNavbar = () => {
    this.setState(() => {
      return {navbarOpen: !this.state.navbarOpen}
    })
  }
  render() {
    return (
      <NavWrapper>
        <div className="nav-container">
          <NavbarHeader />
          <NavbarLinks />
          <NavbarIcons />
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background-color: #404040;
  height: 70px;
  margin: 0;
  
  .nav-container {
    max-width: 850px;
    width: 90%;
    height: 70px;
    margin: auto;
    padding: auto;
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
  }
`

export default Navbar