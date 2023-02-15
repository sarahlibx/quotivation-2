import { useState, useEffect } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import Loading from "./components/Loading";
import FavoriteQuoteCard from "./components/FavoriteQuoteCard";
import FilterByCategory from "./components/FilterByCategory";
import Message from "./components/Message";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteQuotes, setFavoriteQuotes] = useState(JSON.parse(window.localStorage.getItem("favoriteQuotes")) || []);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const maxFaves = 3;
  const categories = ["all", "sports", "competition", "humorous"];

  const fetchQuotes = async (category = "all") => {
    try {
      setLoading(true);
      const response = await fetch("https://api.quotable.io/quotes");
      const data = await response.json();
      const results = data.results;
      if (category !== "all") {
        const filteredResults = results.filter((result) => result.tags.includes(category));
        setQuotes(filteredResults);
      } else {
        setQuotes(results);
      }
    } catch (error) {
      console.log("There was an error", error);
      setMessageText("Sorry - no Quotes available. Check your online connection.");
      setShowMessage(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]);

  const removeFavoriteQuote = (quoteId) => {
    const updatedFavorites = favoriteQuotes.filter((quote) => quote._id !== quoteId);
    setFavoriteQuotes(updatedFavorites);
  };

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find((quote) => quote._id === quoteId);
    if (favoriteQuotes.length >= maxFaves) {
      setShowMessage(true);
      setMessageText("Max number of Favorite Quotes reached. Please delete one to add another!");

      console.log(messageText);
      return;
    } else {
      const existingQuote = favoriteQuotes.find((quote) => quote._id === quoteId);
      if (existingQuote) {
        setShowMessage(true);
        setMessageText("This quote is already in your favorites! Choose another.");
      } else {
        setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
      }
    }
  };

  // TODO: Add a decent loading gif thingy

  return (
    <div className='App'>
      {showMessage && <Message messageText={messageText} setShowMessage={setShowMessage} />}
      <Header />
      <main>
        <section className='quotes favorite-quotes'>
          {favoriteQuotes.length === 0 ? (
            <h2>Add up to three favorite quotes here!</h2>
          ) : (
            <h2>Favorite Quotes (max: {maxFaves})</h2>
          )}
          {favoriteQuotes.length > 0 &&
            favoriteQuotes.map((quote) => (
              <FavoriteQuoteCard key={quote._id} quote={quote} removeFavoriteQuote={removeFavoriteQuote} />
            ))}
        </section>

        {loading ? (
          <Loading />
        ) : (
          <>
            <FilterByCategory fetchQuotes={fetchQuotes} categories={categories} />
            <p>You've got {quotes.length} quotes!</p>
            <section className='quotes'>
              {quotes.map((quote) => (
                <QuoteCard key={quote._id} quote={quote} addToFavorites={addToFavorites} />
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
