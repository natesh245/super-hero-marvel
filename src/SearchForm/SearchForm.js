import React from "react";

import "./SearchForm.css";

function SearchForm(props) {
  return (
    <div className="form">
      <form onSubmit={props.SubmitHandler}>
        <input type="text" placeholder="search.." className="text-in" />
        <input type="submit" value="Search" className="submit-in" />
      </form>
    </div>
  );
}

export default SearchForm;
