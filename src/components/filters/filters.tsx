import { useState } from 'react';
import './filters.scss';

type FilterProps = {
  onSortSelect: (sort: string) => void;
};

type SortOption = {
  key: string;
  label: string;
};

const Filters = ({ onSortSelect }: FilterProps) => {
  const [sortOpened, setSortOpened] = useState(false);
  const [selectedText, setSelectedText] = useState('Please select');
  const sortOptions = [
    { key: 'name', label: 'Name' },
    { key: 'rating', label: 'Rating' },
    { key: 'reviews', label: 'Number of reviews' },
    { key: 'price', label: 'Price' },
  ];

  const handleToggleSortDropdown = () => {
    setSortOpened(!sortOpened);
  };

  const handleEmitSort = (sortOption: SortOption) => {
    setSelectedText(sortOption.label);
    setSortOpened(false);
    onSortSelect(sortOption.key);
  };

  const handleCloseDropdowns = () => {
    setSortOpened(false);
  };

  return (
    <div className="filters">
      <div className={`mask${sortOpened ? ' open' : ''}`} onClick={handleCloseDropdowns}></div>
      <div className="sort-by">
        <p className="text">Sort by: </p>

        <div className="selector">
          <div className="selected" onClick={handleToggleSortDropdown}>
            {selectedText}
          </div>

          <ul className="dropdown" style={{ display: sortOpened ? 'block' : 'none' }}>
            {sortOptions.map((item, i) => (
              <li key={i} className="item" onClick={() => handleEmitSort(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="filter-by"></div>
    </div>
  );
};

export default Filters;
