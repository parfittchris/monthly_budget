import { connect } from 'react-redux';
import { userUpdateBudget } from '../../Actions/budgetActions';
import budgetPage from './budgetPage';

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userUpdateBudget: budget => dispatch(userUpdateBudget(budget))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(budgetPage);
