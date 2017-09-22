// State argument here is not the application state,
// it is the specific state the function is responsible for
export default function(state = null, action) {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}