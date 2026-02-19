import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
} from "../store/todoSlice";

export const useTodo = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return {
    todos,
    loading,
    error,
    add: (todo) => dispatch(addTodo(todo)),
    remove: (id) => dispatch(deleteTodo(id)),
    toggle: (id, completed) => dispatch(toggleTodo({ id, completed })),
  };
};
