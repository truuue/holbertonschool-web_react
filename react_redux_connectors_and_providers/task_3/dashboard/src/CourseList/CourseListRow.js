import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const rowStyles = [isHeader ? styles.rowHeader : styles.rowData];
  if (isChecked) {
    rowStyles.push(styles.rowChecked);
  }

  return (
    <tr className={css(...rowStyles)}>
      {isHeader
        ? textSecondCell
          ? <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
          : <th colSpan="2" className={css(styles.headerWide)}>
            {textFirstCell}
          </th>
        : <>
          <td>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

const styles = StyleSheet.create({
  rowHeader: {
    backgroundColor: '#deb5b545',
    borderBottom: '2px solid lightgray',
    textAlign: 'left'
  },
  rowData: {
    backgroundColor: '#f5f5f5ab'
  },
  headerWide: {
    textAlign: 'center'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

export default CourseListRow;
