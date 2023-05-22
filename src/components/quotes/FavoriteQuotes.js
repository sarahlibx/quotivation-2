import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

function FavoriteQuotes({ favoriteQuotes, maxFaves, removeFromFavorites }) {
  return (
    <section className='quotes favorite-quotes'>
      {favoriteQuotes.length === 0 ? (
        <h3>Add up to {maxFaves} favorite quotes here!</h3>
      ) : (
        <h3>Favorite Quotes (max: {maxFaves})</h3>
      )}
      {favoriteQuotes.length > 0 &&
        favoriteQuotes.map((quote) => (
          <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites} />
        ))}
    </section>
  );
}

export default FavoriteQuotes;
