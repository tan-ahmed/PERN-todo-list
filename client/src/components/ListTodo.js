import React, {useEffect, useState} from 'react'

const ListTodo = () => {

    const [todos, setTodos] = useState([]);


    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();
            // console.log(jsonData)
            setTodos(jsonData);

        } catch (error) {
            console.error(error.message)
        }
    }

    // Delete to do function

    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method: "DELETE"
            });

            console.log(deleteTodo)
            setTodos(todos.filter(todo => todo.todo_id !== id))

        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    // console.log(todos)
    
    return (
        <div>
            {/* <h1>List Todo's</h1> */}
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
                    {
                        todos.map(todo => (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td><button className="btn btn-danger">Edit</button></td>
                                <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo
