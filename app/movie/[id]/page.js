import { notFound } from "next/navigation";
import { fetchData } from "@/services/useFetch";
import Image from "next/image";
import { ToastProvider, ToastViewport } from "@radix-ui/react-toast";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

async function getMovieData(id) {
  try {
    const data = await fetchData(`/movie/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}

export default async function MoviePage({ params }) {
  const { id } = params;
  const movieData = await getMovieData(id);

  if (!movieData) {
    notFound();
  }

  const {
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    genres,
    backdrop_path,
  } = movieData;

  return (
    <ToastProvider>
      <div className="relative bg-gray-900 text-white min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="bg-opacity-10 blur-sm"
          />
        </div>

        <div className="relative container mx-auto p-6 z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="relative w-64 h-96  flex-shrink-0 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div className="flex-1 text-left">
              <h1 className="text-5xl font-bold mb-4">{title}</h1>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <p className="text-lg">
                  <span className="font-bold">Rating:</span>
                  <span className="text-yellow-400 ml-2">{vote_average}</span>
                </p>
                <p className="text-lg">
                  <span className="font-bold">Release Date:</span>
                  <span className="ml-2">{release_date}</span>
                </p>
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold">Genres:</p>
                <div className="flex gap-2 flex-wrap">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-blue-600 px-2 py-1 rounded text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300">{overview}</p>
          </div>

          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem value="overview">
              <AccordionContent className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
                <p className="text-gray-300">
                  Additional movie details, cast, reviews, etc.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <ToastViewport />
      </div>
    </ToastProvider>
  );
}
