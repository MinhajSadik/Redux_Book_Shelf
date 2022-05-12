export const loadBooks = (payload) => {
  return (dispatch, getState) => {
    fetch("https://redux-book-shelf.herokuapp.com/books")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "LOAD_BOOKS",
          payload: data,
        });
      });
  };
};

export const addToReadingList = (payload) => {
  // return async (dispatch) => {
  //   const data = await axios.post(
  //     "http://localhost:5000/addToReadingList",
  //     payload
  //   );
  //   dispatch({
  //     type: "ADD_TO_READING_LIST",
  //     payload: data.data,
  //   });
  // };
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
