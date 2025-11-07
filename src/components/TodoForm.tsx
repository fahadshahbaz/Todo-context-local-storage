import { useState, FormEvent, ChangeEvent } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState<string>("");
  const { addTodo } = useTodo();

  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex mb-4">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-gray-500 focus:ring-1 focus:ring-[#c6cfc1]"
        value={todo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-md px-6 py-2 bg-gray-900 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
