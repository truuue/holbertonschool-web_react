import { AppContext } from '../App/AppContext'
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <div>
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
          {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
