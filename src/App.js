import React from 'react';
import Todos from './components/Todos';

import './App.css';

function App() {
    const state = {
        todos: [
            {
                id: 1,
                title: 'comer um cu',
                completed: false,
            },
            {
                id: 2,
                title: 'dar o cu',
                completed: false,
            },
            {
                id: 3,
                title: 'chorar',
                completed: false,
            },
        ],
    };
    return (
        <div className="App">
            <Todos todos={state.todos} />
        </div>
    );
}

export default App;
