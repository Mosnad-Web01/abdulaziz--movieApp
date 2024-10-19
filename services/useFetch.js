// app/services/useFetch.js

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

/**
 * Fetch data from TMDB API
 * @param {string} endpoint - The API endpoint to call
 * @returns {Promise<Object>} - The response data
 */
export const fetchData = async (endpoint, page = 1) => {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&page=${page}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
