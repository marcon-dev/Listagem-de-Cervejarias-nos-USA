import BreweryDetailsStyle from "../../modules/BreweryDetails.module.css";

const BreweryDetails = ({ brewery, onBack }) => {
  return (
    <div className={BreweryDetailsStyle.detailsContainer}>
      <button onClick={onBack} className={BreweryDetailsStyle.backButton}>
        <i class="fa-solid fa-arrow-left"></i>
        <span>Back</span>
      </button>

      <div className={BreweryDetailsStyle.detailsContent}>
        <h2>{brewery.name}</h2>
        <p>Type: {brewery.brewery_type}</p>
        <p>Street: {brewery.street}</p>
        <p>City: {brewery.city}</p>
        <p>State: {brewery.state}</p>
        <p>Postal Code: {brewery.postal_code}</p>
        <p>Country: {brewery.country}</p>

        {brewery.website_url && (
          <p>
            Website:{" "}
            <a
              href={brewery.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {brewery.website_url}
            </a>
          </p>
        )}

        {brewery.phone && <p>Phone: {brewery.phone}</p>}
        {brewery.latitude && brewery.longitude && (
          <p>
            Open in maps:{" "}
            <a
              href={`https://www.google.com/maps?q=${brewery.latitude},${brewery.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {brewery.latitude}, {brewery.longitude}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default BreweryDetails;
