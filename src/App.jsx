import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // So we have previous values in array. we simply use date method to assign as a value to todo.
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    // It has previous value. and it is an array so we can map it or you can use foreach if you want.
    setTodos((prev) =>
      // after map we know it has an id so if id match do this else do that.
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    // We have previous value so we used filter method and check which one is same/match it remains there other will come out.
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    // we map to previous value and check if id match then get prevTodo and toggle complete (true to false to true) if not then return prevTodo.
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#C0CCBA] min-h-screen py-8 px-5">
        <div className="w-full max-w-2xl mx-auto  shadow-md rounded-lg p-6 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-slate-700">
            TODO APP 📑
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
