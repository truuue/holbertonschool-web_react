import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

export class Notifications extends React.PureComponent {
  static propTypes = {
    listNotifications: PropTypes.object,
    fetchNotifications: PropTypes.func,
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markAsRead: PropTypes.func
  }

  static defaultProps = {
    listNotifications: {},
    fetchNotifications: () => { },
    displayDrawer: false,
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
    markAsRead: () => { },
  }

  componentDidMount() {
    const { fetchNotifications } = this.props;
    fetchNotifications();
  }

  render() {
    const { listNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer, markAsRead } = this.props;

    const notificationItems = listNotifications.map(item =>
      <NotificationItem
        type={item.type}
        value={item.value}
        html={item.html}
        markAsRead={() => markAsRead(item.id || item.guid)}
        key={item.id || item.guid}
      />
    ).valueSeq();


    return (
      <>
        {displayDrawer
          ? <div className={css(styles.notifications)}>
            <button type="button" aria-label="Close" className={css(styles.closeBtn)} onClick={handleHideDrawer}>
              x
            </button>
            <ul className={css(styles.ul)}>
              {notificationItems.size
                ? <><p>Here is the list of notifications</p>{notificationItems}</>
                : <NotificationItem type="default" value="No new notification for now" />
              }
            </ul>
          </div>
          : <div className={css(styles.menuItem)} aria-label="Open" onClick={handleDisplayDrawer}>Your notifications</div>
        }
      </>
    );
  }
}

const opacityAnimation = {
  'from': {
    opacity: 0.5
  },
  'to': {
    opacity: 1
  }
}

const bouncingAnimation = {
  '0%': {
    transform: 'translateY(0px)'
  },
  '15%': {
    transform: 'translateY(-5px)'
  },
  '45%': {
    transform: 'translateY(5px)'
  },
  '60%': {
    transform: 'translateY(0px)'
  },
}

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    right: '1rem',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityAnimation, bouncingAnimation],
      animationDuration: '1s, .5s',
      animationIterationCount: '3'
    }
  },
  notifications: {
    border: '2px dotted #e0354b',
    padding: '1rem .5rem',
    position: 'absolute',
    right: '1rem',
    top: '2rem',
    minwWidth: '33vw',
    maxWidth: '50vw',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    '@media (max-width: 900px)': {
      inset: 0,
      width: '100%',
      maxWidth: 'unset',
      height: '100%',
      border: 'none',
      padding: 0,
      backgroundColor: 'white'
    }
  },
  ul: {
    maxHeight: '300px',
    overflowY: 'scroll',
    '@media (max-width: 900px)': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      fontSize: '20px',
      maxHeight: 'unset',
      overflowY: 'unset',
    }
  },
  closeBtn: {
    position: 'absolute',
    top: '.5rem',
    right: 0,
    background: 'none',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '15pt',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      top: 0,
      right: '.5rem'
    }
  }
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead
}

function mapStateToProps(state) {
  return {
    listNotifications: getUnreadNotifications(state.notifications)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
