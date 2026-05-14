export default function SearchBar({ value, onChange, onFilter, favorite, setFavorite }) {
  return (
    <div className="search-panel">
      <input
        className="form-control"
        type="text"
        placeholder="Search contacts by name, email or phone"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="search-actions">
        <button className="btn btn-outline" onClick={() => onFilter(false)}>
          All
        </button>
        <button className={`btn ${favorite ? "btn-primary" : "btn-outline"}`} onClick={() => setFavorite(!favorite)}>
          {favorite ? "Favorites" : "Show Favorites"}
        </button>
      </div>
    </div>
  );
}
