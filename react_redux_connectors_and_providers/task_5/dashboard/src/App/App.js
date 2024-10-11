import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { AppContext } from './AppContext';

export class App extends React.Component {
  static contextType = AppContext;
  static propTypes = {
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func,
    login: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    user: PropTypes.object
  }
  static defaultTypes = {
    displayDrawer: false,
    displayNotificationDrawer: () => { },
    hideNotificationDrawer: () => { },
    login: () => { },
    isLoggedIn: false,
    user: null,
  }

  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
  }

  render() {
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer, isLoggedIn, login } = this.props;

    return (
      <>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        <div className={css(styles.app)}>
          <Header></Header>
          <div className={css(styles.body)}>
            {isLoggedIn
              ? <BodySectionWithMarginBottom title="Course list" >
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title="Log in to continue" >
                <Login logIn={login} />
              </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit ipsam a quos voluptates dolor voluptas, unde quis atque, rerum vitae laudantium eius architecto recusandae, harum repellat labore sed iusto.</p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '95vh',
  },
  body: {
    margin: '2.5rem',
    flexGrow: 1,
  },
  footer: {
    borderTop: '3px solid #e0354b',
    textAlign: 'center',
    fontStyle: 'italic',
  }
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest
}

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
    user: state.ui.get('user')
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
