import { useDispatch, useSelector } from 'react-redux';

import './Filter.css';
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
  setAuthorFilter,
  selectAuthorFilter,
  setFavoritesFilter,
  selectFavoritesFilter,
} from '../../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoritesFilter = useSelector(selectFavoritesFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilterss = () => {
    dispatch(resetFilters());
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleFavoritesFilterChange = () => {
    dispatch(setFavoritesFilter());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            value={titleFilter}
            type="text"
            placeholder="Filter by Title"
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorFilterChange}
            value={authorFilter}
            type="text"
            placeholder="Filter by Author"
          />
        </div>

        <div className="filter-group">
          <label>
            <input
              onChange={handleFavoritesFilterChange}
              type="checkbox"
              checked={favoritesFilter}
              placeholder="Filter by fav"
            />
            Favorites only
          </label>
        </div>

        <button onClick={handleResetFilterss}>Reset filter</button>
      </div>
    </div>
  );
};

export default Filter;
