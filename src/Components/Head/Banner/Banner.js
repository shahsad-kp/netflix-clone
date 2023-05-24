import React, {useEffect, useState} from 'react';
import './Banner.css'
import axios from "../../../axios";
import {apiKey, imageOriginalBaseUrl} from "../../../constants/constants";

function Banner(props) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`/trending/all/day?language=en-US&api_key=${apiKey}`).then(r =>{
            setMovie(r.data.results[0])
        } )
    }, [])

    return (
        <div className={'head-banner'} style={{backgroundImage: `url(${movie? imageOriginalBaseUrl + movie.backdrop_path : ''})`}}>
            <div className={'head-contents'}>
                <h1 className={'movie-title'}>{movie ? movie.title : ''}</h1>
                <div className={'buttons'}>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{movie ? movie.overview : ''}</p>
            </div>
            <div className={'shade'}/>
        </div>
    );
}

export default Banner;