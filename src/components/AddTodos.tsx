"use client";

import { useTodo } from "@/context/todosContext";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlice";
import ClearCompletedTodos from "./ClearCompletedTodos";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>("");
  //   const { addTodo } = useTodo();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handlerclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // addTodo(todo);
    if (todo) {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };

  return (
    <form className="flex flex-col md:flex-row  md:items-center gap-y-2 gap-x-2 mt-8 sm:text-sm lg:text-base">
      <input
        className="border border-gray-400 outline-none  text-black px-2 py-1 rounded-md w-72 h-[40px]"
        type="text"
        value={todo}
        placeholder="add new todo"
        onChange={handlerChange}
      />
      <button
        onClick={handlerclick}
        type="button"
        className="bg-green-600 px-4 py-1 rounded-md h-[40px]"
      >
        add +
      </button>
      <ClearCompletedTodos />
    </form>
  );
};

export default AddTodos;
