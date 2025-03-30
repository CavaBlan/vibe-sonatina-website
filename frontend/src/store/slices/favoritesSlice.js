import { createSlice } from "@reduxjs/toolkit";

// data type: id
const { actions, reducer } = createSlice({
  name: "favorites",
  initialState: {
    tracks: [],
    albums: [],
    artists: [],
  },
  reducers: {
    addTrack: (state, action) => {
      const isAlreadyAdded = state.tracks.some(
        (track) => track.id === action.payload.id
      );
      if (!isAlreadyAdded) {
        state.tracks.push(action.payload);
      }
    },
    removeTrack: (state, action) => {
      state.tracks = state.tracks.filter(
        (track) => track.id !== action.payload
      );
    },
    addAlbum: (state, action) => {
      const isAlreadyAdded = state.albums.some(
        (album) => album.id === action.payload.id
      );
      if (!isAlreadyAdded) {
        state.albums.push(action.payload);
      }
    },
    removeAlbum: (state, action) => {
      state.albums = state.albums.filter(
        (album) => album.id !== action.payload
      );
    },
    addArtist: (state, action) => {
      const isAlreadyAdded = state.artists.some(
        (artist) => artist.id === action.payload.id
      );
      if (!isAlreadyAdded) {
        state.artists.push(action.payload);
      }
    },
    removeArtist: (state, action) => {
      state.artists = state.artists.filter(
        (artist) => artist.id !== action.payload
      );
    },
  },
});

export const {
  addTrack,
  removeTrack,
  addAlbum,
  removeAlbum,
  addArtist,
  removeArtist,
} = actions;
export default reducer;
