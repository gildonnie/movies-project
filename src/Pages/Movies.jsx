import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPages from '../Components/AnimatedPages';
import NavBar from '../Components/NavBar';
import Poster from '../images/poster.jpg';
import MoviesBack from '../images/movies.png';
import Footer from '../Components/Footer';

const Header = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MoviesBack});
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
    font-size: 80px;
  }
  h3 {
    font-size: 30px;
    font-weight: normal;
    color: #7CA8AE;
    a {
      text-decoration: none;
      color:#8A9EA0;
      font-weight: bolder;
    } 
  }
`;


const Card = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  div {
    text-align: center;
    border: 1px solid black;
    border-radius: 20px;
    background: #FCFAF0;
    width: auto;
    margin: 5px;
    padding: 10px;
    h1 {
      font-size: 17px;
    }
    h2 {
      font-size: 12px;
    }
    img {
      height: 200px;
      max-width: 150px;
      border-radius: 5px;
    }
    a {
      color: black;
    }
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  button {
    cursor: pointer;
    width: 100px;
    height: 30px;
    margin-right: 10px;
    border-radius: 5px;
  }
`;

const apiKey = process.env.REACT_APP_API_KEY;

function Movies() {
  const[movieData, setMovieData] = useState({});
  const[pageNumber, setPageNumber] = useState(1);
  const[totalResults, setTotalResults] = useState();

  useEffect(() => {
    async function Movies() {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=${pageNumber}`);
      const movies = await response.json();
      setTotalResults(movies.totalResults)
      setMovieData(movies.Search);
    }
    Movies()
  }, [pageNumber])

  console.log(totalResults)

  const totalPage = Math.ceil(totalResults / 10);
  console.log(totalPage)

  const Next = () => {
    if(pageNumber >= totalPage) {
      setPageNumber(totalPage);
    } else {
      setPageNumber(pageNumber + 1);
    }  
  }
  const Previous = () => {
    if(pageNumber <= 1) {
      setPageNumber(1);
    } else {
      setPageNumber(pageNumber - 1);
    }  
  }

  console.log(movieData)
  
  return (
    <>
      <Header>
        <NavBar />
        <div>
          <AnimatedPages>
            <h1>Explore Movies</h1>
            <h3>Search Through Thousands of Movies</h3>
            <p>Click On Title For More Info</p>
          </AnimatedPages>
        </div>
      </Header>
      <Card>
        {Object.keys(movieData).map((index) => {
          const data = movieData[index];
          const posterSrc = data.Poster;
          const id = data.imdbID;
          return (
            <div key={index}>
              <img src={posterSrc === 'N/A' ? Poster : posterSrc} alt={data.Title} />
              <Link to={`/info/${id}`}><h1>{data.Title}</h1></Link>
              <h2>{data.Year}</h2>
            </div>
            );
        })}
      </Card>
      <ButtonContainer>
        <button onClick={Previous}>Previous</button>
        <button onClick={Next}>Next</button>
      </ButtonContainer>
      <Footer />
    </>
  )
}

export default Movies;