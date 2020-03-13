import { connect } from 'react-redux';
import savingsPage from './savingsPage';

const mapStateToProps = state => {
  return {
    budget: state
  };
};

export default connect(mapStateToProps, null)(savingsPage);
