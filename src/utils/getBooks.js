export const getBooks = (setBooks, setShownBooks) => {
    fetch('./library/library.json', {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })
        .then(res => {
            return res.json();
        })
        .then(res => {
            setBooks(res);
            setShownBooks(res);
        });
};