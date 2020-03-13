import React from 'react';
import './App.css';
import { Switch, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './Util/route_util'

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
              <ProtectedRoute path='/budget' component={budgetPage} />
              <ProtectedRoute path='/savings' component={savingsPage} />
              <AuthRoute component={loginPage} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
  );
}

export default App;
