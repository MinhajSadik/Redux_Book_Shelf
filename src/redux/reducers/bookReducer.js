const initialState = {
  discoverList: [],
  readingList: [],
  finishedList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const newState = state + action.payload;
      return newState;
    }
    case "REMOVE_FROM_READING_LIST": {
      const newState = state - action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
