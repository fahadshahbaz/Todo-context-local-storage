import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // First it will take default values always
  // This todo is serving as property, which is array and has objects
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  // It will return object of TodoContext
  return useContext(TodoContext);
};

// We export provider from here to avoid wrapping main.jsx with provider and passing TodoContext as prop
export const TodoProvider = TodoContext.Provider;
