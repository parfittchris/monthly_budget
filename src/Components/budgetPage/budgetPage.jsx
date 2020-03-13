import React from 'react';
import './budgetPage.css'
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class budgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      slider: 1,
      salary: null,
      expense: null,
      savings: null
    };

    this.debounce = this.debounce.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  // debounce method on salary input change to only
  // update when user has stopped typing

  debounce(func, wait, immediate) {
    let timeout;

    return function executedFunction() {
      let context = this;
      let args = arguments;

      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  setInputs() {
    const salary = document.getElementById('salary').value;
    const expense = (salary / 12) * (this.state.slider / 100);
    const savings = salary / 12 - expense;

    if (salary) {
      this.setState({
        salary: parseFloat(salary).toFixed(2),
        expense: parseFloat(expense).toFixed(2),
        savings: savings.toFixed(2)
      });
    }
  }

  logout() {
    this.props.logout();
  }

  handleChange(e) {
    this.setState({
      slider: e
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.salary) {
      this.props.userUpdateBudget(this.state);
      this.props.history.push('/savings');
    } else {
      alert('Please enter a salary');
    }
  }

  render() {
    let expense = '';
    let savings = '';

    if (this.state.salary) {
      expense = '$ ' + this.state.expense;
    }

    if (this.state.salary) {
      savings = '$ ' + this.state.savings;
    }

    return (
      <div id='budgetPage'>
        <h1>Welcome {this.state.name}!</h1>
        <div>
          <h3>Select Expense Percentage (1% - 30%)</h3>
          <div id='slider'>
            <Slider
              value={this.state.slider}
              orientation='horizontal'
              onChange={this.handleChange}
              onChangeComplete={this.debounce(this.setInputs.bind(this), 750)}
              min={1}
              max={30}
              step={1}
            />
          </div>
          <h3>Percentage: {this.state.slider}%</h3>
        </div>
        <form id='budgetForm'>
          <div className='formSection'>
            <label>Your Salary:</label>
            <input
              type='number'
              id='salary'
              onChange={this.debounce(this.setInputs.bind(this), 750)}
            />
          </div>
          <div className='formSection'>
            <p>Your Expense:</p>
            <p>{expense}</p>
          </div>
          <div className='formSection'>
            <p>Your Savings:</p>
            <p>{savings}</p>
          </div>
          <div id='budgetBtns'>
            <button onClick={this.handleSubmit}>Submit</button>
            <button onClick={this.logout}>Logout</button>
          </div>
        </form>
      </div>
    );
  }
}

export default budgetPage;