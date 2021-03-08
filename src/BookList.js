import React from "react";

function BookList(props) {
  const { bookList } = props;
  return (
    <div className="bookList">
      <table>
        <thead>
          <tr>
            <td> BookId</td>
            <td> Name</td>
            <td> Author</td>
            <td> Quantity</td>
          </tr>
        </thead>
        <tbody>
          {bookList.map(({ id, name, author, quantity }) => {
            return (
              <tr key={`${name}__${author}`}>
                <td> {id}</td>
                <td> {name}</td>
                <td> {author}</td>
                <td> {quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
