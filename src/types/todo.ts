export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id'>) => void;
  updateTodo: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}
