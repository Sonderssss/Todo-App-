import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  //todos starts of as an empty array
  //settodos updates the array with newtodos
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  //run this funcion every time an element in that array changes
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos)); //storing the todos in local storage
  }, [todos]);

  //to toggle if its chacked or not  uses id to id it and completed which is false
  const toggleTodo = (id, completed) => {
    //using the current todo
    setTodos((currentTodos) => {
      //checking to see if its the one you want to toggle
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  //deleting a todo
  const deleteTodo = (id) => {
    //using the current todos
    setTodos((currentTodos) => {
      //you want a filtered version of your todos except the one you want to remove
      return currentTodos.filter((todo) => todo.id !== id); //keeping the rest
    });
  };

  const addTodo = (title) => {
    //spreads the todos creating a new array giving it an id a title(newItem) and if  completed
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  };
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">TODO LIST</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      ></TodoList>
    </>
  );
}

export default App;
