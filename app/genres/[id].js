'use client'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const GenrePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchGenreMovies = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/genres/${id}`);
          const data = await response.json();
          setMovies(data);
        } catch (error) {
          console.error('Error fetching genre movies:', error);
        }
      }
    };

    fetchGenreMovies();
  }, [id]);

  if (!id || movies.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Movies in Genre: {id}</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Overview: {movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenrePage;
