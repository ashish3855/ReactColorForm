import React from "react";
import { connect } from "react-redux";
import ColorPalette from "./ColorPalette";
import { bindActionCreators } from "redux";
import newColorCreated from "./actions/newColorCreated";

class ListColorPalette extends React.Component {
  somethingpassed(color) {
    console.log("passed a ", color);
  }
  render() {
    return (
      <div className="color-list-container">
        <h3>List Colors</h3>

        {this.props.colors.map(color => (
          <div className="list" key={color.id}>
            {/* {this.props.newColorCreated(color)} */}
            <ColorPalette
              color={[
                color.title,
                color.color,
                color.rating,
                color.id,
                this.props.delete
              ]}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    colors: state.colorReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ newColorCreated }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListColorPalette);
