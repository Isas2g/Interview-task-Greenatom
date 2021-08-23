import React, {useEffect, useState} from 'react';
import SearchForm from "../components/SearchForm";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import BooksList from "../components/BooksList";
import {getBooks} from "../utils/getBooks";

const Main = () => {

    const [books, setBooks] = useState([]);
    const [shownBooks, setShownBooks] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState([]);

    useEffect(() => {
        getBooks(setBooks, setShownBooks);
    }, []);


    return (
        <div className={'container'}>
            <h1>Электронная библиотека</h1>
            <SearchForm books={books} setShownBooks={setShownBooks} />
            <Filters books={books} setShownBooks={setShownBooks} />
            <Sort books={books} setShownBooks={setShownBooks} />
            <BooksList
                books={shownBooks}
                isFavorite={false}
                favoriteBooks={favoriteBooks}
                setFavoriteBooks={setFavoriteBooks}
                setBooks={setBooks}
            />
        </div>
    );
};

export default Main;