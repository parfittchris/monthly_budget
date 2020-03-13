import { connect } from 'react-redux';
import { logout } from '../../Actions/sessionActions';
import savingsPage from './savingsPage';


const mapStateToProps = state => {
  return {
    budget: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(savingsPage);
