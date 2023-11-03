import './searchbar.css'
import React, { useState } from "react";
// import { tvSeries } from "./tvseries";
import {TVSeriesData} from "../../Data/tvseriesdata.js"

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const cardItem = TVSeriesData.filter((series) =>
    series.Name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    if (inputValue.length > 0) {
      setIsExpanded(true);
      setIsCancel(true);
    } else {
      setIsExpanded(false);
      setIsCancel(false);
    }
  };

  const handleClear = () => {
    setSearchValue("");
    setIsCancel(false);
    setIsExpanded(false);
  };

  return (
    <div className={`search-box ${isExpanded ? "expanded" : ""}`}>
      <button
        className={`btn-search ${isCancel ? "hidden" : ""}`}
        onClick={() => setIsExpanded(true)}
      >
        <i className="fas fa-search"></i>
      </button>
      <button
        className={`btn-cancel ${isCancel ? "" : "hidden"}`}
        onClick={handleClear}
      >
        <i className="fas fa-times"></i>
      </button>
      <input
        type="text"
        className={`input-search ${isExpanded ? "expanded" : ""}`}
        placeholder="Search Subtitles..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <div className={`guess ${isExpanded && searchValue !== "" ? "" : "hidden"}`}>
        {cardItem.map((series, index) => (
          <div key={index} className="card">
            <div className="image"></div>
            <div className="details">
              <div className="title">
                <p>{series.Name}</p>
              </div>
              <div className="imdb">
                <p>imdb <span>{series.IMDbRating}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
