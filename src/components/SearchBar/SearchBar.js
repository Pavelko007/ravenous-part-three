import React, {useState} from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleSortByChange = (clickedSortBy) =>{  
    console.log(clickedSortBy);
    setSortBy(clickedSortBy);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      //set li active attribute to true if sortByOptionValue is equal to sortBy
      return <li 
      className={sortByOptionValue===sortBy ? styles.active : ""} 
      onClick={()=>handleSortByChange(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange}/>
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
