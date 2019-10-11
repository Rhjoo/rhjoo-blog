import React from 'react'
import { Link } from 'gatsby'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import styled from 'styled-components'

class NavbarHeader extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Link to="/" className="link">
          {/* {/* <FaChevronLeft style={{ paddingTop: 8, paddingBottom: 0 }} /> */}
          {/* <div style={{ borderColor: `#FFF`, borderWidth: `2px`, borderStyle: `solid`, padding: `-2px 5px` }}> */}
            RHJoo
          {/* </div> */}
          {/* <span style={{ fontWeight: 'bold' }}>/</span> */}
          {/* <FaChevronRight style={{ paddingTop: 8, paddingBottom: 0 }}/> */} 
          {/* <img src={logo} alt="company name" className="logo"/> */}
        </Link> 
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  margin: auto 0;
  padding: 4px;
  display: flex;
  align-items: center;
  width: auto;
  height: 38px;
  /* border-style: solid; */
  border-color: grey;
  border-width: 2px;
  
  /* .logo {
    margin: auto;
    width: 100%
    align-items: center;
  } */
  .link {
    box-shadow: none;
    font-size: 1.8rem;
    color: #FFFFFF;
  }
  .link:hover {
    color: #9CB3C9;
  }
`

export default NavbarHeader