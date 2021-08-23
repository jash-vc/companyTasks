import React, { useEffect, useState } from 'react';
import axios from './axios';
import './assets/row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs on specific conditional variables
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request; 
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`imgWrapper ${isLargeRow && "rowPosterLarge"}`} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
