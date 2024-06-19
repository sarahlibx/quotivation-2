import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loader } from "react-feather";
import Quotes from "./components/quotes/Quotes";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];

  const maxFaves = 3;

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

  const filteredQuotes = category !== "All" ? quotes.filter((quote) => quote.categories.includes(category)) : quotes;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find((quote) => quote.id === quoteId);

    const alreadyFavorite = favoriteQuotes.find((favorite) => favorite.id === selectedQuote.id);
    console.log(alreadyFavorite);

    if (alreadyFavorite) {
      console.log("You already favorited this quote!");
    } else if (favoriteQuotes.length < maxFaves) {
      console.log("Added to Favorites!");
      setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
    } else {
      console.log("Max number of favorite quotes reached. Remove one to add another.");
    }
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <section className='favorite-quotes'>
          <div className='wrapper quotes'>
            <h3>Top 3 favorite quotes</h3>
            {favoriteQuotes.length > 0 && JSON.stringify(favoriteQuotes)}

            <div className='favorite-quotes-description'>
              <p>
                You can add up to three favorites by selecting from the options below.
                <br />
                Once you choose, they will appear here.
              </p>
            </div>
          </div>
        </section>

        {loading ? (
          <Loader />
        ) : (
          <Quotes
            filteredQuotes={filteredQuotes}
            addToFavorites={addToFavorites}
            category={category}
            categories={categories}
            handleCategoryChange={handleCategoryChange}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;