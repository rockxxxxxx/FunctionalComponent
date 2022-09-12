import React, { useEffect, useState } from "react";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  console.log("I run every time");
  useEffect(() => {
    console.log("I run only one time");
  }, []);
  return (
    <>
      <div className="ui search container">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search Wiki..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    </>
  );
}
