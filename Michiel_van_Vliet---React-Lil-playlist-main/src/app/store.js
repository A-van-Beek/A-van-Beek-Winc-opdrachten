import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/about/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import playlistReducer from "../features/playlist/playlistSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    playlist: playlistReducer,
  },
});
