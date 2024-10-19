import { notFound } from 'next/navigation';
import { fetchData } from '@/services/useFetch';
import Image from 'next/image';
import { ToastProvider, ToastViewport } from '@radix-ui/react-toast'; // Import Radix Toast
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

// Server-side fetching function
async function getMovieData(id) {
  try {
    const data = await fetchData(`/movie/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null; // Return null to indicate failure
  }
}

export default async function MoviePage({ params }) {
  const { id } = params; // Get the movie ID from the URL parameters
  const movieData = await getMovieData(id); // Fetch movie data server-side

  if (!movieData) {
    notFound(); // If movieData is null, trigger 404 page
  }

  const { title, overview, poster_path, vote_average } = movieData;

  return (
    <ToastProvider>
      <div className="relative bg-gray-900 rounded-lg shadow-lg">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`} // Use a larger background image
            alt={title}
            layout="fill"
            objectFit="cover"
            className="opacity-30 rounded-lg relative " // Make it semi-transparent
          />
        
        </div>

        {/* Overlay for content */}
        <div className="relative container mx-auto p-6 bg-gray-900 rounded-lg shadow-lg bg-opacity-80">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">{title}</h1>
          
          <div className="flex justify-center mb-6">
            <div className="relative w-64 h-96 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105  ">
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
                <p className="text-xl mb-4 text-center text-gray-400 absolute top-0 z-0">
             <span className="font-semibold text-yellow-400">{vote_average}</span>
            </p>
            </div>
          </div>

          

          <Accordion type="single" collapsible>
            <AccordionItem value="overview">
              <AccordionTrigger className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition">
                Overview
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
                <p className="text-gray-300">{overview}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <ToastViewport />
        </div>
      </div>
    </ToastProvider>
  );
}
