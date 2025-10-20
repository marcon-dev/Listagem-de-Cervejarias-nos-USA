import React, { forwardRef } from "react";
import CardStyles from "../../modules/Card.module.css";

const Card = forwardRef(({ brewery, onSelectBrewery, onKeyDown }, ref) => {
  return (
    <div
      ref={ref}
      className={CardStyles.card}
      onClick={() => onSelectBrewery(brewery)}
      onKeyDown={onKeyDown}
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <div className={CardStyles.cardContent}>
        <h3>{brewery.name}</h3>
        <p>
          {brewery.street}, {brewery.city}, {brewery.state} -{" "}
          {brewery.postal_code}
        </p>
        <p>{brewery.country}</p>
      </div>
      <div className={CardStyles.cardFooter}>
        <span className={CardStyles[brewery.brewery_type] || CardStyles.micro}>
          {brewery.brewery_type}
        </span>
      </div>
    </div>
  );
});

export default Card;
