const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <div className="mb-4 flex justify-center items-center">
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg"
        placeholder="Type to search..."
      />
    </div>
  );


export default SearchBar;