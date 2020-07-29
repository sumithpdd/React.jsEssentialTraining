import React from "react";
import Book from "./Book";

class Library extends React.Component {
  state = {
    open: true
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: true
  //   };
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  // }
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    const { books } = this.props;
    return (
      <div>
        <h1>The Library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
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
}

export default Library;
// <Book title="The sun also rises" author="Ernest Hemingway" pages={260} />
//     <Book title="White Teeth" author="Zadie Smith" pages={480} />
//     <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304} />
