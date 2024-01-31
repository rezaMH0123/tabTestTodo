"use client";
import React, { useState } from "react";
import { useTodo } from "@/context/todosContext";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { toggleTodo, deleteTodo } from "@/redux/todoSlice";
import { RootState } from "../redux/store";

const PurpleCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(235, 122, 8, 0.943);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: transparent;

    &::before {
      content: "✔";
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 12px;
      color: rgba(235, 122, 8, 0.943);
      transform: translate(-50%, -50%);
    }
  }
`;

type TodoListProps = {
  tab: number;
};

const TodoList = ({ tab }: TodoListProps) => {
  //   const { todos, toggleTodo, deleteTodo } = useTodo();
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  console.log(tab);

  const handleCheckboxChange = (id: number) => {
    // toggleTodo(id);
    dispatch(toggleTodo(id));
  };
  const handleDeleteTodo = (id: number) => {
    // deleteTodo(id);
    dispatch(deleteTodo(id));
  };

  let filterTodo = todos;
  console.log(filterTodo);

  if (tab === 2) {
    filterTodo = filterTodo.filter((todo) => !todo.completed);
  } else if (tab === 3) {
    filterTodo = filterTodo.filter((todo) => todo.completed);
  }

  return (
    <div className="flex flex-col w-[340px] md:w-[500px] mt-4">
      {filterTodo.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border-b-2 border-gray-300 mb-5 w-full  p-2 items-center"
        >
          <div className="checkBox  flex justify-center items-center ">
            <label>
              <PurpleCheckbox
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </label>
          </div>
          <div className={`task  flex ${item.completed && `line-through `}`}>
            {item.text.length > 20 ? item.text.slice(0, 20) + "..." : item.text}
          </div>
          <div className="buttons  flex justify-center gap-x-2">
            <button
              onClick={() => handleDeleteTodo(item.id)}
              disabled={!item.completed && true}
              className={
                !item.completed
                  ? `bg-gray-400 text-gray-100 cursor-auto px-4 py-2 rounded-md`
                  : `px-4 py-2 bg-red-500 text-gray-100 cursor-pointer rounded-md `
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
