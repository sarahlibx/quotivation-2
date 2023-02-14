import React from "react";

function QuoteCard({ quote, addToFavorites }) {
  return (
    <div className='quote-card'>
      <h3>{quote.content}</h3>
      <p>{quote.author}</p>
      <p className='add-favorite' onClick={() => addToFavorites(quote._id)}>
        Add to Favorites
      </p>
    </div>
  );
}

export default QuoteCard;
