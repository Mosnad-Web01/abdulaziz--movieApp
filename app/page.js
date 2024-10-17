// import { fetchPopularMovies } from '../services/useFetch';

// export default async function HomePage() {
//   const movies = await fetchPopularMovies();

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {movies.map((movie) => (
//           <div key={movie.id} className="bg-white rounded-lg shadow-md p-4">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//               className="w-full h-auto object-cover rounded-lg mb-2"
//             />
//             <h2 className="text-lg font-semibold">{movie.title}</h2>
//             <p className="text-gray-600">Rating: {movie.vote_average}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// app/page.js
import Footer from '@/components/Footer/Footer';
import { fetchPopularMovies } from '@/services/useFetch';

export default async function HomePage() {
  const movies = await fetchPopularMovies();

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1> 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-cover rounded-lg mb-2"
              />
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-gray-600">Rating: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
