import Link from "next/link";
import Image from "next/image";

const MovieCard = ({ movie }) => {
  const rating = movie.vote_average;
  const radius = 20; // Adjust radius for circle
  const circumference = 2 * Math.PI * radius;
  const progress = (rating / 10) * circumference; // Calculate progress based on rating

  return (
    <Link key={movie.id} href={`/movie/${movie.id}`} passHref>
      <div className="bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md p-4 flex flex-col transition-transform transform hover:scale-105 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto relative">
        <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-lg mb-2">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-lg font-semibold text-white truncate">{movie.title}</h2>
        
        {/* Circular Progress Bar for Rating */}
        <svg className="absolute top-0 left-0 bg-gray-400 rounded-3xl w-10 h-10 m-1" viewBox="0 0 50 50" width="50" height="50">
          <circle
            cx="25"
            cy="25"
            r={radius}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="25"
            cy="25"
            r={radius}
            stroke={rating >= 7 ? 'green' : rating >= 5 ? 'orange' : 'red'}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
          />
          <text x="25" y="30" textAnchor="middle" fill="white" fontSize="12">
            {rating}
          </text>
        </svg>
      </div>
    </Link>
  );
};

export default MovieCard;
