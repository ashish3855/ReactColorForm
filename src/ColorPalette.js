import React from "react";
import StartRating from "./StarRating";
import "./css/colorpalette.css";

export default class ColorPalette extends React.Component {
  render() {
    return (
      <div className="color-container">
        <div className="palette">
          <h5 className="color-title">{this.props.color[0]}</h5>{" "}
          <span
            className="delete"
            onClick={() => this.props.color[4](this.props.color[3])}
          >
            X
          </span>
          <div
            style={{ backgroundColor: this.props.color[1], padding: "30px" }}
          >
            <span style={{ color: "white", marginRight: "10px" }}>
              {this.props.color[1]}
            </span>
            <span>{this.props.color[1]}</span>
          </div>
          <span className="starsrating">
            <StartRating totalStars={5} rating={this.props.color[2]} />
          </span>
        </div>
      </div>
    );
  }
}
