import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Loader } from "react-feather";
import FilteredQuotes from "./components/quotes/FilteredQuotes";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const quotesUrl =
    "https://gist.githubusercontent.com/redrambles/d50714387b93d7fe3e78b346c158719e/raw/254337559896fd3b8e288e394f337ac098ed5cbb/quotes.js";

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

  return (
    <div className='App'>
      <Header />
      {loading ? <Loader /> : <FilteredQuotes filteredQuotes={quotes} />}
      <main></main>
    </div>
  );
}

export default App;
