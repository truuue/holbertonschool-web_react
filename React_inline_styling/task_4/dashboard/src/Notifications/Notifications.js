import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(
      PropTypes.shape(NotificationItemShape)
    ),
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const notificationItems = this.props.listNotifications.map((item) => (
      <NotificationItem
        type={item.type}
        value={item.value}
        html={item.html}
        key={item.id}
        markAsRead={this.markAsRead.bind(this, item.id)}
      />
    ));

    return (
      <>
        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              type="button"
              aria-label="Close"
              className={css(styles.closeBtn)}
              onClick={() => console.log("Close button has been clicked")}
            >
              x
            </button>
            <ul className={css(styles.ul)}>
              {notificationItems.length ? (
                <>
                  <p>Here is the list of notifications</p>
                  {notificationItems}
                </>
              ) : (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              )}
            </ul>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>Your notifications</div>
        )}
      </>
    );
  }
}

const opacityAnimation = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const bouncingAnimation = {
  "0%": {
    transform: "translateY(0px)",
  },
  "15%": {
    transform: "translateY(-5px)",
  },
  "45%": {
    transform: "translateY(5px)",
  },
  "60%": {
    transform: "translateY(0px)",
  },
};

const styles = StyleSheet.create({
  menuItem: {
    position: "absolute",
    right: "1rem",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    ":hover": {
      animationName: [opacityAnimation, bouncingAnimation],
      animationDuration: "1s, .5s",
      animationIterationCount: "3",
    },
  },
  notifications: {
    border: "2px dotted #e0354b",
    padding: "1rem .5rem",
    position: "absolute",
    right: "1rem",
    top: "2rem",
    minwWidth: "33vw",
    "@media (max-width: 900px)": {
      inset: 0,
      width: "100%",
      height: "100%",
      border: "none",
      padding: 0,
      backgroundColor: "white",
    },
  },
  ul: {
    "@media (max-width: 900px)": {
      margin: 0,
      padding: 0,
      listStyle: "none",
      fontSize: "20px",
    },
  },
  closeBtn: {
    position: "absolute",
    top: ".5rem",
    right: 0,
    background: "none",
    border: "none",
    fontWeight: "bold",
    fontSize: "15pt",
    cursor: "pointer",
    "@media (max-width: 900px)": {
      top: 0,
      right: ".5rem",
    },
  },
});

export default Notifications;
