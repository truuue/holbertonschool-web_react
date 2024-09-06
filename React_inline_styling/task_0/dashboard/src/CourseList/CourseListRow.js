import React from "react";
import PropTypes from "prop-types";

const headerRowStyles = {
  backgroundColor: "#deb5b545",
};

const dataRowStyles = {
  backgroundColor: "#f5f5f5ab",
};

class CourseListRow extends React.Component {
  render() {
    const { isHeader, textFirstCell, textSecondCell } = this.props;
    const styles = isHeader ? headerRowStyles : dataRowStyles;

    return (
      <tr style={styles}>
        {isHeader ? (
          textSecondCell ? (
            <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </>
          ) : (
            <th colSpan="2">{textFirstCell}</th>
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

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
