import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Loader } from "react-feather";
import CategoryForm from "./components/quotes/CategoryForm";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes";
import RandomQuote from "./components/quotes/RandomQuote";
import Quotes from "./components/quotes/Quotes";
import Message from "./components/Message";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");
  const [randomQuote, setRandomQuote] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [favoriteQuotes, setFavoriteQuotes] = useState(JSON.parse(window.localStorage.getItem("favoriteQuotes") || []));
  const quotesUrl =
    "https://gist.githubusercontent.com/redrambles/d50714387b93d7fe3e78b346c158719e/raw/254337559896fd3b8e288e394f337ac098ed5cbb/quotes.js";
  const categories = ["all", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];

  const MAXFAVES = 3;

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(quotesUrl);
      const results = await response.json();

      setQuotes(results);
    } catch (error) {
      console.log("There was an error", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    displayRandomQuote();
  }, [quotes]);

  useEffect(() => {
    window.localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]);

  const filteredQuotes = category !== "all" ? quotes.filter((quote) => quote.categories.includes(category)) : quotes;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const displayRandomQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find((quote) => quote.id === quoteId);
    if (favoriteQuotes.length >= MAXFAVES) {
      setShowMessage(true);
      setMessageText("Max number of Favorite Quotes reached. Please delete one to add another!");
    } else {
      const existingQuote = favoriteQuotes.find((quote) => quote.id === quoteId);
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

  const removeFromFavorites = (quoteId) => {
    const updatedFavorites = favoriteQuotes.filter((quote) => quote.id !== quoteId);
    setFavoriteQuotes(updatedFavorites);
  };

  const removeMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className='App'>
      {showMessage && <Message messageText={messageText} removeMessage={removeMessage} />}
      <Header />
      <main>
        <FavoriteQuotes favoriteQuotes={favoriteQuotes} maxFaves={MAXFAVES} removeFromFavorites={removeFromFavorites} />
        {randomQuote && (
          <RandomQuote randomQuote={randomQuote} displayRandomQuote={displayRandomQuote} addToFavorites={addToFavorites} />
        )}
        <CategoryForm categories={categories} handleCategoryChange={handleCategoryChange} category={category} />
        {loading ? <Loader /> : <Quotes filteredQuotes={filteredQuotes} category={category} addToFavorites={addToFavorites} />}
      </main>
    </div>
  );
}

export default App;
