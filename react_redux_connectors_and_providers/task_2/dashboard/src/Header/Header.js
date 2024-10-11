import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import { AppContext } from '../App/AppContext';
import logo from '../assets/holberton-logo.jpg';

export class Header extends React.Component {
  static contextType = AppContext;
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  }
  static defaultProps = {
    isLoggedIn: false,
    user: null,
    logout: () => { }
  }

  render() {
    const { user, logout } = this.props;
    return (
      <>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <div>
            <h1>
              School dashboard
            </h1>
            {user && (
              <section id="logoutSection">
                Welcome {user.email} <a href="#" onClick={logout}>(logout)</a>
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

const mapDispatchToProps = {
  logout
}

function mapStateToProps(state) {
  return {
    user: state.get('user')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
