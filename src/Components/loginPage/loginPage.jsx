import React from 'react';
import GoogleLogin from 'react-google-login';

export function loginPage() {
    const responseGoogle = response => {
        console.log(response)
     }

     return (
       <GoogleLogin
         clientId='428362583003-1u60melabveqk6gs57vsgrar0g1vp1dr.apps.googleusercontent.com'
         buttonText='Login'
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
         cookiePolicy={'single_host_origin'}
       />
     );
}


