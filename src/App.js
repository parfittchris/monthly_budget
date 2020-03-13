import React from 'react';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store/store';

import loginPage from './Components/loginPage/loginPageContainer';
import budgetPage from './Components/budgetPage/budgetPageContainer';
import savingsPage from './Components/savingsPage/savingsPageContainer';

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route exact path='/' component={loginPage}></Route>
              <Route path='/budget' component={budgetPage}></Route>
              <Route path='/savings' component={savingsPage}></Route>
            </Switch>
          </HashRouter>
        </Provider>
      </div>
  );
}

export default App;
