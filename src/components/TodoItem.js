import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = (completed) => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            border: '1px #ccc dotted',
            textDecoration: completed ? 'line-through' : 'none',
        };
    };
    render() {
        const { id, completed, title } = this.props.todo;
        return (
            <div style={this.getStyle(completed)}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
                        x
                    </button>
                </p>
            </div>
        );
    }
}

TodoItem.protoTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
};

export default TodoItem;
