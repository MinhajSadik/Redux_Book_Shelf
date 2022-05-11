import allBooks from "../../fakeData/books.json";

const initialState = {
  discoverList: allBooks,
  readingList: [],
  finishedList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      // const newState = state + action.payload;
      return state;
    }
    case "REMOVE_FROM_READING_LIST": {
      // const newState = state - action.payload;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
