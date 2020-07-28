import React from "react";

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages : {pages} pages</p>
    </section>
  );
};
export default Book;
