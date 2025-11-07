import { createContext, useContext } from "react";
import { TodoContextType, Todo } from "../types/todo";

export const TodoContext = createContext<TodoContextType>({
  // First it will take default values always
  // This todo is serving as property, which is array and has objects
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

export const useTodo = (): TodoContextType => {
  // It will return object of TodoContext
  return useContext(TodoContext);
};

// We export provider from here to avoid wrapping main.jsx with provider and passing TodoContext as prop
export const TodoProvider = TodoContext.Provider;
