import { useState, useEffect } from "react";
import Header from "./components/Header";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes";
import CategoryForm from "./components/quotes/CategoryForm";
import FilteredQuotes from "./components/quotes/FilteredQuotes";
import Message from "./components/Message";
import RandomQuote from "./components/quotes/RandomQuote";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteQuotes, setFavoriteQuotes] = useState(JSON.parse(window.localStorage.getItem("favoriteQuotes")) || []);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [category, setCategory] = useState("all");
  const [randomQuote, setRandomQuote] = useState("");
  const [allCategories, setAllCategories] = useState(["all"]);

  const MAXFAVES = 3;

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.quotable.io/quotes");
      const data = await response.json();
      const results = data.results;
      setQuotes(results);
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
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [quotes]);

  useEffect(() => {
    const quoteCategories = quotes.map((quote) => [...quote.tags]);
    const catObj = {};
    for (let cat of quoteCategories) {
      for (let item of cat) {
        catObj[item] = item;
      }
    }
    setAllCategories(["all", ...Object.values(catObj)]);
  }, [quotes]);

  useEffect(() => {
    window.localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAnotherRandomQuoteClick = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const removeFavoriteQuote = (quoteId) => {
    const updatedFavorites = favoriteQuotes.filter((quote) => quote._id !== quoteId);
    setFavoriteQuotes(updatedFavorites);
  };

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find((quote) => quote._id === quoteId);
    if (favoriteQuotes.length >= MAXFAVES) {
      setShowMessage(true);
      setMessageText("Max number of Favorite Quotes reached. Please delete one to add another!");
    } else {
      const existingQuote = favoriteQuotes.find((quote) => quote._id === quoteId);
      if (existingQuote) {
        setShowMessage(true);
        setMessageText("This quote is already in your favorites! Choose another.");
      } else {
        setShowMessage(true);
        setMessageText("Added to Favorites! :)");
        setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
      }
    }
  };

  return (
    <div className='App'>
      {showMessage && <Message messageText={messageText} setShowMessage={setShowMessage} />}
      <Header />
      <main>
        <FavoriteQuotes favoriteQuotes={favoriteQuotes} maxFaves={MAXFAVES} removeFavoriteQuote={removeFavoriteQuote} />
        {randomQuote && (
          <RandomQuote
            addToFavorites={addToFavorites}
            randomQuote={randomQuote}
            fetchAnotherRandomQuote={handleAnotherRandomQuoteClick}
          />
        )}
        <CategoryForm categories={allCategories} handleCategoryChange={handleCategoryChange} category={category} />
        <FilteredQuotes loading={loading} category={category} quotes={quotes} addToFavorites={addToFavorites} />
      </main>
    </div>
  );
}

export default App;
