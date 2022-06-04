import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "../components/Book";

const URL = "http://localhost:5000/books";

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div className="absolute top-20 bg-gray-200 h-[90vh] w-full">
      <div className="w-[90%] flex justify-center mx-auto text-3xl font-bold  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {books &&
            books.map((book, index) => <Book key={index} book={book} />)}
        </div>
      </div>
    </div>
  );
};

export default Books;
