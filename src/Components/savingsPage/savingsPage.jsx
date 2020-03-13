import React from 'react';
import './savingsPage.css';

class savingsPage extends React.Component {
  redirect() {
    this.props.history.push('/budget')
  }
  
  render() {
    return (
      <div id='savingsPage'>
        <div id='savingsInfo'>
          <h1>Thank you {this.props.budget.name}</h1>
          <div className='savingsInfoItem'>
            <h2>Your Election:</h2>
            <h2>{this.props.budget.slider}%</h2>
          </div>
          <div className='savingsInfoItem'>
            <h2>Your Salary:</h2>
            <h2>${this.props.budget.salary}</h2>
          </div>
          <div className='savingsInfoItem'>
            <h2>Your Expense:</h2>
            <h2> ${this.props.budget.expense}</h2>
          </div>
          <div className='savingsInfoItem'>
            <h2>Your Savings:</h2>
            <h2>${this.props.budget.savings}</h2>
          </div>
        </div>
        <button onClick={this.redirect.bind(this)}>Return to Budget</button>
      </div>
    );
  }
}

export default savingsPage;
