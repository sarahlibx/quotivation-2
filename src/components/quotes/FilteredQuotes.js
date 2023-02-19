import React from "react";
import CategoryForm from "./CategoryForm";
import Loading from "../Loading";
import QuoteCard from "./QuoteCard";

function FilteredQuotes({ category, loading, quotes, addToFavorites }) {
  const filteredQuotes = category !== "all" ? quotes.filter((quote) => quote.tags.includes(category)) : quotes;

  return (
    <section>
      <div className='quotes'>
        {loading ? (
          <Loading />
        ) : (
          filteredQuotes.map((quote) => <QuoteCard key={quote._id} quote={quote} addToFavorites={addToFavorites} />)
        )}
      </div>
    </section>
  );
}

export default FilteredQuotes;
