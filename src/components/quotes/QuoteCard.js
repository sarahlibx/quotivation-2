import React from "react";
import { Heart } from "react-feather";

function QuoteCard({ quote, addToFavorites, favoriteQuotes }) {
  const alreadyFavorite = favoriteQuotes && favoriteQuotes.find((favorite) => favorite.id === quote.id);

  const faveStyle = alreadyFavorite ? "#931c1d" : "grey";
  console.log(faveStyle);

  return (
    <div className='quote-card'>
      <h3>{quote.text}</h3>
      <p>{quote.author}</p>
      <p className='add-favorite' onClick={() => addToFavorites(quote.id)}>
        <Heart style={{ color: faveStyle }} />
      </p>
    </div>
  );
}

export default QuoteCard;
