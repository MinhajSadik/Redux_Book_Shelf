// import allBooks from "../../fakeData/books.json";

const initialState = {
  discoverList: [],
  readingList: [],
  finishedList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],

        //compare and stop duplicates
        discoverList: state.discoverList.filter(
          (book) => book.id !== action.payload.id
        ),
      };
      return newState;
    }
    case "REMOVE_FROM_READING_LIST": {
      const newState = {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload.id
        ),
        discoverList: [...state.discoverList, action.payload],
      };
      return newState;
    }
    case "ADD_TO_FINISHED_LIST": {
      const newState = {
        ...state,
        finishedList: [...state.finishedList, action.payload],
        //compare and stop duplicates
        discoverList: state.discoverList.filter(
          (book) => book.id !== action.payload.id
        ),
      };
      return newState;
    }
    case "LOAD_BOOKS": {
      const newState = {
        ...state,
        books: action.payload,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
