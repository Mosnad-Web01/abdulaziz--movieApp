import { fetchData } from "@/services/useFetch";
import Image from "next/image";
import Link from "next/link";
import CardCarousel from "@/components/Carousel"; // Import the CardCarousel component

export default async function HomePage() {
  try {
    const data = await fetchData("/movie/popular");
    const movies = data.results;

    return (
      <>
        <div className="container mx-auto p-4">
          {/* Hero Section */}
          {/* <div className=" mb-6">
            <Image
              src="https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" // Replace with actual hero image URL
              alt="Hero Image"
              width={920}
              height={200}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <h1 className="text-4xl font-bold">Welcome to Movie Hub</h1>
            </div>
          </div> */}

          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Popular Movies
          </h1>

          {/* Use CardCarousel instead of grid layout */}
          <CardCarousel movies={movies} />
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
