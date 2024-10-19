import Footer from "@/components/Footer/Footer";
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
          <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>

          <div className="overflow-x-auto">
            <div
              className="flex space-x-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto mx-auto"
              style={{ minWidth: "320px" }}
            >
              {movies.map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`} passHref>
                  <div className="bg-white rounded-lg shadow-md p-4 flex-shrink-0 w-64 overflow-x-auto cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover rounded-lg mb-2"
                    />
                    <h2 className="text-lg font-semibold">{movie.title}</h2>
                    <p className="text-gray-600">
                      Rating: {movie.vote_average}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
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
