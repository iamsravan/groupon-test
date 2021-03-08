import React, { useState } from "react";

function BookForm(props) {
  const { totalBooks, addToList } = props;
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState(0);

  const addBook = () => {
    const newBookDetails = {
      id: totalBooks + 1,
      name,
      author,
      quantity
    };
    addToList(newBookDetails);
    setAuthor("");
    setName("");
    setQuantity(0);
  };

  return (
    <div className="book-form">
      <h3>Add / Edit Book </h3>
      <div>
        <label>
          Name:
          <input
            className="Name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input
            className="Author"
            onChange={e => setAuthor(e.target.value)}
            value={author}
          />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input
            className="Quantity"
            onChange={e => setQuantity(e.target.value)}
            value={quantity}
          />
        </label>
      </div>
      <div className="actions">
        <button onClick={addBook}> Add</button>
        <button> Clear </button>
      </div>
    </div>
  );
}

export default BookForm;
