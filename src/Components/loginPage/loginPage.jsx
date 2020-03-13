import React from 'react';
import GoogleLogin from 'react-google-login';
import './loginPage.css';

class loginPage extends React.Component {

  render() {
    const responseGoogle = response => {
        console.log(response)
     }

     const redirect = response => {
        const user = {
          name: response.profileObj.givenName,
          email: response.profileObj.email
        };

        this.props.login(user)
     }

     return (
       <div id="loginPage">
         <h1 className="loginText">Welcome to Budget Monthly!</h1>
         <h3 className="loginText">Please log in below using your Google Account</h3>
         <div id='loginBtn'>
          <GoogleLogin
            clientId='428362583003-j1lujcao0smc555smf6b0ck703c22h8n.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={redirect}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
         </div>
       </div>
     );
    }
}


export default loginPage;
