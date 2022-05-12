import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import { loadBooks } from "../redux/action/bookAction";
const Discover = () => {
  const discoverBooks = useSelector((state) => state.books.discoverList);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadBooks())

  }, [dispatch]);

  return (
    <PageLayout>
      {discoverBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default Discover;
