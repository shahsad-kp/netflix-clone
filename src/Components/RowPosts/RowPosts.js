import React, {useEffect, useState} from 'react';
import './RowPosts.css'
import axios from "../../axios";
import {apiKey, imageBaseUrl} from "../../constants/constants";
import YouTube from "react-youtube";

function RowPosts({title, endpoint, bigPoster}) {
    const [movies, setMovies] = useState([])
    const [selectedYoutubeId, setSelectedYoutubeId] = useState(null)

    useEffect(() => {
        axios.get(endpoint).then((r) => {
            setMovies(r.data.results)
        })
    }, [])

    function selectMovie(movieId) {
        if (selectedYoutubeId && selectedYoutubeId.movieId === movieId) {
            return setSelectedYoutubeId(null)
        }
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`).then(
            (r) => {
                if (r.data.results.length === 0) {
                    return
                }
                let videoData = r.data.results[0]
                console.log(videoData)
                if (videoData.site === 'YouTube') {
                    console.log(videoData)
                    setSelectedYoutubeId({movieId: movieId, youtubeId: videoData.key})
                }
            }
        ).catch()
    }

    const ytbOpts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

    return (
        <div className={'row-posts'}>
            <h2 className={'title'}>{title}</h2>
            <div className={'posts-row'}>
                {
                    movies.map((movie) => {
                        return (
                            <img key={title+ ' ' +movie.id} src={imageBaseUrl + (bigPoster ? movie.backdrop_path : movie.poster_path)}
                                 alt={'banner'} className={'poster'} onClick={() => selectMovie(movie.id)}/>
                        )
                    })
                }
            </div>
            {selectedYoutubeId && <YouTube videoId={selectedYoutubeId.youtubeId} style={{width: '100%'}} opts={ytbOpts}/>}
        </div>
    );
}

export default RowPosts;