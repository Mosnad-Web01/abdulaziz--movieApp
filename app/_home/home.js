import { getPopularMovies } from '@/services/useFetch';
import MovieCard from '@/components/Card/Card';

export default async function Home() {
  let movies = [];
  let error = null;

  try {
    const data = await getPopularMovies();
    movies = data.results;
  } catch (err) {
    error = err.message;
    console.error('Error in Home component:', err);
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>
        <p className="text-red-500">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}