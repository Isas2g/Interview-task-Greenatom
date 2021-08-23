import React, {useState} from 'react';

const SearchForm = ({setShownBooks, books}) => {

    const [search, setSearch] = useState('');

    const searchBooks = (e) => {
        e.preventDefault();
        setShownBooks(books.filter(book => book.title.toLowerCase().includes(search.toLowerCase())));
        setSearch('');
    };

    return (
        <div>
            <form onSubmit={searchBooks} className={'form-inline'}>
                <input
                    className={'form-control'}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" />
                <button className={'mt-2 btn btn-primary'}>Найти</button>
            </form>
        </div>
    );
};

export default SearchForm;