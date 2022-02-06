import React, {useEffect, useState} from 'react';
import axios from '../axios';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const Row = ({fetchURL,title, isLargeRow}) => {

    const base_url = "http://image.tmdb.org/t/p//original/";
    const [movie, setMovie] = useState([]);
    const [trailerURL, setTrailerUrl] = useState("");

    useEffect(()=>{

        async function fetchData(){
            let request = await axios.get(fetchURL);
            setMovie(request.data.results);
        }
        fetchData();

    },[fetchURL])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerUrl('');
        } else{
            movieTrailer(movie?.name || '').then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
                .catch((error) => console.log(error));
        }
    }


    return(
      <div>
          <h2 className="font-bold text-2xl ml-4 text-white">{title}</h2>
          <div className="flex overflow-y-hidden overflow-x-scroll p-8" id="row_img">
              {movie.map(movie => <img src={base_url+`${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`${isLargeRow ? "ml-5 rounded-md duration-500 h-72 hover:scale-[1.1]" : "ml-5 rounded-md duration-500 h-36 hover:scale-[1.1]"}`} key={movie.id} onClick={()=>handleClick(movie)}/>)}
          </div>
          {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}
      </div>
    );
}
export default Row;