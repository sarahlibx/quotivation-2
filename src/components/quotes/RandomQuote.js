import React from "react";
import QuoteCard from "./QuoteCard";

const RandomQuote = ({ randomQuote, displayRandomQuote, addToFavorites, favoriteQuotes }) => (
  <section className='random-quote'>
    <header>
      <h3>Random Quote</h3>
      <button onClick={displayRandomQuote}>Fetch a random quote</button>
    </header>
    <QuoteCard key={randomQuote.id} quote={randomQuote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />
  </section>
);

export default RandomQuote;
