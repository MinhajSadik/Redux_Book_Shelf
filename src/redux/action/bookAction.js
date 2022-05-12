export const loadBooks = (payload) => {
  return (dispatch, getState) => {
    fetch("http://localhost:5000/books")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "LOAD_BOOKS",
          payload: data,
        });
        console.log("data from book api", data);
      });
  };
};

export const addToReadingList = (payload) => {
  return {
    type: "ADD_TO_READING_LIST",
    payload,
  };
};

export const removeFromReadingList = (payload) => {
  return {
    type: "REMOVE_FROM_READING_LIST",
    payload,
  };
};

export const addToFinishedList = (payload) => {
  return {
    type: "ADD_TO_FINISHED_LIST",
    payload,
  };
};
