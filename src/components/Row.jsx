import React, {useEffect, useState} from 'react';
import axios from '../axios';

const Row = ({fetchURL,title, isLargeRow}) => {

    const base_url = "http://image.tmdb.org/t/p//original/";
    const [movie, setMovie] = useState([]);

    useEffect(()=>{

        async function fetchData(){
            let request = await axios.get(fetchURL);
            setMovie(request.data.results);
        }
        fetchData();

    },[fetchURL])



    return(
      <div>
          <h2 className="font-bold text-2xl ml-4 text-white">{title}</h2>
          <div className="flex overflow-y-hidden overflow-x-scroll p-8" id="row_img">
              {movie.map(movie => <img src={base_url+`${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`${isLargeRow ? "ml-5 rounded-md duration-500 h-72 hover:scale-[1.1]" : "ml-5 rounded-md duration-500 h-36 hover:scale-[1.1]"}`} key={movie.id}/>)}
          </div>
      </div>
    );
}
export default Row;