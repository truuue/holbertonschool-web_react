import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
    width: "100%",
  },
});

export default BodySectionWithMarginBottom;
