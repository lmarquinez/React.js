import Book from "./components/Book";
import books from "./db/books.json";

const App = () => {
  return (
    <div>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
};

export default App;
