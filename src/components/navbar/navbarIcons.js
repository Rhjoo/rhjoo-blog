import React, { Component } from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaGithub className="icon github-icon" />,
        path: 'https://www.github.com/Rhjoo/'
      },
    ]
  }
  render() {
    return (
      <IconWrapper>
        {
          this.state.icons.map(item => {
            return (
              <a 
                href={item.path} 
                key={item.id} 
                target="_blank" 
                rel="noopener noreferrer">
                  {item.icon}
              </a>
            )
          })
        }
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    height: 70px;
  }
  .icon:hover {
    color: #9CB3C9;
  }  
  .github-icon {
    color: #FFFFFF;
  }
  a {
    box-shadow: none;
  }
`
