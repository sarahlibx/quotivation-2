import { useState, useEffect } from "react";
import Header from "./components/Header";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes";
import CategoryForm from "./components/quotes/CategoryForm";
import FilteredQuotes from "./components/quotes/FilteredQuotes";
import Message from "./components/Message";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteQuotes, setFavoriteQuotes] = useState(JSON.parse(window.localStorage.getItem("favoriteQuotes")) || []);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [category, setCategory] = useState("all");

  const maxFaves = 3;
  // TODO I'd like to make this dynamic
  const categories = ["all", "sports", "competition", "humorous"];

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
    window.localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const removeFavoriteQuote = (quoteId) => {
    const updatedFavorites = favoriteQuotes.filter((quote) => quote._id !== quoteId);
    setFavoriteQuotes(updatedFavorites);
  };

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find((quote) => quote._id === quoteId);
    if (favoriteQuotes.length >= maxFaves) {
      setShowMessage(true);
      setMessageText("Max number of Favorite Quotes reached. Please delete one to add another!");
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

  return (
    <div className='App'>
      {showMessage && <Message messageText={messageText} setShowMessage={setShowMessage} />}
      <Header />
      <main>
        <p>You've got {quotes.length} quotes!</p>
        <CategoryForm categories={categories} handleCategoryChange={handleCategoryChange} category={category} />
        <FavoriteQuotes favoriteQuotes={favoriteQuotes} maxFaves={maxFaves} removeFavoriteQuote={removeFavoriteQuote} />
        <FilteredQuotes loading={loading} category={category} quotes={quotes} addToFavorites={addToFavorites} />
      </main>
    </div>
  );
}

export default App;
