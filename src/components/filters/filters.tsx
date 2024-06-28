import { useState } from 'react';
import './filters.scss';
import { FilterOption, SortOption } from '../../constants/types';

type FilterProps = {
  onSortSelect: (sort: string) => void;
  onFilterSelect: ({ filterBy, val }: { filterBy: string; val: string }) => void;
};

const Filters = ({ onSortSelect, onFilterSelect }: FilterProps) => {
  const [sortOpened, setSortOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);
  const [selectedSortText, setSelectedSortText] = useState('Please select');
  const [selectedFilterText, setSelectedFilterText] = useState('Please select');
  const sortOptions = [
    { key: 'name', label: 'Name' },
    { key: 'rating', label: 'Rating' },
    { key: 'reviews', label: 'Number of reviews' },
    { key: 'price', label: 'Price' },
  ];
  const filterOptions = [
    { key: 'brands', label: 'Brands', values: ['Guinness', 'Lagunitas', 'Sierra Nevada'] },
    { key: 'rating', label: 'Rating', values: ['2+', '3+', '4+'] },
  ];

  const handleToggleSortDropdown = () => {
    setSortOpened(!sortOpened);
  };

  const handleToggleFilterDropdown = () => {
    setFilterOpened(!filterOpened);
  };

  const handleEmitSort = (sortOption: SortOption) => {
    setSelectedSortText(sortOption.label);
    setSortOpened(false);
    onSortSelect(sortOption.key);
  };

  const handleEmitFilter = (filterOption: FilterOption, val: string) => {
    setSelectedFilterText(val);
    setFilterOpened(false);
    onFilterSelect({ filterBy: filterOption.key, val });
  };

  const handleCloseDropdowns = () => {
    setSortOpened(false);
    setFilterOpened(false);
  };

  return (
    <div className="filters">
      <div
        className={`mask${sortOpened || filterOpened ? ' open' : ''}`}
        onClick={handleCloseDropdowns}
      ></div>
      <div className="sort-by">
        <p className="text">Sort by: </p>

        <div className="selector">
          <div className="selected" onClick={handleToggleSortDropdown}>
            {selectedSortText}
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

      <div className="filter-by">
        <p className="text">Filter by: </p>

        <div className="selector">
          <div className="selected" onClick={handleToggleFilterDropdown}>
            {selectedFilterText}
          </div>

          <ul className="dropdown" style={{ display: filterOpened ? 'block' : 'none' }}>
            {filterOptions.map((item, i) => (
              <li key={i} className="option">
                <p>{item.label}</p>

                <ul>
                  {item.values.map((val, j) => (
                    <li key={j} className="item" onClick={() => handleEmitFilter(item, val)}>
                      {val}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
