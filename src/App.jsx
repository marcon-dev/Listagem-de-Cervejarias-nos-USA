import { useState } from "react";
import "./App.css";
import headerStyles from "./modules/Header.module.css";
import Breweries from "./components/Breweries/Breweries";
import BreweryDetails from "./components/BreweryDetails/BreweryDetails";

const App = () => {
  const [selectedBrewery, setSelectedBrewery] = useState(null);
  const [filter, setFilter] = useState("micro");

  const handleSelectBrewery = (brewery) => setSelectedBrewery(brewery);
  const handleBack = () => setSelectedBrewery(null);
  const handleFilterChange = (newFilter) => setFilter(newFilter);

  return (
    <div className="App">
      <header className={headerStyles.header}>
        <div className={headerStyles.headerContent}>
          <h1>Breweries</h1>
          <p>A breweries list by Open Brewery DB</p>
        </div>
      </header>
      {selectedBrewery ? (
        <BreweryDetails brewery={selectedBrewery} onBack={handleBack} />
      ) : (
        <Breweries
          onSelectBrewery={handleSelectBrewery}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
      )}
    </div>
  );
};

export default App;
