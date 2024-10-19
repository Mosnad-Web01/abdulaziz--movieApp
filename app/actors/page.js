import { fetchData } from "@/services/useFetch";
import Image from "next/image";

export default async function Actors() {
  try {
    const data = await fetchData("/person/popular");
    const actors = data.results;

    return (
      <>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Popular Actors</h1>

          <div className="overflow-x-auto">
            <div
              className="flex space-x-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto mx-auto"
              style={{ minWidth: "320px" }}
            >
              {actors.map((actor) => (
                <div
                  key={actor.id}
                  className="bg-white rounded-lg shadow-md p-4 flex-shrink-0 w-64 overflow-x-auto"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg mb-2"
                  />
                  <h2 className="text-lg font-semibold">{actor.name}</h2>
                  <p className="text-gray-600">
                    Popularity: {actor.popularity.toFixed(1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching actors:", error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Popular Actors</h1>
        <p className="text-red-500">
          Failed to load actors. Please try again later.
        </p>
      </div>
    );
  }
}
