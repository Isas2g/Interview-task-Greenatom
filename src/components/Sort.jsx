import React, {useState} from 'react';
import Button from "./UI/Button/Button";

const Sort = ({books, setShownBooks}) => {

    const [sortAlphabetOrder, setSortAlphabetOrder] = useState(false);
    const [sortRatingOrder, setSortRatingOrder] = useState(false);
    const [sortYearsOrder, setSortYearsOrder] = useState(false);

    const sortAlphabet = () => {
        if (sortAlphabetOrder) {
            setShownBooks([...books].sort((a, b) => {
                let fa = a.title.toLowerCase(),
                    fb = b.title.toLowerCase();

                if (fa > fb) {
                    return -1;
                }
                if (fa < fb) {
                    return 1;
                }
                return 0;
            }));
            setSortAlphabetOrder(false);
        } else {
            setShownBooks([...books].sort((a, b) => {
                let fa = a.title.toLowerCase(),
                    fb = b.title.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }));
            setSortAlphabetOrder(true);
        }

    };

    const sortRating = () => {
        if (sortRatingOrder) {
            setShownBooks([...books].sort((a, b) => b.rating - a.rating));
            setSortRatingOrder(false);
        } else {
            setShownBooks([...books].sort((a, b) => a.rating - b.rating));
            setSortRatingOrder(true);
        }
    };

    const sortYears = () => {
        if (sortYearsOrder) {
            setShownBooks([...books].sort((a, b) => b.yearOfPublish - a.yearOfPublish));
            setSortYearsOrder(false);
        } else {
            setShownBooks([...books].sort((a, b) => a.yearOfPublish - b.yearOfPublish));
            setSortYearsOrder(true);
        }
    }

    const sortDrop = () => {
        setShownBooks(books);
        setSortRatingOrder(false);
        setSortYearsOrder(false);
        setSortAlphabetOrder(false);

    }


    return (
        <div className={'mt-2'}>
            <Button className={'btn btn-info'} onClick={sortAlphabet}>???????????????????? ???? ????????????????</Button>
            <Button className={'m-2 btn btn-info'} onClick={sortRating}>???????????????????? ???? ????????????????</Button>
            <Button className={'btn btn-info'} onClick={sortYears}>???????????????????? ???? ???????? ????????????????????????</Button>
            <Button className={'m-2 btn btn-info'} onClick={sortDrop}>????????????????</Button>
        </div>
    );
};

export default Sort;