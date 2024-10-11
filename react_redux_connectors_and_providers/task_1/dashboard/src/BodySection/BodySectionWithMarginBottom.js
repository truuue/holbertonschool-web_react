import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySectionWithMarginBottom)}>
      <BodySection {...props}></BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

const styles = StyleSheet.create({
  bodySectionWithMarginBottom: {
    marginBottom: '40px',
  }
});

export default BodySectionWithMarginBottom;
