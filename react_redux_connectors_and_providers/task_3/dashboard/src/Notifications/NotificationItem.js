import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props;
    const style = styles[type] || styles.default;
    return (
      <li data-notification-type={type} className={css(style, styles.small)} dangerouslySetInnerHTML={html} onClick={() => markAsRead()}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
  type: 'default',
  value: null,
  markAsRead: () => { }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  },
  small: {
    '@media (max-width: 900px)': {
      boxSizing: 'border-box',
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px'
    }
  }
});

export default NotificationItem;
