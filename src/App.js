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
  const quotesUrl =
    "https://gist.githubusercontent.com/redrambles/d50714387b93d7fe3e78b346c158719e/raw/254337559896fd3b8e288e394f337ac098ed5cbb/quotes.js";
  const categories = ["all", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];

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

  return (
    <div className='App'>
      <Header />
      <main>
        {randomQuote && <RandomQuote randomQuote={randomQuote} displayRandomQuote={displayRandomQuote} />}
        <CategoryForm categories={categories} handleCategoryChange={handleCategoryChange} category={category} />
        {loading ? <Loader /> : <Quotes filteredQuotes={filteredQuotes} category={category} />}
      </main>
    </div>
  );
}

export default App;
