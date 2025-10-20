import { useState, useEffect, useMemo } from "react";

const API_URL = "https://api.openbrewerydb.org/v1/breweries?per_page=50";
const ITEMS_PER_PAGE = 15;

/**
 * @typedef {object} Brewery
 * @property {string} id - The ID of the brewery.
 * @property {string} name - The name of the brewery.
 * @property {string} brewery_type - The type of the brewery (e.g., micro, regional).
 * @property {string} city - The city where the brewery is located.
 * @property {string} state - The state where the brewery is located.
 * @property {string} country - The country where the brewery is located.
 */

/**
 * @typedef {object} UseBreweriesReturn
 * @property {Brewery[]} currentBreweries - The breweries to be displayed on the current page.
 * @property {number} currentPage - The current active page number.
 * @property {number} totalPages - The total number of pages available.
 * @property {boolean} loading - A boolean indicating if the breweries are currently being fetched.
 * @property {Error|null} error - An error object if the fetch failed, otherwise null.
 * @property {function(number): void} handlePageChange - Function to set the current page.
 */

/**
 * Custom hook for fetching, filtering, and paginating brewery data.
 *
 * @param {string} filter - The brewery type to filter the list by (e.g., "micro", "regional").
 * @returns {UseBreweriesReturn} An object containing the paginated and filtered data, loading/error states, and a page change handler.
 */
const useBreweries = (filter) => {
  const [breweries, setBreweries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect to fetch the initial list of breweries from the API.
  // This runs only once when the hook is first used.
  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBreweries(data);
        
        setError(null);
      } catch (e) {
        console.error("Error fetching breweries:", e);
        setError(e);
      } finally { setLoading(false); }
    };

    fetchBreweries();
  }, []);

  // Memoized calculation to filter breweries based on the provided filter.
  // This recalculates only when the 'filter' or the main 'breweries' list changes.
  const filteredBreweries = useMemo(() => {
    if (!filter) {
      return breweries;
    }
    return breweries.filter((brewery) => brewery.brewery_type === filter);
  }, [filter, breweries]);

  // Effect to reset the current page to 1 whenever the filter changes.
  useEffect(() => { setCurrentPage(1); }, [filter]);

  // Memoized calculation for the total number of pages.
  // Recalculates only when the list of filtered breweries changes.
  const totalPages = useMemo(() => {
    return Math.ceil(filteredBreweries.length / ITEMS_PER_PAGE);
  }, [filteredBreweries]);

  // Memoized calculation for the breweries to display on the current page.
  // Recalculates when the filtered list or the current page changes.
  const currentBreweries = useMemo(() => {
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    return filteredBreweries.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredBreweries, currentPage]);

  return {
    currentBreweries, currentPage,
    totalPages, loading,
    error, handlePageChange: setCurrentPage,
  };
};

export default useBreweries;