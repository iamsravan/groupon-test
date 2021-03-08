import React from "react";

function SearchBar(props) {
  const { setAddForm, setSearchText } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Sarach Book .."
        onChange={e => setSearchText(e.target.value)}
      />
      <button onClick={() => setAddForm(true)}> Add</button>
    </div>
  );
}

export default SearchBar;
