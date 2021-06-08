import React, {useState, useEffect} from 'react'
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState(() => {
        if(localStorage.getItem('todos') === null) {
            return [];
        }
        return JSON.parse(localStorage.getItem('todos'))
        });
    const [status, setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter(item => item.completed))
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(item => !item.completed))
                break;
            default:
                setFilteredTodos(todos)
        }
    }

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status])


    const saveLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }

    return (
        <div className="app">
            <header>
                <h1>Today's Todo List:</h1>
            </header>

            <Form
                className="form"
                inputText={inputText}
                  setInputText={setInputText}
                  todos={todos}
                  setTodos={setTodos}
                  setStatus={setStatus}/>

            <TodoList todos={todos}
                      setTodos={setTodos}
                      filteredTodos={filteredTodos}/>
        </div>
    );
}

export default App;
