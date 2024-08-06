import { useSelector } from 'react-redux';

import './BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <div>
                {++i}. <strong>{book.title}</strong> by {book.author}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
