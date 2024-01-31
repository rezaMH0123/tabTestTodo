"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
type TodoContextType = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  deleteCompletedTodos: () => void;
};

type todosProviderProps = {
  children: ReactNode;
};

export const todosContext = createContext<TodoContextType | null>(null);

export const TodosContextProvider = ({ children }: todosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text, completed: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const deleteCompletedTodos = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <todosContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        deleteCompletedTodos,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

export function useTodo() {
  const context = useContext(todosContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}
