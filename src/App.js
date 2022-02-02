import React from 'react';
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="bg-[#111]">
        <Banner fetchURL={requests.fetchNetflixOriginals}/>
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
