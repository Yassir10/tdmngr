import React from 'react'
import "./Todo.css"

const Todo = ({id, text, completed, todos, setTodos, setFilteredTodos}) => {

    const deleteHandler = () => {
        let newList = todos.filter(elm => elm.id !== id);
        setTodos(newList)
    }

    const checkHandler = () => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }

    return (
        <li>
            <input type="checkbox" className="check" onClick={checkHandler}/>
            <div className={completed ? "completed task" : "task"}>{text}</div>
            <div className="deleteButton">
                {/*<button className="check" onClick={checkHandler}>&#10003;</button>*/}
                <button className="delete" onClick={deleteHandler}>X</button>
            </div>
        </li>
    );
}

export default Todo;
