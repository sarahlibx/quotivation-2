import React from "react";
import { Heart } from "react-feather";

function QuoteCard({ quote, addToFavorites, favoriteQuotes, quoteOfTheDay = false }) {
  const alreadyFavorite = favoriteQuotes && favoriteQuotes.find((favorite) => favorite.id === quote.id);

  const faveStyle = alreadyFavorite ? "#931c1d" : "grey";

  return (
    <article className={`quote-card ${quoteOfTheDay ? "quote-of-the-day" : ""}`}>
      {quoteOfTheDay && <h2>Quote of the day</h2>}
      <div>
        <p className='categories'>
          {quote.categories.map((category) => (
            <span className='category' key={category}>
              {category}
            </span>
          ))}
        </p>
        <h3>{quote.text}</h3>
      </div>
      <p>{quote.author}</p>
      <p className='add-favorite' onClick={() => addToFavorites(quote.id)}>
        <Heart style={{ color: faveStyle }} />
      </p>
    </article>
  );
}

export default QuoteCard;
