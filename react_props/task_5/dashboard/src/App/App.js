import PropTypes from "prop-types";
import React from "react";
import Footer from "../Footer /Footer";
import Header from "../Header /Header";
import Login from "../Login /Login";
import Notifications from "../Notifications /Notifications";
import { getLatestNotification } from "../utils/utils";
import "./App.css";
import CourseList from "../CourseList /CourseList";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
