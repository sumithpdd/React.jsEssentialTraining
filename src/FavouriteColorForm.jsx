import React from "react";

class FavouriteColorForm extends React.Component {
  state = {
    value: ""
  };
  newColor = e => this.setState({ value: e.target.value });
  submit = e => {
    console.log(`New Color: ${this.state.value}`);
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Favourite Color:
          <input type="color" onChange={this.newColor} />
        </label>
        <button> submit</button>
      </form>
    );
  }
}
export default FavouriteColorForm;
