"use client";
import AddTodos from "@/components/AddTodos";
import ClearCompletedTodos from "@/components/ClearCompletedTodos";
import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";
import { loadTodosFromLocalStorage } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const [tab, setTab] = useState(1);

  useEffect(() => {
    // Dispatch the action to load todos from local storage
    dispatch(loadTodosFromLocalStorage());
  }, [dispatch]);

  return (
    <div className="h-screen bg-white flex  justify-center md:items-center  relative">
      <div className="bg-zinc-700 p-4 containerTodo flex flex-col items-center md:rounded-xl shadow-3xl w-full  sm:w-[80%] md:w-[75%] lg:w-[55%]">
        <h2 className="t mt-4 mb-4 text-[#cc641f] font-bold text-lg">
          TODO APP
        </h2>
        <Navbar tab={tab} setTab={setTab} />
        <AddTodos />
        <TodoList tab={tab} />
      </div>
      <div className="absolute text-black bottom-0 left-2 font-bold text-sm md:text-base ">
        build with nextjs + typscript +Redux or context
      </div>
    </div>
  );
}
