import React, { useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const search = 'movie';
function ApiCall() {

  // useEffect(() => {
  //   async function Movies() {
  //     const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=1`);
  //     const movies = await response.json();
  //     console.log(movies);
  //   }
  //   Movies()
  // }, [])


  return (
    <>

    </>
  )
}

export default ApiCall;