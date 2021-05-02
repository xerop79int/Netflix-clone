import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Original"
        fetchURL={requests.fetchNetflixOriginals}
        IsLargeRow
      />
      <Row title="Trending" fetchURL={requests.fetchTrending} IsLargeRow />
      <Row title="TopRated" fetchURL={requests.fetchTopRated} IsLargeRow />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} IsLargeRow />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} IsLargeRow />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} IsLargeRow />
      <Row title="Action" fetchURL={requests.fetchActionMovies} IsLargeRow />
      <Footer />
    </div>
  );
}

export default App;
