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
                            <tr key={todo.description}>
                                <td>{todo.description}</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo
