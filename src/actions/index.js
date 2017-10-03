export function selectBook(book) {
    // selectBook is an ActionCreator,
    // should return an action,
    // an object with a type propery,
    // triggered in click of book from booklist
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}