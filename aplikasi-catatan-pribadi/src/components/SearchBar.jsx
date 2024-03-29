import PropTypes from 'prop-types';

function SearchBar({ onSearchChange, searchTerm }) {
  return (
    <div className="search-bar mt-5">
      <div className="p-1 px-2 bg-light form-control rounded rounded-pill shadow-sm mb-4">
        <div className="input-group">
          <input
            onChange={(event) => onSearchChange(event.target.value)}
            type="search"
            placeholder="Cari judul catatan"
            aria-describedby="button-addon1"
            value={searchTerm}
            className="form-control border-0 bg-light fs-5"
          />
          <div className="input-group-append">
            <button
              id="button-addon1"
              type="button"
              className="btn btn-link text-dark fs-5"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

export default SearchBar;