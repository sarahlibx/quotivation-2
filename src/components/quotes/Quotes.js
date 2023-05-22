import React from "react";
import QuoteCard from "./QuoteCard";

function Quotes({ filteredQuotes, addToFavorites }) {
  return (
    <section>
      <div className='quotes'>
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} />
        ))}
      </div>
    </section>
  );
}

export default Quotes;
