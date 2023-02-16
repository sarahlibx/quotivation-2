import React from "react";

function FavoriteQuoteCard({ quote, removeFavoriteQuote }) {
  return (
    <div className='quote-card'>
      <span className='close-quote' onClick={() => removeFavoriteQuote(quote._id)}>
        X
      </span>
      <h3>{quote.content}</h3>
      <p>{quote.author}</p>
    </div>
  );
}

export default FavoriteQuoteCard;
