import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Loader } from "react-feather";
import CategoryForm from "./components/quotes/CategoryForm";
import RandomQuote from "./components/quotes/RandomQuote";
import Quotes from "./components/quotes/Quotes";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");
  const [randomQuote, setRandomQuote] = useState("");
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
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
      console.log("Max number of Favorite Quotes reached. Please delete one to add another!");
    } else {
      const existingQuote = favoriteQuotes.find((quote) => quote.id === quoteId);
      if (existingQuote) {
        console.log("This quote is already in your favorites! Choose another.");
      } else {
        console.log("Added to Favorites! :)");
        setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
      }
    }
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <section className='quotes favorite-quotes'>
          {favoriteQuotes.length === 0 ? (
            <h2>Add up to {MAXFAVES} favorite quotes here!</h2>
          ) : (
            <h2>Favorite Quotes (max: {MAXFAVES})</h2>
          )}
          {JSON.stringify(favoriteQuotes)}
        </section>
        {randomQuote && <RandomQuote randomQuote={randomQuote} displayRandomQuote={displayRandomQuote} />}
        <CategoryForm categories={categories} handleCategoryChange={handleCategoryChange} category={category} />
        {loading ? <Loader /> : <Quotes filteredQuotes={filteredQuotes} category={category} addToFavorites={addToFavorites} />}
      </main>
    </div>
  );
}

export default App;
