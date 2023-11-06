import React from 'react';
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import Construction from '../images/construction.png';
import AnimatedPages from '../Components/AnimatedPages';


const Header = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${Construction});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #ffffff;
  div {
    width: 100%;
    text-align: center;
  }
  h1 {
    margin-top: 300px;
    font-size: 50px;
  }
  h3 {
    font-size: 20px;
    font-weight: normal;
    a {
      text-decoration: none;
      color:#8A9EA0;
      font-weight: bolder;
    } 
  }
`;

function ComingSoon() {
  return (
    <Header>
      <NavBar />
      <div>
        <AnimatedPages>
          <h1>Under Construction</h1>
          <h3>Coming Soon</h3>
        </AnimatedPages>
      </div>
    </Header>
  )
}

export default ComingSoon