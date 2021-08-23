import React, {useEffect, useState} from 'react';
import BooksList from "../components/BooksList";
import {getBooks} from "../utils/getBooks";

const Favorite = () => {

    const [books, setBooks] = useState([]);
    const [shownBooks, setShownBooks] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState(localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : []
        );

    useEffect(() => {
        getBooks(setBooks, setShownBooks);
    }, []);

    return (
        <div className={'container'}>
            <h1>Избранное</h1>
            <BooksList
                books={favoriteBooks}
                favoriteBooks={favoriteBooks}
                setFavoriteBooks={setFavoriteBooks}
                isFavorite={true}
                setBooks={setBooks}
            />
        </div>
    );
};

export default Favorite;