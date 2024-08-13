import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import './BookForm.css';
import { addBook } from '../../redux/slices/booksSlice';
import booksData from '../../data/books.json';
import createBookWithId from '../../utils/createBookWithId';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    const randomBookWithId = createBookWithId(randomBook);

    dispatch(addBook(randomBookWithId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = createBookWithId({ title: title, author: author });
      dispatch(addBook(book));

      setTitle('');
      setAuthor('');
    }
  };

  const handleAddRandomBookViaAPI = async () => {
    const res = await axios.get('http://localhost:4000/random-book'); // отправка запроса по ссылке, которая передается
    console.log(res);

    try {
      if (res.status === 200 && res.data && res.data.title && res.data.author) {
        dispatch(addBook(createBookWithId(res.data)));
      }
    } catch (error) {
      console.error('Error fetching random book', error);
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button onClick={handleAddRandomBook}>Add random book</button>
        <button onClick={handleAddRandomBookViaAPI}>Add random via API</button>
      </form>
    </div>
  );
};

export default BookForm;
