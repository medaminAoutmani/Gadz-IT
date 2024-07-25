import { Component } from 'react'
import './QuickChat.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';

import svg1 from '../../assets/img--svg.svg';
import male_02 from '../../assets/male02jpg@2x.png';
import male_12 from '../../assets/male12jpg@2x.png';
import male_06 from '../../assets/male06jpg@2x.png';
import female_04 from '../../assets/female04jpg@2x.png';
import male_11 from '../../assets/male11jpg@2x.png';
import male_17 from '../../assets/male17jpg@2x.png';
import female_02 from '../../assets/female02jpg@2x.png';
import female_05 from '../../assets/female05jpg@2x.png';
import female_07 from '../../assets/female07jpg@2x.png';
import female_09 from '../../assets/female09jpg@2x.png';
import female_13 from '../../assets/female13jpg@2x.png';
import female_16 from '../../assets/female16jpg@2x.png';
import male_09 from '../../assets/male09jpg@2x.png';





export default function QuickChat() {
  const chatUsers = [
    { name: 'Holt Manning', image: male_02 },
    { name: 'Herring Gonzales', image: male_12 },
    { name: 'Hutchinson Levy', image: male_06 },
    { name: 'Johnnie Cleveland', image: female_04 },
    { name: 'Adam Fletcher', image: '/image' },
    { name: 'Maldonado Rodriquez', image: male_11 },
    { name: 'Maryann Mcintyre', image: female_02 },
    { name: 'Ofelia Ratliff', image: female_05 },
    { name: 'Misty Ramsey', image: female_07 },
    { name: 'Megan Suarez', image: female_09 },
    { name: 'Meyer Roach', image: '/image' },
    { name: 'Johnston Riddle', image: male_09 },
  ];

  return (
    <div className="quick-chat">
      <div className="divfixed">
        <div className="divflex12">
          <div className="divquick-chat-header">
            <div className="divflex13">
              <div className="divflex14">
                <img
                  className="img-svg4"
                  alt=""
                  src={svg1}
                />
              </div>
            </div>
          </div>
          <Box sx={{ width: '100%', backgroundColor: 'transparent' }}>
            <List sx={{ left: '0', width: '100%', backgroundColor: 'transparent', padding: '0' }}>
              {chatUsers.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton sx={{
                    height: '56px',
                    padding: '12px',
                    "&:hover": { background: 'var(--color-gray-700)', color: 'white', opacity: '100%', }
                  }}

                  >
                    <Avatar alt={item.name} src={item.image} sx={{ width: '32px', height: '32px' }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </div>
      </div>
    </div>
  )
}

