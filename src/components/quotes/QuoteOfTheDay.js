import React from "react";
import QuoteCard from "./QuoteCard";

const QuoteOfTheDay = ({ quoteOfTheDay, displayRandomQuote, addToFavorites, favoriteQuotes }) => (
  <section className='random-quote'>
    <button onClick={displayRandomQuote}>Fetch a fresh quote</button>
    <QuoteCard
      key={quoteOfTheDay.id}
      quote={quoteOfTheDay}
      addToFavorites={addToFavorites}
      favoriteQuotes={favoriteQuotes}
      quoteOfTheDay={true}
    />
  </section>
);

export default QuoteOfTheDay;
