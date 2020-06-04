import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
    return (
        <div className="App">
            <p>{props.todo.title}</p>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
};

export default TodoItem;
