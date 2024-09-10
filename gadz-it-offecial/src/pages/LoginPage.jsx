import React, { useState } from 'react';
import './LoginPage.css';
import gadzLogo from '../public/logo-gadz-offeciel.svg';
import githubIcon from '../public/github-icon.svg';
import Xicon from '../public/X-icon-vector.svg';
import MdiUser from '../public/mdiuser.svg';
import LockIcon from '../public/lock-icon.svg';
import { TextField, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';


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
    if (email === 'admin@gmail.com' && password === 'admin') {
      window.location.href = '/home/dashboards/project'

    }
    console.log('Submitted email:', email);
    console.log('Submitted password:', password);

    // Reset the email input field
    setEmail('');
    setPassword('');
  };
  return (
    <div className="relative flex flex-col items-center justify-center sm:justify-center w-full h-[100vh] lg:h-full overflow-hidden lg:overflow-scroll lg:overflow-x-hidden text-[20px] text-[#f9f9f9] bg-[#0f0e11] text-center p-y-10 gap-10 sm:gap-8 lg:gap-10">
      <div className="relative flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-6 w-full ">
        <div className="flex flex-col items-center justify-center w-[250px] lg:w-[25%] xl:w-[30%] text-base gap-[10px] p-2 mb-[10px] sm:mb-0">
          <img className="relative object-cover" alt="" src={gadzLogo} />
          <div className="relative flex text-xs md:text-sm lg:text-base">
            Solve, Code, Optimize, Repeat
          </div>

        </div>

        <form className="relative flex items-center justify-center w-[90%] sm:w-[400px] lg:w-[500px] h-[260px] sm:h-[320px] lg:h-[340px] bg-[#1d1f24] rounded-3xl sm:rounded-[40px] gap-4 sm:gap-6" onSubmit={handleSubmit}>
          <div className='relative flex flex-col items-center justify-evenly w-[90%] sm:w-[340px] lg:w-[400px] h-full'>

            <div className="relative text-3xl sm:text-5xl  font-[Khand] font-medium">Log in</div>
            <input
              className="w-full px-10 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm text-black focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email" placeholder="Email" onChange={handleEmailChange} />
            <input
              className="w-full px-10 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm text-black focus:outline-none focus:border-gray-400 focus:bg-white "
              type="password" placeholder="Password" onChange={handlePasswordChange} />

            <img className="absolute w-[22px] h-[22px] top-[81px] sm:top-[119px] left-[10px] " alt="" src={MdiUser} />
            <img className="absolute w-[20px] h-[20px] top-[149px] sm:top-[201px] left-[10px] " alt="" src={LockIcon} />

            <div className="relative w-full flex flex-row items-center justify-between px-2">
              <button className="relative cursor-pointer font-extralight text-gray-400 text-base hover:text-blue-400 hover:underline duration-300">Forgot password?</button>
              <button className="w-[116px] h-[44px] text-xl text-[#f9f9f9] font-semibold font-[Khand] bg-gradient-to-r from-[#d68485] via-[#c05ad6]  to-[#7614fb] text-center rounded-2xl hover:from-[#D86D82] hover:via-[#B04CD4] hover:to-[#4912d3] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2  focus:ring-pink-300" onClick={handleSubmit} >
                Sign In
              </button>
            </div>
          </div>
        </form>

        <div className="relative flex flex-row items-center justify-center w-[90%] sm:w-[400px] lg:w-[500px] h-[60px] bg-[#1d1f24] rounded-2xl sm:rounded-[40px] p-3 gap-4 ">
          <div className="relative text-lg font-extralight">Don’t have an account?</div>
          <button className="relative cursor-pointer font-bold text-lg text-[#4a88cd] transition-all duration-300 hover:underline hover:text-blue-500">Sign Up</button>
        </div>
      </div>
      <div className="flex flex-row w-[380px] items-center justify-center text-sm mt-[20px] sm:mt-0">
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
  )

}

export default LoginPage;