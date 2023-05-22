import React from "react";
import QuoteCard from "./QuoteCard";

const RandomQuote = ({ randomQuote, displayRandomQuote, addToFavorites }) => (
  <section className='random-quote'>
    <header>
      <h3>Random Quote</h3>
      <button onClick={displayRandomQuote}>Another!</button>
    </header>
    <QuoteCard quote={randomQuote} addToFavorites={addToFavorites} />
  </section>
);

export default RandomQuote;
