import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFullYear, getFooterCopy } from '../utils/utils';

export function Footer({ isLoggedIn }) {
  return (
    <div>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {isLoggedIn && <p><a href="#">Contact us</a></p>}
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.object
}

Footer.defaultProps = {
  user: null
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn')
  }
}

export default connect(mapStateToProps)(Footer);
