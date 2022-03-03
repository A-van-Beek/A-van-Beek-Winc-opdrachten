import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "rock",
    rating: 5,
  },
  {
    id: 1,
    title: "Dancing Queen",
    artist: "Abba",
    genre: "pop",
    rating: 1,
  },
];

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSong: (state, action) => {
      const newSong = {
        id: Date.now(),
        title: action.payload.title,
        artist: action.payload.artist,
        genre: action.payload.genre,
        rating: action.payload.rating,
      };
      state.push(newSong);
    },

    removeSong: (state, action) => {
      console.log("* RemoveSong (reducer)");
      return state.filter((song) => song.id !== action.payload.id);
    },
  },
});

export const songsList = (state) => state.playlist;

export const { addSong, removeSong } = playlistSlice.actions;

export default playlistSlice.reducer;
