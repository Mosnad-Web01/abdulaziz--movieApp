const RatingFilter = ({ minRating, setMinRating }) => (
    <div>
      <label htmlFor="minRating" className="block mb-2 text-sm text-gray-600">
        Minimum Rating:
      </label>
      <input
        type="number"
        id="minRating"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg"
        placeholder="0"
        min="0"
        max="10"
        step="0.1"
      />
    </div>
  );


export default RatingFilter;