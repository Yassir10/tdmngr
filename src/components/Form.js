import React from 'react'
import './Form.css'

const Form = ({inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.random() * 1000

        }]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }


    return (
        <form className="form">
            <input type="text"
                   className="todo-input"
                   value={inputText}
                   onChange={inputTextHandler}
                   placeholder="Add a task..."/>

            <input type="submit"
                   value="Add"
                   className="btn"
                   onClick={submitTodoHandler}/>
            <div className="select">
                <select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
