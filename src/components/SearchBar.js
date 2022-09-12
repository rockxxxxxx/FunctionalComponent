import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

export default function SearchBar() {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    if (term) {
      search();
    }
  }, [term]);

  const renderedResult = results.map((result) => {
    return (
      <>
        <List title={result.title} desc={result.snippet} val={result.pageid} />
        <br />
      </>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      {renderedResult}
      <br />
    </div>
  );
}
