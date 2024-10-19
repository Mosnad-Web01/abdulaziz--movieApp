import MovieCard from "@/components/Card/Card";
// import Error from "next/error";

const MovieList = ({ currentMovies }) => (
    <div className="overflow-x-auto">
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        style={{ minWidth: "320px" }}
      >
        {currentMovies.length > 0 ? (
          currentMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>error</p>
        )}
      </div>
    </div>
  );
export default MovieList;