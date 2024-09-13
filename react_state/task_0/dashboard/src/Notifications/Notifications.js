import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import propTypes, { func } from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.closeClick = this.closeClick;
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications > this.props.listNotifications ||
      nextProps.displayDrawer != this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  closeClick = () => {
    console.log("Close button has been clicked");
  };
  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <>
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{ float: "right" }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close-icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {this.props.listNotifications &&
              this.props.listNotifications.length !== 0 ? (
                this.props.listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                    id={notification.id}
                  />
                ))
              ) : (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const opacityAnimation = {
  "50%": {
    opacity: 0.5,
  },
  "100%": {
    opacity: 1,
  },
};

const bounceAnimation = {
  "0%, 100%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "dotted 2px #E0354B",
    padding: "1% 0% 0% 3%",
    ":hover": {
      backgroundColor: "#fff8f8",
      cursor: "pointer",
    },
    "@media (max-width: 600px)": {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "white",
      border: "none",
      padding: 0,
    },
  },
  liUrgent: {
    color: "red",
  },
  liDefault: {
    color: "blue",
  },

  CompNotification: {
    position: "absolute",
    top: "0",
    right: "0",
    marginRight: "20px",
    width: "380px",
  },

  ParagraphemenuItem: {
    marginBottom: "5px",
    textAlign: "right",
    ":hover": {
      animationName: [bounceAnimation, opacityAnimation],
      animationDuration: "0.5s",
      animationIterationCount: "3",
      cursor: "pointer",
    },
  },

  ImgagecompNotification: {
    height: "8px",
    width: "auto",
  },

  ButtoncompNotification: {
    padding: "0",
    marginRight: "3%",
    marginTop: "1%",
  },

  ul: {
    "@media (max-width: 600px)": {
      padding: 0,
    },
  },
});

export default Notifications;
