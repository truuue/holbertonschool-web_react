import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { css, StyleSheet } from 'aphrodite';

class CourseList extends React.Component {
  static propTypes = {
    listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape))
  }

  static defaultProps = {
    listCourses: []
  }

  render() {
    const courseItems = this.props.listCourses.map(course =>
      <CourseListRow
        textFirstCell={course.name}
        textSecondCell={course.credit}
        isHeader={false}
        key={course.id}
      />
    );

    return (
      <table className={css(styles.courseList)}>
        <thead>
          <CourseListRow textFirstCell='Available courses' isHeader={true}></CourseListRow>
          <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true}></CourseListRow>
        </thead>
        <tbody>
          {courseItems.length
            ? courseItems
            : <CourseListRow textFirstCell='No course available yet' />
          }
        </tbody>
      </table>
    );
  }
}

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    border: '1px solid lightgray'
  }
});

export default CourseList;
