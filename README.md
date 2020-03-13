# Budget Maker - Help budget your monthly income!

## Background and Overview
With the Budget Maker, simply input your yearly salary and a percentage to take out, and the app will automatically calculate your monthly expenses and savings. After submitting your choices, the app confirms your inputs. This app was built using the Create React App.

## Features
The Budget Maker App has the following features:
  * Google authentication that must be passed before the app can be used
  * Budget breakdown featuring gross salary input field and percentage slider
  * Login and Logout features
  
![wire frame](https://github.com/parfittchris/monthly_budget/blob/master/assets/appScreenshot.png)

## How to install and run
Clone the repo to your local machine and open the application in your choice of code editor. Ensure Node.js is installed and then type 'npm run deploy' in the terminal directory of where the package.json is located. Press 'Enter' and the app will open up in localhost automatically.

## Code Sample
Setting Inputs and Debounce method. The set inputs method takes the salary and percentage choices made by the user and calculates the expense and savings fields, outputting them to the screen. The numbers are automatically generated as the user types in their salary. I also added a debounce method that holds on setting the values until 750ms have passed without user intervention. This is allows the user to input their entire salary before the function runs.


```debounce(func, wait, immediate) {
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
 ```
 ### Future Additions
 * Add more criteria for more effective filtering
 * Add option to increase breakdown to weeks or days
