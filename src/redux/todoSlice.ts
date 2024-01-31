import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      saveTodosToLocalStorage(state);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToLocalStorage(state);
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(newState);
      return newState;
    },
    deleteCompletedTodos: (state) => {
      const newState = state.filter((todo) => !todo.completed);
      saveTodosToLocalStorage(newState);
      return newState;
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
  },
});

export const {
  setTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
