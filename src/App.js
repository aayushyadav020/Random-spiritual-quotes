import React, { useState } from "react";
import quotesData from "./quotesData";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Bhagavad Gita");
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = quotesData[selectedCategory];

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container text-center py-5" style={{ backgroundColor: "#1a1a2e", color: "white", minHeight: "100vh" }}>
      <h1 className="mb-4">Random Krishna consciousness Quotes Generator</h1>
      <p className="mb-5">Explore divine teachings and wisdom from various scriptures!</p>

      {/* Dropdown to select category */}
      <div className="mb-4">
        <select
          className="form-select w-50 mx-auto"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentIndex(0); // Reset index when category changes
          }}
        >
          {Object.keys(quotesData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display quote */}
      <div className="card mx-auto" style={{ maxWidth: "600px", backgroundColor: "#16213e", color: "white" }}>
        <div className="card-body">
          <p className="card-text fs-4">"{quotes[currentIndex]}"</p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button className="btn btn-primary mx-2" onClick={prevQuote}>
          Previous
        </button>
        <button className="btn btn-primary mx-2" onClick={nextQuote}>
          Next
        </button>
      </div>

    </div>
  );
};

export default App;
