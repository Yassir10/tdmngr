import React from 'react'
import Todo from './Todo'
import "./TodoList.css"

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(elm => <Todo key={elm.id}
                                           id={elm.id}
                                           text={elm.text}
                                           completed={elm.completed}
                                           todos={todos}
                                           setTodos={setTodos} />)
                }
            </ul>
        </div>
    );
}

export default TodoList;
