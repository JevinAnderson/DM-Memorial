import React, { Component } from "react";
import PropTypes from "prop-types";

export class Spaces extends Component {
  state = Spaces.getDerivedStateFromProps(this.props);

  static getDerivedStateFromProps({ count }) {
    let content = "";
    for (let i = 0; i < count; i++) {
      content += "&nbsp;";
    }

    return { content };
  }

  shouldComponentUpdate = nextProps => nextProps.count !== this.props.count;

  render = () => (
    <span dangerouslySetInnerHTML={{ __html: this.state.content }} />
  );
}

Spaces.propTypes = {
  count: PropTypes.number
};

Spaces.defaultProps = {
  count: 7
};

export default Spaces;
