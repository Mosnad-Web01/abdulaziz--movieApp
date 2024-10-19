// app/actors/[id]/page.js
import { fetchData } from "@/services/useFetch";
import Image from "next/image";
import Link from "next/link";

const ActorDetail = async ({ params }) => {
  const { id } = params;

  // Fetch actor and filmography data
  const actorData = await fetchData(`/person/${id}`);
  const filmographyData = await fetchData(`/person/${id}/movie_credits`);

  // Make sure to handle cases where data might not be returned
  if (!actorData || !filmographyData) {
    return <div>Error loading actor data.</div>;
  }

  const actor = actorData; // The actor object
  const filmography = filmographyData.cast; // The actor's filmography

  // Personal Info array
  const personalInfo = [
    { label: "Birthday", value: actor.birthday || "N/A" },
    { label: "Place of Birth", value: actor.place_of_birth || "N/A" },
    { label: "Gender", value: actor.gender === 1 ? "Female" : "Male" },
    { label: "Known For", value: actor.known_for_department || "N/A" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{actor.name}</h1>
      <div className="flex mb-6">
        {actor.profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            width={200}
            height={300}
            className="rounded-lg shadow-lg"
          />
        ) : (
          <div className="w-200 h-300 bg-gray-200 rounded-lg shadow-lg" />
        )}
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Biography</h2>
          <p className="text-gray-700">
            {actor.biography || "No biography available."}
          </p>
          <p className="text-gray-600 mt-2">
            Popularity: {actor.popularity.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Personal Info Section */}
      <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
      <div className="flex flex-col mb-6">
        {personalInfo.map((info) => (
          <div key={info.label} className="flex justify-between mb-2">
            <span className="font-semibold">{info.label}:</span>
            <span className="text-gray-600">{info.value}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Filmography</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filmography.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md p-2">
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={150}
                height={225}
                className="rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-gray-600">
                Release Date: {movie.release_date}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <Link href="/actors" className="mt-4 inline-block text-blue-600">
        Back to Actors
      </Link>
    </div>
  );
};

export default ActorDetail;
