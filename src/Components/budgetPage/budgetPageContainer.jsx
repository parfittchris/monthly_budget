import { connect } from 'react-redux';
import { userUpdateBudget } from '../../Actions/budgetActions';
import { logout } from '../../Actions/sessionActions';
import budgetPage from './budgetPage';

const mapStateToProps = state => {
  return {
    user: state.sessionsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userUpdateBudget: budget => dispatch(userUpdateBudget(budget)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(budgetPage);
