import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/projects',
        name: 'projects'
      },
      {
        id: 1,
        path: '/about',
        name: 'about'
      },
    ]
  }
  render() {
    return (
      <LinkWrapper >
        {
          this.state.links.map(item => {
            return (
              <li key={item.id}>
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  display: flex;
  padding: auto;
  align-items: center;
  height: 70px;
  li {
    list-style-type: none;
    margin: auto;
  }
  .nav-link {
    display: inline;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: #FFFFFF;
    font-weight: 400;
    text-transform: capitalize;
    box-shadow: none;
    border-radius: 3px;
    cursor: pointer;
  }  
  .nav-link:hover {
    /* background-color: #9CB3C9; */
    color: #9CB3C9;
  }
`