import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class CourseListRow extends React.Component {
  static propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    isHeader: false,
    textSecondCell: null,
  };

  render() {
    const { isHeader, textFirstCell, textSecondCell } = this.props;
    const rowStyles = isHeader ? styles.rowHeader : styles.rowData;

    return (
      <tr className={css(rowStyles)}>
        {isHeader ? (
          textSecondCell ? (
            <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </>
          ) : (
            <th colSpan="2" className={css(styles.headerWide)}>
              {textFirstCell}
            </th>
          )
        ) : (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        )}
      </tr>
    );
  }
}

const styles = StyleSheet.create({
  rowHeader: {
    backgroundColor: "#deb5b545",
    borderBottom: "2px solid lightgray",
    textAlign: "left",
  },
  rowData: {
    backgroundColor: "#f5f5f5ab",
  },
  headerWide: {
    textAlign: "center",
  },
});

export default CourseListRow;
