
import * as React from 'react';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import logo from '../public/logo-gadz-offeciel.svg';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";





const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  color: 'white',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function LogoutPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate('/home');
    }, 5000); //5000

    return () => {
      clearInterval(timer);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className='relative items-center justify-center w-full h-[100vh] text-md text-[Inter] '>
      <Box
        className='flex items-center justify-center h-full '

      >
        <DemoPaper
          variant="outlined"

          sx={{
            backgroundColor: '#1d1f24',
            borderRadius: '16px',
            width: 'auto',
            height: 'auto'
          }}
        >
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <img className='relative flex w-[70px] h-auto ' src={logo} alt="" />
            <Typography
              gutterBottom
              sx={{
                marginTop: '32px',
                marginBottom: '0',
                height: '40px',
                fontSize: '32px',
                fontWeight: '800',
                letterSpacing: '-1px',
                lineHeight: '40px',
                fontFamily: ' Inter var, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";'
              }}
            >
              You Have Signed Out!
            </Typography>
            <Typography
              gutterBottom
              sx={{
                marginTop: '2px',
                marginBottom: '0',
                height: '21px',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '21px',
                fontFamily: ' Inter var, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";'
              }}
            >
              Redirecting in {countdown} seconds
            </Typography>

            <Typography
              gutterBottom
              sx={{
                color: '#94A3B8',
                marginTop: '32px',
                marginBottom: '0',
                height: '19.5px',
                fontSize: '13px',
                fontWeight: '500',
                lineHeight: '19.5px',
                fontFamily: ' Inter var, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";'
              }}
            >
              Go to
              <Link
                href="/Login"
                underline="hover"
                sx={{
                  marginLeft: '4px',
                  color: '#6366F1',

                }}
              >
                sign in
              </Link>
            </Typography>
          </div>
        </DemoPaper>
      </Box>

    </div >
  )
}
