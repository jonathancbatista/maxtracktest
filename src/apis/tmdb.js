import axios from 'axios';

export const tmdbParams = {
      api_key: process.env.REACT_APP_TMDB_API,
      include_adult: false,
    }


const tmdb = axios.create({
      baseURL: "https://api.themoviedb.org/3/",
      // headers: {
      //   "Content-Type": 'application/json;charset=UTF-8',
      //   "Access-Control-Allow-Origin": "*"
      // },
      // withCredentials: false,
      
    })


export default tmdb