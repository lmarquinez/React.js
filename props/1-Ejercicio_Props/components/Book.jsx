export const Book = ({ book }) => {
  return (
    <div>
      {book.title} - {book.author}
    </div>
  );
};

export default Book;
