import { connect } from 'react-redux';
import { login } from '../../Actions/sessionActions';
import loginPage from './loginPage';


const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(loginPage);
