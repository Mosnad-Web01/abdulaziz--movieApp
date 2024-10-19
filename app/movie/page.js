"use client";

import Footer from "@/components/Footer/Footer";
import { fetchData } from "@/services/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchData("/movie/popular");
        const genreData = await fetchData("/genre/movie/list");
        setMovies(data.results);
        setFilteredMovies(data.results);
        setGenres(genreData.genres);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  const handleFilter = () => {
    let filtered = movies;

    if (selectedGenre) {
      filtered = filtered.filter((movie) =>
        movie.genre_ids.includes(parseInt(selectedGenre))
      );
    }

    if (minRating > 0) {
      filtered = filtered.filter((movie) => movie.vote_average >= minRating);
    }

    setFilteredMovies(filtered);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Popular Movies
        </h1>

        <div className="flex justify-center items-center mb-6 space-x-4">
          <div>
            <label htmlFor="genre" className="block mb-2 text-sm text-gray-600">
              Genre:
            </label>
            <select
              id="genre"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="minRating"
              className="block mb-2 text-sm text-gray-600"
            >
              Minimum Rating:
            </label>
            <input
              type="number"
              id="minRating"
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="0"
              min="0"
              max="10"
              step="0.1"
            />
          </div>

          <button
            onClick={handleFilter}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            style={{ minWidth: "320px" }}
          >
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`} passHref>
                  <div className="bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md p-4 flex-shrink-0 cursor-pointer transition-transform transform hover:scale-105">
                    <div className="relative w-full h-80 overflow-hidden rounded-lg mb-2">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <h2 className="text-lg font-semibold text-white">
                      {movie.title}
                    </h2>
                    <p className="text-gray-400">
                      Rating: {movie.vote_average}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-white text-center col-span-full">
                No movies found matching your filters.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
