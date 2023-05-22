import React from "react";

function QuoteCard({ quote, addToFavorites }) {
  return (
    <div className='quote-card'>
      <h3>{quote.text}</h3>
      <p>{quote.author}</p>
      <p className='add-favorite' onClick={() => addToFavorites(quote.id)}>
        Add to Favorites
      </p>
    </div>
  );
}

export default QuoteCard;
