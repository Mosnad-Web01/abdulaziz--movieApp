// import axios from 'axios';

// const API_URL = 'https://api.themoviedb.org/3';

// export const fetchPopularMovies = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/movie/popular`, {
//       params: {
//         api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching popular movies:', error);
//     return [];
//   }
// };



// app/services/useFetch.js

import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';



export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};



// // services/useFetch.js
// export const fetchGenres = async () => {
//   return [
//     { id: 1, name: 'Action' },
//     { id: 2, name: 'Comedy' },
//     { id: 3, name: 'Drama' },
//     // Add more genres as needed
//   ];
// };


export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${API_URL}/genre/movie/list`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};
