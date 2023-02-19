import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";
import Loading from "../Loading";

function FavoriteQuotes({ favoriteQuotes, maxFaves, removeFavoriteQuote, loading }) {
  if (loading) {
    return <Loading />;
  }
  return (
    <section className='quotes favorite-quotes'>
      {favoriteQuotes.length === 0 ? (
        <h2>Add up to {maxFaves} favorite quotes here!</h2>
      ) : (
        <h2>Favorite Quotes (max: {maxFaves})</h2>
      )}
      {favoriteQuotes.length > 0 &&
        favoriteQuotes.map((quote) => (
          <FavoriteQuoteCard key={quote._id} quote={quote} removeFavoriteQuote={removeFavoriteQuote} />
        ))}
    </section>
  );
}

export default FavoriteQuotes;
