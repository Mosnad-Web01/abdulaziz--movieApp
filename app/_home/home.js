import { fetchData } from "@/services/useFetch";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  try {
    const data = await fetchData("/movie/popular");
    const movies = data.results;

    return (
      <>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Popular Movies
          </h1>

          <div className="overflow-x-auto">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              style={{ minWidth: "320px" }}
            >
              {movies.map((movie) => (
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
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching movies:", error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
        <p className="text-red-500">
          Failed to load movies. Please try again later.
        </p>
      </div>
    );
  }
}
