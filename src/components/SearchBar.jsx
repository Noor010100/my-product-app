const SearchBar = ({ search, setSearch }) => (
    <input
      type="text"
      placeholder="Search Products"
      className="block my-4 p-2 border rounded"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
  
  export default SearchBar;
  