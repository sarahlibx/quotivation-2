import React from "react";
import QuoteCard from "./QuoteCard";

const RandomQuote = ({ randomQuote, displayRandomQuote }) => (
  <section className='random-quote'>
    <header>
      <h3>Random Quote</h3>
      <button onClick={displayRandomQuote}>Another!</button>
    </header>
    <QuoteCard quote={randomQuote} />
  </section>
);

export default RandomQuote;
