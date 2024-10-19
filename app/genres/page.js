// pages/movies.js
"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/services/useFetch"; // Adjust the path as necessary
// app/components/MoviePage.js
const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchData("/movie/popular", page); // Change endpoint if needed
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          {" "}
          Page {page} of {totalPages}{" "}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviePage;
