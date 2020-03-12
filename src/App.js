import React from 'react';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom'

import budgetPage from './Components/budgetPage/budgetPage';
import savingsPage from './Components/savingsPage/savingsPage';

// import GoogleLogin from 'react-google-login';

// const responseGoogle = response => {
//   console.log(response)
// }

{/* <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */
  }


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/budget' component={budgetPage}></Route>
          <Route path='/savings' component={savingsPage}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
