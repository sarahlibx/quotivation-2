import React from "react";
import CategoryForm from "./CategoryForm";
import Loading from "../Loading";
import QuoteCard from "./QuoteCard";

function FilteredQuotes({ category, loading, quotes, addToFavorites }) {
  const filteredQuotes = category !== "all" ? quotes.filter((quote) => quote.tags.includes(category)) : quotes;

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <div className='quotes'>
        <p>
          You've got {filteredQuotes.length} {category !== "all" ? category : "great"}{" "}
          {filteredQuotes.length === 1 ? "quote" : "quotes"}!
        </p>
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote._id} quote={quote} addToFavorites={addToFavorites} />
        ))}
      </div>
    </section>
  );
}

export default FilteredQuotes;
