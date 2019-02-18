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
  background-color: #424242;
  display: flex;
  align-items: center;
  height: 70px;
  margin: 0;
  font-family: sans-serif;
  .nav-container {
    max-width: 850px;
    width: 90%;
    height: 70px;
    margin: auto 10%;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
`

export default Navbar