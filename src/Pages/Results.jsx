import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../Components/NavBar';
import AnimatedPages from '../Components/AnimatedPages';
import styled from 'styled-components';
import Poster from '../images/poster.jpg';
import SearchBack from '../images/searchback.png'
import Footer from '../Components/Footer';


const Header = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${SearchBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #FCFAF0;
  div {
    width: 100%;
    text-align: center;
  }
  h1 {
    font-size: 50px;
    margin-top: 200px;
  }
  h3 {
    font-size: 16px;
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
    line-height: 1.9;
    h1 {
      font-size: 11px;
      &: hover {
        color: #7CA8AE;
      }
    }
    h2 {
      font-size: 9px;
      color: #7CA8AE;
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

function Results() {
  const[searchData, setSearchData] = useState({});
  const[pageNumber, setPageNumber] = useState(1);
  const[totalResults, setTotalResults] = useState();
  
  const search = useSelector((state) => state.search);

  useEffect(() => {
    async function Movies() {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${pageNumber}`);
      const searches = await response.json();
      console.log(searches)
      setTotalResults(searches.totalResults)
      setSearchData(searches.Search);
    }
    Movies()
  }, [search, pageNumber])
 
 
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

  return (
    <>
    <Header>
      <NavBar />
      <div>
        <AnimatedPages>
          <h1>Search</h1>
          <h3>Search Through Thousands of Titles</h3>
          <p>Click On Title For More Info</p>
        </AnimatedPages>
      </div>
    </Header>
    <Card>
      {Object.keys(searchData).map((index) => {
        const data = searchData[index];
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

export default Results; 