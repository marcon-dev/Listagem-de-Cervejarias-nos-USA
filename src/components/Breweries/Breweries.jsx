import { useRef } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import BreweriesStyle from "../../modules/Breweries.module.css";
import useBreweries from "../../hooks/useBreweries";

const Breweries = ({ onSelectBrewery, filter, onFilterChange }) => {
  const {
    currentBreweries, currentPage,
    totalPages, handlePageChange,
    loading, error,
  } = useBreweries(filter);

  const cardRefs = useRef([]);
  cardRefs.current = [];

  const handleFilterChange = (event) => onFilterChange(event.target.value);

  const keyMap = {
    ArrowRight: 1, ArrowDown: 1,
    ArrowLeft: -1, ArrowUp: -1,
  };

  const handleKeyDown = (event, brewery, index) => {
    if (event.key === "Enter") {
      onSelectBrewery(brewery);
      return;
    }

    const cardCount = currentBreweries.length;
    let nextIndex;

    if (keyMap[event.key] !== undefined) {
      nextIndex = (index + keyMap[event.key] + cardCount) % cardCount;  
    }

    cardRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={BreweriesStyle.breweriesContainer}>
      <div className={BreweriesStyle.filterContainer}>
        <label htmlFor="brewery-filter">Filter:</label>
        <select
          id="brewery-filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="micro">micro</option>
          <option value="nano">nano</option>
          <option value="regional">regional</option>
          <option value="brewpub">brewpub</option>
          <option value="large">large</option>
          <option value="planning">planning</option>
          <option value="bar">bar</option>
          <option value="contract">contract</option>
          <option value="proprietor">proprietor</option>
          <option value="closed">closed</option>
        </select>
      </div>

      {loading && <p>Loading breweries...</p>}
      {error && <p>Error fetching breweries: {error.message}</p>}

      {!loading && !error && (
        <>
          <div className={BreweriesStyle.cardGrid}>
            {currentBreweries.map((brewery, index) => (
              <Card
                key={brewery.id}
                ref={(el) => (cardRefs.current[index] = el)}
                brewery={brewery}
                onSelectBrewery={onSelectBrewery}
                onKeyDown={(e) => handleKeyDown(e, brewery, index)}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Breweries;
