import React from "react";
import QuoteCard from "./QuoteCard";

function FilteredQuotes({ category, filteredQuotes, addToFavorites }) {
  return (
    <section>
      <div className='quotes'>
        <p>
          You've got {filteredQuotes.length} {category !== "all" ? category : "great"}{" "}
          {filteredQuotes.length === 1 ? "quote" : "quotes"}!
        </p>
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} />
        ))}
      </div>
    </section>
  );
}

export default FilteredQuotes;
