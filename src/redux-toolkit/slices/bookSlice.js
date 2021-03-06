/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    discoverList: [],
    readingList: [],
    finishedList: [],
  },

  reducers: {
    addToReadingList: (state, { payload }) => {
      state.readingList.push(payload);
    },
    removeFromReadingList: (state, { payload }) => {
      state.readingList = state.readingLIst.filter(
        (book) => book.id !== payload
      );
    },
    addToFinishedList: (state, { payload }) => {
      state.finishedList.push(payload);
    },
    loadBooks: (state, { payload }) => {
      state.discoverList = payload;
    },
  },  
});

const {
  addToReadingList,
  removeFromReadingList,
  addToFinishedList,
  loadBooks,
} = bookSlice.actions;

export const getBooks = (payload) => (dispatch) => {
  fetch("https://redux-book-shelf.herokuapp.com/books")
    .then((res) => res.json())
    .then(({ data }) => {
      dispatch(loadBooks(data));
    });
};

export default bookSlice.reducer;
