import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import BookForm from "./BookForm";
import "./style.css";

const defaultBookList = [
  {
    id: 1,
    name: "The Last King!",
    author: "RR Martin",
    quantity: 10
  }
];

export default function App() {
  const [showAddForm, setAddForm] = useState(false);
  const [bookList, setBookList] = useState(defaultBookList);
  const [searchText, setSearchText] = useState("");
  const addToList = newBook => {
    const updatedBookList = [...bookList, newBook];
    setBookList(updatedBookList);
  };
  const filteredList = bookList.filter(
    book =>
      book.name.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <SearchBar setAddForm={setAddForm} setSearchText={setSearchText} />
      {showAddForm && (
        <BookForm addToList={addToList} totalBooks={bookList.length} />
      )}
      <hr />
      <BookList bookList={filteredList} />
      <hr />
    </div>
  );
}

// redux
// flat structure

// Features -=
// BookLib
// connect
// actions.js
// reducer.js
// components
// SearchBar
// AddForm
// BookLib-containter.jsx
// index.js -- redux connect
