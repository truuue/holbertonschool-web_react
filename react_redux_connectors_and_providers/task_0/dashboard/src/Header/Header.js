import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import logo from '../assets/holberton-logo.jpg';

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <div>
            <h1>
              School dashboard
            </h1>
            {user.isLoggedIn && (
              <section id="logoutSection">
                Welcome {user.email} <a href="#" onClick={logOut}>(logout)</a>
              </section>
            )}
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
    fontWeight: 'bold',
    color: '#e0354b',
  },
  logo: {
    height: '200px',
  }
});

export default Header;
