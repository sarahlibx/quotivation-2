import React, { useState, useEffect } from "react";

function FavoriteQuoteCard({ quote, removeFavoriteQuote }) {
  const [confirmCopy, setConfirmCopy] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setConfirmCopy(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [confirmCopy]);

  return (
    <div className='quote-card'>
      {confirmCopy && <p className='share-the-love'>Copied quote! Share the love!!</p>}
      <span className='close-quote' onClick={() => removeFavoriteQuote(quote._id)}>
        X
      </span>
      <h3
        onClick={() => {
          navigator.clipboard.writeText(quote.content);
          setConfirmCopy(true);
        }}
      >
        {quote.content}
      </h3>
      <p>{quote.author}</p>
    </div>
  );
}

export default FavoriteQuoteCard;
