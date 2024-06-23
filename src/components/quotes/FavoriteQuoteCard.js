import React from "react";

const FavoriteQuoteCard = ({quote, removeFromFavorites, listPosition}) => {

return (
    <li className="quote-card" data-list-position={listPosition}>
        <span className="close-quote"
        onClick={() =>removeFromFavorites(quote.id)}>
            X
        </span>
        <h3>{quote.text}</h3>
        <p>{quote.author}</p>
    </li>
)};

export default FavoriteQuoteCard;