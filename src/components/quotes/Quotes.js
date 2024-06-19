import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

function Quotes({ filteredQuotes, category, categories, handleCategoryChange }) {
  return (
    <section className='all-quotes'>
      <div className='quotes wrapper'>
        <div className='category-header'>
          <p>Browse through your collection of quotes.</p>
          <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange} />
        </div>

        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </section>
  );
}

export default Quotes;