export function selectBook(book) {
    console.log(`Book: ${book.title}`);
    // selectBook is an ActionCreator,
    // should return an action,
    // an object with a type propery
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}