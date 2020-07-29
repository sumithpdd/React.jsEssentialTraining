import React from "react";
import Book from "./Book";

function Library({ books }) {
  return (
    <div>
      <h1>Welcome to the Library</h1>
      {books.map((book, i) => (
        <Book
          key={i}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
}

export default Library;
// <Book title="The sun also rises" author="Ernest Hemingway" pages={260} />
//     <Book title="White Teeth" author="Zadie Smith" pages={480} />
//     <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304} />
