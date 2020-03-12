import React from 'react';
import './budgetPage.css'

class budgetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Chris',
            slider: 50,
            salary: null,
            expense: null,
            savings: null
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(func, wait, immediate) {
        
        const salary = document.getElementById('salary').value;
        const expense = ((salary / 12) * (this.state.slider / 100)).toFixed(2);
        const savings = salary - expense;
        

        
        this.setState({
            salary,
            expense,
            savings
        });
    }

    render() {
        return (
          <div id='budgetPage'>
            <h1>Welcome {this.state.name}!</h1>
            <div>
              <h3>Select Expense Percentage (1% - 30%)</h3>
              <input type='number' id='budgetSliderValue' />
            </div>
            <form id='budgetForm'>
              <div className='formSection'>
                <label>Your Salary $</label>
                <input type='number' id='salary' onChange={this.handleChange} />
              </div>
              <div className='formSection'>
                <label>Your Expense</label>
                <p>{this.state.expense || ''}</p>
              </div>
              <div className='formSection'>
                <label>Your Savings</label>
                <p>{this.state.savings || ''}</p>
              </div>
            </form>
          </div>
        );
    }
}

export default budgetPage;