import React from "react";
import SignIn from "../../componetns/sign-in/sign-in.component";
import SignUp from "../../componetns/sign-up/sign-up.component";
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpComponent = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpComponent;
