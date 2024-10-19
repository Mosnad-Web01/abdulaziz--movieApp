'use client'


// components/CardCarousel.jsx
import { useState } from "react";
import MovieCard from "@/components/Card/Card";

const CardCarousel = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 5; // Adjust this to show more or fewer cards

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, movies.length - cardsToShow));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="relative mb-6">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {movies.map((movie) => (
            <div className="min-w-[200px] mx-2" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-lg z-10"
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-lg z-10"
        disabled={currentIndex >= movies.length - cardsToShow}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardCarousel;
