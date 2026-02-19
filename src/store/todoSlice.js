import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodos, createTodo, removeTodo, updateTodo } from "../api/todo.api";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getTodos();
      return res.data.slice(0, 10);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const res = await createTodo(todo);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await removeTodo(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async ({ id, completed }, { rejectWithValue }) => {
    try {
      const res = await updateTodo({ id, completed });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.unshift(action.payload);
      })

      // DELETE
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })

      // TOGGLE
      .addCase(toggleTodo.pending, (state, action) => {
        const { id, completed } = action.meta.arg;

        const todo = state.todos.find((t) => t.id === id);
        if (todo) {
          todo.completed = completed;
        }
      });
  },
});

export default todoSlice.reducer;
