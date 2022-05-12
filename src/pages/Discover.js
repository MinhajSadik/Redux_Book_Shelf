import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import { getBooks } from "../redux-toolkit/slices/bookSlice";

//start component
const Discover = () => {
  const discoverBooks = useSelector((state) => state.books.discoverList);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <PageLayout>
      {discoverBooks?.length ? (
        discoverBooks?.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <div>Loading...</div>
      )}
    </PageLayout>
  );
};

export default Discover;
