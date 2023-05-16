import React from "react";

function QuoteCard({ quote }) {
  return (
    <div className='quote-card'>
      <h3>{quote.text}</h3>
      <p>{quote.author}</p>
    </div>
  );
}

export default QuoteCard;
