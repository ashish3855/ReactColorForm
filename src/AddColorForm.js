import React from "react";
import uuid from "uuid";
import "./css/form.css";

export default class AddColorForm extends React.Component {
  state = {
    id: "",
    title: "",
    color: "",
    rating: ""
  };

  onchangefield = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
    this.setState({
      id: uuid()
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.submitNewList(this.state);
    this.setState({
      title: "",
      color: "",
      rating: ""
    });
  };

  render() {
    return (
      <div className="form-container">
        <h1>Add New Color</h1>
        <form onSubmit={this.submit}>
          <p>
            <label htmlFor="title">Color Title :</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Enter Color title..."
              onChange={this.onchangefield}
            />
          </p>
          <p>
            <label htmlFor="color">Color Palette :</label>
            <br />
            <input
              type="text"
              name="color"
              value={this.state.color}
              placeholder="Enter Color hex code..."
              onChange={this.onchangefield}
            />
          </p>
          <p>
            <label htmlFor="rating">Rating :</label>
            <br />
            <input
              type="text"
              name="rating"
              value={this.state.rating}
              placeholder="Range 1 to 5"
              onChange={this.onchangefield}
            />
          </p>
          <button> Add Color </button>
        </form>
      </div>
    );
  }
}
