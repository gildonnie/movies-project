import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';

const DivContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: transparent;
  form {
    input {
      height: 30px;
      border-top-left-radius: 10px; 
      border-bottom-left-radius: 10px;
      width: 300px;
      background: transparent;
      border: 1px solid #99B0B0;
      color: #7CA8AE;
    }
    button {
      height: 36px;
      border-top-right-radius: 10px; 
      border-bottom-right-radius: 10px;
      background: transparent;
      border: 1px solid #7CA8AE;
      color: #7CA8AE;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    li {
      list-style-type: none;
      margin-right: 100px;
      a {
        text-decoration: none;
        color:#7CA8AE;
      } 
    }
  }

`

function NavBar() {

  const dispatch = useDispatch();
  const [searchTitle, setSearchTitle] = useState('');
  const [error, setError] = useState('Search');
  const navigate  = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTitle.trim() === '') {
     
      setError('Enter Title');
    } else {
      const search = searchTitle;
      console.log("Search Data:", search);
      dispatch({ type: 'UPDATE_SEARCH', payload: search });
      navigate('/results');
    }
  }
  return (
    <DivContainer>
      <ul>
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/shows'>Shows</Link></li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={error} value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
        <button type="submit">Search</button>
        
      </form>
    </DivContainer>
  )
}

export default NavBar;