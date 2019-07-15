import React from "react";

const Star = props => (
  <div
    className={props.selected ? "star selected" : "star"}
    onClick={props.onClick}
  />
);

class StarRating extends React.Component {
  state = {
    starSelected: this.props.rating
  };
  change = i => {
    this.setState({
      starSelected: i
    });
  };

  render() {
    console.log(this.props);
    const starSelected = this.state.starSelected;
    const totalStars = this.props.totalStars;
    return (
      <div className="star-raing">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
        {/* {starSelected} of {totalStars} */}
      </div>
    );
  }
}
export default StarRating;
