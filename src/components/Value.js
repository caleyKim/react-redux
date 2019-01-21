import React, { Component } from "react";
import PropTypes from "prop-types";
// const propTypes = {
//   number: PropTypes.number
// };

class Value extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

Value.propTypes = {
  number: PropTypes.number
};
Value.defaultProps = {
  number: -1
};
export default Value;
