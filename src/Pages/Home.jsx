import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import Background from '../images/background.png'
import Background2 from '../images/movie.png';
import Footer from '../Components/Footer';
import AnimatedPages from '../Components/AnimatedPages';


const Container = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
`;

const Header = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #7CA8AE;
  line-height: 2;
  h1 {
    font-size: 50px;
    color: #FCFAF0;
  }
  h3 {
    font-size: 16px;
    font-weight: normal;
    a {
      color: #FCFAF0;
      font-weight: bolder;
    } 
  }
`;

const TextContainer = styled.div`
  margin-top: 10%;
  margin-left: 5%;
  width: 700px;
`;

const Body = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  line-height: 3;
  font-size: 11px;
  .imgDiv {
    img {
      height: 600px;
    }
  }
  h1, h2 {
    color: #B52212;
    font-size: 17px;
  }
`;

const Body2 = styled.div`
  height: 50vh;
  padding: 20px;
  background: #7CA8AE;
  line-height: 3;
  font-size: 11px;
  h1  {
    color: #B52212;
    font-size: 17px;
  }
  div {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    margin-top: 100px;
    button {
      width: 150px;
      height: 40px;
      margin: 10px;
      background: transparent;
      border: solid 2px #38120C;
      border-radius: 20px;
      color: #38120C;
      cursor: pointer;
      &:hover {
        color: #7CA8AE;
        background: #FCFAF0;
      }
    }
  }
 
`;


function Home() {
  return (
    <>
      <Container>
        <Header>
          <NavBar />
          <TextContainer>
            <AnimatedPages>
              <h1>Welcome To The Entertainment Base</h1>
              <h3>Search Through Thousands of <Link to="/movies">Movies</Link> & <Link to="/shows">Shows</Link> </h3>
            </AnimatedPages>
          </TextContainer>
        </Header>
        <Body>
          <div>
            <h1>Explore the Library</h1>
            <p>Browse our extensive library, which is updated regularly with the latest releases and timeless classics. We have carefully categorized content to make your search even easier.</p>
            <h2>Movies</h2>
            <p>Dive into an array of cinematic experiences, from action-packed blockbusters to heartwarming dramas and mind-bending thrillers.</p>
            <h2>TV Shows</h2>
            <p>Explore the ever-expanding world of television with a vast selection of series spanning various genres, from episodic dramas to binge-worthy comedies.</p>
          </div>
          <div className='imgDiv'>
            <img src={Background2} alt="background" />
          </div>
        </Body>
        <Body2>
          <div>
            <h1>Create an Account</h1>
            <p>To unlock the full potential of the Entertainment Base, create an account to personalize your experience. Save your favorite titles, create watchlists, and receive the latest recommendations tailored to your taste.</p>
            <Link to='/comingSoon'><button>Sign Up</button></Link>
            <Link to='/comingSoon'><button>Sign In</button></Link>
          </div>
        </Body2>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
