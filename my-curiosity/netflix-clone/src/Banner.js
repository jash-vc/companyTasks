import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './assets/banner.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTreanding);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    // console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + " ... " : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`
            }}
        >
            <div className="bannerContents">
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="bannnerButtons">
                    <button className="bannerBtn">Play</button>
                    <button className="bannerBtn"> My List </button>
                </div>
                <p className="bannerDescription">
                    {truncate(movie?.overview, 150)}
                </p>
            </div>
            <div className="bannerFadeBottom"></div>
        </header>
    )
}

export default Banner
