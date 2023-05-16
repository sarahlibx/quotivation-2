import React from "react";
import QuoteCard from "./QuoteCard";

function Quotes({ filteredQuotes }) {
  return (
    <section>
      <div className='quotes'>
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </section>
  );
}

export default Quotes;
