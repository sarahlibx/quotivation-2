import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
  const [category, setCategory] = useState("All");
  const [randomQuote, setRandomQuote] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [favoriteQuotes, setFavoriteQuotes] = useState(JSON.parse(window.localStorage.getItem("favoriteQuotes")) || []);
  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/61eba3576351b30987c4af1fadb2619af5fc4064/quotes.js";
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];

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

  const filteredQuotes = category !== "All" ? quotes.filter((quote) => quote.categories.includes(category)) : quotes;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const displayRandomQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find((quote) => quote.id === quoteId);
    const alreadyFavorite = favoriteQuotes.find((favorite) => favorite.id === selectedQuote.id);

    if (alreadyFavorite) {
      console.log("already in favorites");
      removeFromFavorites(quoteId);
    } else {
      if (favoriteQuotes.length < MAXFAVES) {
        // setMessageText("Added to Favorites! :)");
        // setShowMessage(true);
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
        {loading ? (
          <Loader />
        ) : (
          <Quotes
            filteredQuotes={filteredQuotes}
            category={category}
            addToFavorites={addToFavorites}
            favoriteQuotes={favoriteQuotes}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
