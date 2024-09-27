import React from "react";
import propTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { useState } from "react";

export function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  CourseListRow.propTypes = {
    isHeader: propTypes.bool,
    textFirstCell: propTypes.string.isRequired,
    textSecondCell: propTypes.string || propTypes.number,
  };

  const rowStyle = {
    backgroundColor: isHeader ? "#deb5b545" : checked ? "#e6e4e4" : "#f5f5f5ab",
  };

  if (isHeader == true) {
    if (textSecondCell == null) {
      return (
        <tr style={{ rowStyle }}>
          <th className={css(styles.hColSpan)} colSpan={2}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr style={rowStyle}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowStyle}>
        <td>
          <input type="checkbox" checked={checked} onChange={handleChecked} />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

const styles = StyleSheet.create({
  th: {
    borderBottom: "1px solid #dbdada",
  },

  hColSpan: {
    textAlign: "center",
  },
});

export default CourseListRow;
