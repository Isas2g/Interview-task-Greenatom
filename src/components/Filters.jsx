import React, {useEffect, useState} from 'react';
import Select from "./UI/Select/Select";

const Filters = ({books, setShownBooks}) => {

    let [filterPublishers, setFilterPublishers] = useState([]),
        [filterAuthors, setFilterAuthors] = useState([]),
        [filterYearsOfPublish, setFilterYearsOfPublish] = useState([]);

    const [filters, setFilters] = useState({
        publisher: '',
        author: '',
        yearOfPublish: ''
    });

    const filtersCreator = (booksArray) => {
        const publishers = [],
            authors = [],
            yearsOfPublish = [];

        for (let i = 0; i < booksArray.length; i++) {
            publishers.push(booksArray[i].publisher);
            authors.push(booksArray[i].author);
            yearsOfPublish.push(booksArray[i].yearOfPublish);
        }

        setFilterPublishers([...(new Set(publishers))]);
        setFilterAuthors([...(new Set(authors))]);
        setFilterYearsOfPublish([...(new Set(yearsOfPublish))]);

    };

    const filterSubmitHandler = (e) => {
        e.preventDefault();

        setShownBooks(books.filter(book => (book.publisher.includes(filters.publisher))
            && (book.author.includes(filters.author))
            && (book.yearOfPublish.toString().includes(filters.yearOfPublish.toString()))
        ));
    };

    const dropFiltersHandler = (e) => {
        e.preventDefault();
        setFilters({
            publisher: '',
            author: '',
            yearOfPublish: ''
        });
        setShownBooks(books);

    };

    useEffect(() => {
        filtersCreator(books);
    }, [books]);

    return (
        <div>
            <h2>Фильтры</h2>
            <form>
                <Select
                    className={'form-select'}
                    filter={filters.publisher}
                    filters={filters}
                    filtersArray={filterPublishers}
                    setFilters={setFilters}
                    filterField={'publisher'}
                />
                <Select
                    className={'form-select'}
                    filter={filters.author}
                    filters={filters}
                    filtersArray={filterAuthors}
                    setFilters={setFilters}
                    filterField={'author'}
                />
                <Select
                    className={'form-select'}
                    filter={filters.yearOfPublish}
                    filters={filters}
                    filtersArray={filterYearsOfPublish}
                    setFilters={setFilters}
                    filterField={'yearOfPublish'}
                />
                <div className={'mt-2'}>
                    <button className={'btn btn-info'} onClick={filterSubmitHandler}>Установить фильтры</button>
                    <button className={'m-2 btn btn-info'} onClick={dropFiltersHandler}>Сбросить фильтры</button>
                </div>
            </form>
        </div>
    );
};

export default Filters;