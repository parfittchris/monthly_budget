import React from 'react';
import './savingsPage.css';

class savingsPage extends React.Component {
  redirect() {
    this.props.history.push('/budget')
  }

  logout() {
    this.props.logout();
  }
  
  render() {
    console.log(this.props)
    return (
      <div id='savingsPage'>
        <div id='savingsInfo'>
          <h1>Thank you, {this.props.budget.budgetReducer.name}</h1>
          <div className='savingsInfoItem'>
            <h2>Your Election:</h2>
            <h2>{this.props.budget.budgetReducer.slider}%</h2>
          </div>
          <div className='savingsInfoItem'>
            <h2>Your Salary:</h2>
            <h2>${this.props.budget.budgetReducer.salary}</h2>
          </div>
          <div className='savingsInfoItem'>
            <h2>Your Expense:</h2>
            <h2> ${this.props.budget.budgetReducer.expense}</h2>
          </div>
          <div className='savingsInfoItem'>
            <h2>Your Savings:</h2>
            <h2>${this.props.budget.budgetReducer.savings}</h2>
          </div>
        </div>
        <div id="savingsBtns">
          <button onClick={this.redirect.bind(this)}>Return to Budget</button>
          <button onClick={this.logout.bind(this)}>Logout</button>
        </div>
      </div>
    );
  }
}

export default savingsPage;
