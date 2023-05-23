import React from "react";
import QuoteCard from "./QuoteCard";

function Quotes({ filteredQuotes, addToFavorites, category }) {
  return (
    <section>
      <div className='quotes'>
        {
          <p>
            You have {filteredQuotes.length} great {category !== "All" && category}{" "}
            {filteredQuotes.length === 1 ? "quote" : "quotes"}.
          </p>
        }
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} />
        ))}
      </div>
    </section>
  );
}

export default Quotes;
