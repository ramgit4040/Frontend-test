import React, { useEffect, useState } from "react";

import { fetchSuggestions } from "./utils/api";

import "./Autocomplete.css";

function Autocomplete(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null)

  useEffect(() => {
    const delay = setTimeout( () => {
      if(searchTerm) {
        setLoading(true)
        fetchSuggestions(searchTerm).then((_suggestions) => {
        setSuggestions(_suggestions)
        setLoading(false)
        }
      ).catch((error) => {
        setError(error.message)
      })
      } else {
        setSuggestions([])
        
      }
    }, 1000)
    return () => clearTimeout(delay)
  }, [searchTerm]);

  const handleClick = (itemId) => {
    console.log('sfdsdf',itemId)
    props.getProductId(itemId)
    setSearchTerm("")
  }
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        className="search-box"
        placeholder="Search for a product"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* TODO: render search suggestions */}
      {!error ? 
      !loading ?
        <ul className = "search-list">
          {suggestions.map((item,index) => {
            if(index < 10) {
              return <li 
                key = {item.id}
                onClick = {() => handleClick(item.id)}
                tabIndex = "0">{item.title}
              </li>
            }
          })
          }
      </ul>
      : <p>Loading</p>
      : <h1>{error}</h1>}
     
    </div>
  );
}

export default Autocomplete;
