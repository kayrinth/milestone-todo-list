import { axios } from "../api/axios";

export const getTodos = () => axios.get("/todos");
export const createTodo = (todo) => axios.post("/todos", todo);
export const removeTodo = (id) => axios.delete(`/todos/${id}`);
export const updateTodo = (todo) => axios.put(`/todos/${todo.id}`, todo);
