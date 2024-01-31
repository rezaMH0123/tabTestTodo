// actions.ts

import { setTodos } from "./todoSlice";
import { Dispatch } from "redux";
import { RootState } from "./store";

export const loadTodosFromLocalStorage = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        const todos = JSON.parse(storedTodos) as RootState["todos"];
        dispatch(setTodos(todos));
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
    }
  };
};
