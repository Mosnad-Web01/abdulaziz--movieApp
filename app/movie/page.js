"use client";

import { fetchData } from "@/services/useFetch";
import { useState, useEffect } from "react";
import GenreFilter from "@/components/GenreFilter";
import RatingFilter from "@/components/RatingFilter";
import MovieList from "@/components/MovieList/MovieList";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const [data, genreData] = await Promise.all([
          fetchData("/movie/popular"),
          fetchData("/genre/movie/list"),
        ]);
        setMovies(data.results);
        setFilteredMovies(data.results);
        setGenres(genreData.genres);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  // Function to apply filters when button is clicked
  const applyFilters = () => {
    const filtered = movies.filter((movie) => {
      const matchesGenre = selectedGenre
        ? movie.genre_ids.includes(parseInt(selectedGenre))
        : true;
      const matchesRating = movie.vote_average >= minRating;
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesGenre && matchesRating && matchesSearch;
    });

    setFilteredMovies(filtered);
  };

  return (
    <div className="container ">
      <div className=" flex">
        <div className="px-4 bg-slate-300">
          <div className="my-4 flex flex-col items-center">
            <button
              onClick={applyFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Apply Filters
            </button>
            <RatingFilter minRating={minRating} setMinRating={setMinRating} />
            <GenreFilter
              genres={genres}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />
          </div>
        </div>
        <div className=" p-2">
          <MovieList currentMovies={filteredMovies} />
        </div>
      </div>
    </div>
  );
}
