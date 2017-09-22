import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever gets returned from here will show up
    // as props inside BookList. Will be availble to
    // the connected component as this.props(above)
    return {
        books: state.books
    };
}


function mapDispatchToProps(dispatch) {
    //Anything return from thi function will end up as props on BookList container
    // Whenever selctBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);