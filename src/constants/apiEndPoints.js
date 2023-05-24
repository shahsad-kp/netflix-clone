import {apiKey} from "./constants";

const netflixOriginalsEndpoint = `/discover/tv?api_key=${apiKey}&with_networks=213`;
const actionsEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;
const comedyEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;
const horrorEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;
const romanceEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`;
const documentariesEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`;

export {
    netflixOriginalsEndpoint,
    actionsEndpoint,
    comedyEndpoint,
    horrorEndpoint,
    romanceEndpoint,
    documentariesEndpoint
}
