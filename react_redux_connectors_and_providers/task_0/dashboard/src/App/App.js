import React from 'react';
import { connect } from 'react-redux';
import { AppContext, defaultUser, defaultLogOut } from './AppContext';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: defaultLogOut,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        {
          id: 3, type: 'urgent', html: {
            __html: getLatestNotification()
          }
        }
      ]
    };

    this.keydown = this.keydown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      },
      logOut: () => {
        this.setState({
          user: defaultUser,
          logOut: defaultLogOut
        });
      }
    });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  markNotificationAsRead(id) {
    const filteredList = this.state.listNotifications.filter(n => n.id !== id);
    this.setState({listNotifications: filteredList});
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydown);
  }

  keydown(e) {
    if (e.ctrlKey === true && e.key.toLowerCase() === 'h') {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  render() {
    const { displayDrawer, user, logOut, listNotifications } = this.state;
    const context = { user, logOut };

    return (
      <AppContext.Provider value={context}>
        <Notifications
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.app)}>
          <Header></Header>
          <div className={css(styles.body)}>
            {user.isLoggedIn
              ? <BodySectionWithMarginBottom title="Course list" >
                  <CourseList listCourses={this.listCourses} />
                </BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title="Log in to continue" >
                  <Login logIn={this.logIn} />
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
      </AppContext.Provider>
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

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.get('isUserLoggedIn')
  };
}

export default connect(mapStateToProps)(App);
