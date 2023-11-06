import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedPages from '../Components/AnimatedPages';
import NavBar from '../Components/NavBar';
import styled from 'styled-components';
import InfoBack from '../images/film.png'

const Header = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${InfoBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #FCFAF0;
  div {
    text-align: center;
    margin: 0 auto;
  }
  .card {
    margin-top: 20px;
  }
`;

const Card = styled.div`
    text-align: center;
    border: 1px solid #FCFAF0;
    border-radius: 20px;
    background-image: linear-gradient(rgb(0,0,0, 0.5), rgb(0,0,0, 0.5));
    max-width: 70%;
    height: auto;
    margin: 5px;
    padding: 10px;
    color: #FCFAF0;
    line-height: 1.9;
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size:18px;
    }
    p {
      font-size: 11px;
    }
    img {
      height: 200px;
      max-width: 150px;
      border-radius: 5px;
    }
`;


const apiKey = process.env.REACT_APP_API_KEY;

function Info() {
  const[infoData, setInfoData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function Movies() {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
      const movieInfo = await response.json();
      setInfoData(movieInfo);
    }
    Movies()
  }, [id])

  const title = infoData.Title;
  const actors = infoData.Actors;
  const boxOffice = infoData.BoxOffice;
  const director = infoData.Director;
  const genre = infoData.Genre;
  const plot = infoData.Plot;
  const imdbRating = infoData.imdbRating;
  const poster = infoData.Poster;


  return (
    <>
      <Header>
        <NavBar />
        <AnimatedPages>       
          <Card className='card'>
            <img src={poster} alt="title" />
            <h1>{title}</h1>
            <h2>Actors</h2>
            <p>{actors}</p>
            <h2>Genre</h2>
            <p>{genre}</p>
            <h2>Box Office</h2>
            <p>{boxOffice}</p>
            <h2>Director</h2>
            <p>{director}</p>
            <h2>Plot</h2>
            <p>{plot}</p>
            <h2>Rating</h2>
            <p>{imdbRating}</p>
          </Card>
        </AnimatedPages>
      </Header>
    </>
  )
}

export default Info;