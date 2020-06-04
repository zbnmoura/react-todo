import React from 'react';
import PropTypes from 'prop-types';

const getStyle = (props) => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: props.todo.completed ? 'line-through' : 'none',
    };
};

const markComplete = (e) => {
    console.log(e)
};

function TodoItem(props) {
    return (
        <div style={getStyle(props)}>
            <p>
                <input type="checkbox" onChange={markComplete} />
                {''}
                {props.todo.title}
            </p>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
};

export default TodoItem;
