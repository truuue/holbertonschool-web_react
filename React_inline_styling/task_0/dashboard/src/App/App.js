import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utils/utils";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: {
          __html: getLatestNotification(),
        },
      },
    ];
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keydown.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keydown.bind(this));
  }

  keydown(e) {
    if (e.ctrlKey === true && e.key.toLowerCase() === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    return (
      <>
        <Notifications
          listNotifications={this.listNotifications}
        ></Notifications>
        <div className="App">
          <Header></Header>
          <div className="App-body">
            <p>Login to access the full dashboard</p>
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda suscipit ipsam a quos voluptates dolor voluptas, unde
                quis atque, rerum vitae laudantium eius architecto recusandae,
                harum repellat labore sed iusto.
              </p>
            </BodySection>
          </div>
          <div className="App-footer">
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
