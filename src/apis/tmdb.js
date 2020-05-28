import axios from 'axios';

export const tmdbParams = {
      api_key: process.env.REACT_APP_TMDB_API,
      include_adult: false,
    }


const tmdb = axios.create({
      baseURL: "https://api.themoviedb.org/3/",
    })


export default tmdb