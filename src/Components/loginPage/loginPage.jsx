import React from 'react';
import GoogleLogin from 'react-google-login';

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
       <GoogleLogin
         clientId='428362583003-j1lujcao0smc555smf6b0ck703c22h8n.apps.googleusercontent.com'
         buttonText='Login'
         onSuccess={redirect}
         onFailure={responseGoogle}
         cookiePolicy={'single_host_origin'}
       />
     );
    }
}


export default loginPage;
