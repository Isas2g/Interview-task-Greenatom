import React from 'react';
import Book from "./Book";

const BooksList = ({books, setFavoriteBooks, favoriteBooks, isFavorite, setBooks}) => {
    return (
        <div className={'list-group list-group-flush'}>
            {books.map((book) =>
                <Book
                    setFavoriteBooks={setFavoriteBooks}
                    favoriteBooks={favoriteBooks}
                    books={books}
                    key={book.id}
                    book={book}
                    isFavorite={isFavorite}
                    setBooks={setBooks}
                />
            )}
        </div>
    );
};

export default BooksList;