import React from "react";
import Book from "./Book";

const Hiring = () => (
  <div>
    <p>The library is hiring. Go to www.library.com/jobs from more.</p>
  </div>
);

const NotHiring = () => (
  <div>
    <p>The library is not hiring.Check back later for more info.</p>
  </div>
);

class Library extends React.Component {
  static defaultProps = {
    books: [
      { title: "The sun also rises", author: "Ernest Hemingway", pages: "260" }
    ]
  };
  state = {
    open: true,
    freeBookmark: true,
    hiring: false,
    data: [],
    loading: false
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: true
  //   };
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  // }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
  }
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? (
          "loading...."
        ) : (
          <div>
            {this.state.data.map(product => {
              return (
                <div>
                  <h3>Library Product of the week!</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100} />
                </div>
              );
            })}
          </div>
        )}
        <h1>The Library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
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
