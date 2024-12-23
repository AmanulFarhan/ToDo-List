import React,{ useState } from 'react';

function ToDoList() {
    
    const [toDos, setToDos] = useState([])
    const [toDo,setToDo] = useState("")

    function handleInputChange(event) {
        setToDo(event.target.value)
    }

    function addTodo() {
        if (toDo.trim() !== "") {
            setToDos([...toDos, {text: toDo, status: false}])
            setToDo("")
        }
        
    }

    function deleteTodo(index) {
        const updatedToDos = toDos.filter((_,i)=>i !== index)
        setToDos(updatedToDos)
    }

    function moveTodoUp(index) {
        if (index > 0) {
            const updatedToDos = [...toDos];
            [updatedToDos[index-1],updatedToDos[index]] = [updatedToDos[index],updatedToDos[index-1]]
            setToDos(updatedToDos)
        }
    }

    function moveTodoDown(index) {
        if (index < toDos.length-1) {
            const updatedToDos = [...toDos];
            [updatedToDos[index],updatedToDos[index+1]] = [updatedToDos[index+1],updatedToDos[index]]
            setToDos(updatedToDos)
        }
    }

    function Checkbox(index) {
        const updatedToDos = toDos.map((todo,i) => i===index ? {...todo,status: !todo.status} : todo)
        setToDos(updatedToDos)
    }

    return (
        <div className = "toDo-List">
            <h1>ToDo-List</h1>

            <div>
                <input
                type = "text"
                placeholder='Enter a task...'
                value = {toDo}
                onChange={handleInputChange}
                />
                <button 
                className = "add-button"
                onClick={addTodo}>
                    Add
                </button>
            </div>
            <ol>
                {toDos.map((todo,index)=> 
                    <li key = {index}>
                        <input 
                        type="checkbox"
                        onClick={()=>Checkbox(index)}/>
                        <span className= {todo.status ? "completed" : "text"}>{todo.text}</span>
                        <button
                        className='delete-button'
                        onClick={()=>deleteTodo(index)}>Delete
                        </button>
                        <button
                        className='up-button'
                        onClick={()=>moveTodoUp(index)}>👆
                        </button>
                        <button
                        className='down-button'
                        onClick={()=>moveTodoDown(index)}>👇
                        </button>
                    </li>
                    
                )}
            </ol>
        </div>
    )
}

export default ToDoList;
