import React from 'react';
import {useEffect,useState} from 'react';
import axios from '../axios';

const Banner = ({fetchURL}) => {

    const [movie, setMovie] = useState([]);
    const baseURL = "http://image.tmdb.org/t/p//original/";
    let randomNumber = randomBackdrop();

    useEffect(() => {

        async function fetchData(){

            const request = await axios.get(fetchURL);
            //console.log(request.data.results);
            setMovie(request.data.results);

        }
        fetchData();
    }, fetchURL)


    function randomBackdrop(){
        let randomNumber = Math.floor(Math.random() * movie.length-1);

        return randomNumber;
    }

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }


    return(
        <div style={{
            height: "448px",
            backgroundSize: "cover",
            backgroundImage: `url("${baseURL+movie[randomNumber]?.backdrop_path}"`,
            backgroundPosition: "center center",
            paddingTop: "140px"
        }}>

            <h1 className="text-white font-bold text-5xl pb-6 ml-[30px]">{movie[randomNumber]?.name}</h1>
            <button className="bg-[#33333380] text-white pl-7 pr-7 pt-1 pb-1 rounded ml-[30px] font-semibold duration-200 hover:text-black hover:bg-white">Play</button>
            <button className="bg-[#33333380] text-white pl-7 pr-7 pt-1 pb-1 rounded ml-[30px] font-semibold duration-200 hover:text-black hover:bg-white">My List</button>
            <h2 className="text-white font-semibold text-md ml-[30px] mt-6 w-[400px]">{truncate(movie[randomNumber]?.overview, 150)}</h2>

        </div>
    );
}

export default Banner;