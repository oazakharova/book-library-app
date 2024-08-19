import './App.css';
import BookList from './components/BookList/BookList';
import BookForm from './components/BookForm/BookForm';
import Filter from './components/Filter/Filter';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <Error />
      <footer className="app-footer">
        <h4> &copy; 2024 - Book Library App</h4>
      </footer>
    </div>
  );
}

export default App;
