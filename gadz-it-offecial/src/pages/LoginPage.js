import React, { useState } from 'react';
import './LoginPage.css';
import gadzLogo from '../public/logo-gadz-offeciel.svg';
import githubIcon from '../public/github-icon.svg';
import Xicon from '../public/X-icon-vector.svg';
import MdiUser from '../public/mdiuser.svg';
import LockIcon from '../public/lock-icon.svg';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClear = () => {
    setEmail('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary validation or submit logic here
    console.log('Submitted email:', email);
    console.log('Submitted password:', password);

    // Reset the email input field
    setEmail('');
    setPassword('');
  };
  return (
    <div className="desktop-2">
        <div className="main-parent">
          <div className="main">
            <div className="logo">
              <img className="asset-4-2-1" alt="" src={gadzLogo} />

              <div className="solve-code-optimize-repeat-wrapper">
                <div className="solve-code-optimize">
                  Solve, Code, Optimize, Repeat
                </div>
              </div>
            </div>
            <div className="log-in-wrapper">
              <form className="log-in" onSubmit={handleSubmit}>

                <div className="log-in1">Log in</div>
                <input 
                  className="input" type="email" placeholder='Username or Email' value={email} onChange={handleEmailChange}
                />
                {email && (
                  <img className="clear-icon" alt="" src={Xicon} onClick={handleClear} />
                )}
                {/*<div className="input" placeholder='Username or Email'>
                  <img className="mdiuser-icon" alt="" src={MdiUser} />

                  <div className="text-wrapper">
                    <div className="text">Username or Email</div>
                  </div>
                  <img className="vector-icon" alt="" src={Xicon} />
    </div>*/}
                <input
                  className="input1" type="password" placeholder='Password' value={password} onChange={handlePasswordChange}
                />
                <img className="mdiuser-icon" alt="" src={MdiUser} />
                <img className="lock-icon" alt="" src={LockIcon} />
                
                <div className="forgot-password-parent">
                  <div className='forgot-password-div'>
                    <button className="forgot-password">Forgot password?</button>
                  </div>
                  <div className='button-div'>
                  <button className="button">
                    <div className="label">Sign In</div>
                  </button>
                  </div>
                </div>
                
              </form>
            </div>
            <div className="sign-up">
              <div className="dont-have-an">Don’t have an account?</div>
              <div className='sign-up1-div'>
                <button className="sign-up1">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="footer1">
            <div className="footer2">
              <div className="gadzit-parent">
                <div className="gadzit">Gadz’IT</div>
                <img className="github-icon" alt="" src={githubIcon} />

                <div className="gadzit">Terms and Services</div>
              </div>
              <div className="gadzit">
                Copyright ©2023 Produced by Club Informatique Arts et Metiers
                ENSAM Meknes
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
}

export default LoginPage;