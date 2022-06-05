import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { _id, name, author, description, price, image } = book;

  return (
    <Link to={`/books/${_id}`}>
      <div className=" relative max-w-sm mx-auto rounded overflow-hidden shadow-lg mt-5 pb-8 pt-5 h-[405px] shadow-gray-300 hover:animate-pulse dark:bg-[#11151b] dark:hover:animate-pulse dark:shadow-xl dark:shadow-[#0b0c13] ">
        <img
          className="w-[283px] h-[226px] mx-auto object-contain"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>

          <p className=" text-base">{description}</p>
        </div>

        <div className="absolute top-[90%] pl-3  lg:px-6 flex lg:pl-3">
          <span className="flex bg-gray-200 rounded-full px-3 py-1  items-center text-sm font-semibold text-gray-700 mr-2 mb-2">
            {price}ETB
          </span>
          <span className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {author}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Book;
