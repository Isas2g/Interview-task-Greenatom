import React, {useEffect} from 'react';
import Button from "./UI/Button/Button";

const Book = ({book, books, setFavoriteBooks, favoriteBooks, isFavorite, setBooks}) => {

    const addToFavorite = () => {
        setFavoriteBooks([...new Set(favoriteBooks.concat(books.find(b => b.id === book.id)))]);
    };

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteBooks));
    }, [favoriteBooks]);

    const removeFromFavorite = () => {
        setFavoriteBooks(favoriteBooks.filter(b => b.id !== book.id));
    };

    const addRating = () => {
        let booksArray = [...books];
        let foundBook = booksArray.findIndex(b => b.id === book.id);
        if (book.rating < 5) {
            booksArray[foundBook].rating += 1;
            setBooks(booksArray);
        }
    }
    const removeRating = () => {
        let booksArray = [...books];
        let foundBook = booksArray.findIndex(b => b.id === book.id);
        if (book.rating > 1) {
            booksArray[foundBook].rating -= 1;
            setBooks(booksArray);
        }
    }

    return (
        <div className={'list-group-item'}>
            <h3>{book.id}. Название: {book.title}</h3>
            <p>Описание: {book.description}</p>
            <p>Издательство: {book.publisher}</p>
            <p>Год издания: {book.yearOfPublish}</p>
            <p>Рейтинг: {book.rating}</p>
            <p>Автор: {book.author}</p>
            <div>
                {isFavorite
                    ? <Button className={'btn btn-danger'} onClick={removeFromFavorite}>Удалить из избранного</Button>
                    : <Button className={'btn btn-success'} onClick={addToFavorite}>Добавить в избраное</Button>
                }
            </div>
            <div className={'btn-group mt-2'}>
                <Button className={'btn btn-success'} onClick={addRating}>+</Button>
                <Button className={'btn btn-warning'} onClick={removeRating}>-</Button>
            </div>
        </div>
    );
};

export default Book;