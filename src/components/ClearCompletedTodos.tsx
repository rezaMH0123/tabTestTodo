"use client";

import { useTodo } from "@/context/todosContext";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompletedTodos } from "@/redux/todoSlice";
import { RootState } from "../redux/store";

const ClearCompletedTodos = () => {
  const dispatch = useDispatch();
  const [hasCompletedTodos, setHasCompletedTodos] = useState(false);
  const todos = useSelector((state: RootState) => state.todos);

  //   const { deleteCompletedTodos, todos } = useTodo();
  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deleteCompletedTodos());
  };

  useEffect(() => {
    const completedTodosExist = todos.some((todo) => todo.completed);
    setHasCompletedTodos(completedTodosExist);
  }, [todos]);

  return (
    <button
      onClick={handlerClick}
      className={`flex px-4 py-2 bg-purple-600 text-gray-100 cursor-pointer rounded-md  h-[40px] ${
        !hasCompletedTodos && "bg-slate-400 cursor-default h-[40px]"
      }`}
    >
      clear completed todos
    </button>
  );
};

export default ClearCompletedTodos;
