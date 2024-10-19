const GenreFilter = ({ genres, selectedGenre, setSelectedGenre }) => (
    <div>
      <label htmlFor="genre" className="block mb-2 text-sm text-gray-600">
        Genre:
      </label>
      <select
        id="genre"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );

export default GenreFilter;