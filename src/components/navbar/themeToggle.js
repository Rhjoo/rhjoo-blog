import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (  
    <ButtonWrapper onClick={toggleTheme}><FaMoon /></ButtonWrapper>
  );
}
 
export default ThemeToggle;

const ButtonWrapper = styled.button`
  font-size: 1rem;
  /* cursor: pointer; */
  text-align: center;
  height: 70px;
  color: gray;
  background-color: #404040;
  border: none;
  box-shadow: none;
  :hover {
    color: whitesmoke;
  }
  :focus {
    outline: none;
  }
`