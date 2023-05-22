import React from "react";

function FavoriteQuoteCard({ quote }) {
  return (
    <div className='quote-card'>
      <span className='close-quote'>X</span>
      <h3>{quote.text}</h3>
      <p>{quote.author}</p>
    </div>
  );
}

export default FavoriteQuoteCard;
