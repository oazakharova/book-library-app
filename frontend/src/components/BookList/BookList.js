import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';

import './BookList.css';
import { deleteBook, toggleFavorive } from '../../redux/books/actionCreators';
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoritesFilter,
} from '../../redux/slices/filterSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoritesOnlyFilter = useSelector(selectFavoritesFilter);

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  const handleToggleFavorive = (bookId) => {
    dispatch(toggleFavorive(bookId));
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesFavorites = favoritesOnlyFilter ? book.isFavorite : true;

    return matchesTitle && matchesAuthor && matchesFavorites;
  });

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, 'gi');
    console.log(text.split(regex));

    return text.split(regex).map((partOfText, i) => {
      if (partOfText.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {partOfText}
          </span>
        );
      }
      return partOfText;
    });
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {filteredBooks.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}.{' '}
                <strong>{highlightMatch(book.title, titleFilter)}</strong> by{' '}
                {highlightMatch(book.author, authorFilter)}
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorive(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>

                <button onClick={() => handleDeleteBook(book.id)}>x</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
