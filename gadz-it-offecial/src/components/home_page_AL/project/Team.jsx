import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Team.css';
//import { addMemberArray } from './CreateTeam';

import asset_12gt from '../../../assets/asset-12gt-1@2x.png';
import { experimentalStyled as styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import male_02 from '../../../assets/male02jpg@2x.png';
import male_12 from '../../../assets/male12jpg@2x.png';
import male_06 from '../../../assets/male06jpg@2x.png';
import female_04 from '../../../assets/female04jpg@2x.png';
import male_11 from '../../../assets/male11jpg@2x.png';
import male_17 from '../../../assets/male17jpg@2x.png';
import female_02 from '../../../assets/female02jpg@2x.png';
import female_05 from '../../../assets/female05jpg@2x.png';
import female_07 from '../../../assets/female07jpg@2x.png';
import female_09 from '../../../assets/female09jpg@2x.png';


let list = [];
//list = [...addMemberArray]


/** 
const list = [
  {
    id: 1,
    name: "John",
    gender: "M",
    title: 'Fundraising Director',
    image: male_02,
  },
  {
    id: 2,
    name: "Mary",
    gender: "F",
    title: 'Fundraising Director',
    image: female_02,
  },
  {
    id: 3,
    name: "Thomas",
    gender: "M",
    title: 'Insurance Analyst',
    image: male_06,
  },
  {
    id: 4,
    name: "Sandra",
    gender: "F",
    title: 'Track Service Worker',
    image: female_05,
  },
  {
    id: 5,
    name: "Nadia",
    gender: "F",
    title: 'Track Service Worker',
    image: female_09,
  },
  {
    id: 6,
    name: "Jack",
    gender: "M",
    title: 'Track Service Worker',
    image: male_17,
  },
  {
    id: 7,
    name: "Tom",
    gender: "M",
    title: 'Track Service Worker',
    image: male_11,
  },
  {
    id: 8,
    name: "Kyla",
    gender: "F",
    title: 'Track Service Worker',
    image: female_04,
  },
  {
    id: 9,
    name: "Lamar",
    gender: "M",
    title: 'Track Service Worker',
    image: male_12,
  },
  {
    id: 10,
    name: "Susan",
    gender: "F",
    title: 'Track Service Worker',
    image: female_07,
  },
];*/



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#39245a',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '16px'
}));


function Team({ addMember }) {
  const [noTeam, setNoTeam] = useState(true); /** true */

  const isTeamEmpty = addMember.length === 0;

  const navigate = useNavigate();

  const handleNavigateCreateTeam = () => {
    navigate('/home/dashboards/project/create-team');
  };


  return (
    <div class="divmat-mdc-tab-body-wrapper">
      {isTeamEmpty ?
        <div class="tabpanel">
          <div class="divmat-mdc-tab-body-content">
            <div class="divgrid">
              <div class="divflex11">
                <div class="frame-div">
                  <div
                    class="you-dont-have-a-team-create-parent"
                  >
                    <div class="you-dont-have">
                      You Don't Have a Team? Create
                    </div>
                    <div class="one">One!</div>
                    <div class="a-guide-to">
                      A Guide to Building Your Dream Project
                      Team
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    style={{ textTransform: 'none' }}
                    sx={{
                      width: '208px',
                      height: '65px',
                      borderRadius: '999px',
                      backgroundColor: 'var(--color-crimson-200)',
                      fontSize: 'var( --font-size-6xl)',
                      lineHeight: '16.5px',
                      letterSpacing: '-0.4px',
                      fontWeight: '400',
                      '&:hover': {
                        backgroundColor: '#e9176d'
                      }
                    }}
                    onClick={handleNavigateCreateTeam}
                  >
                    New Team
                  </Button>
                </div>
              </div>
              <div class="you-dont-have-a-team-create-parent">
                <img
                  class="asset-1-2-gt-1"
                  alt=""
                  src={asset_12gt}
                />
              </div>
            </div>
          </div>
        </div>
        :
        <div className="tabpanel">
          <Box className="divmat-mdc-tab-body-content">
            <Box className="divmat-grid">
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                {addMember.map((item, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item sx={{ height: '312px' }}>
                      <Box sx={{ width: '262px', height: '194px', padding: '32px' }}>
                        <Avatar alt={item.name} src={item.image} sx={{ margin: '0 67px', width: '128px', height: '128px' }} />
                        <Typography sx={{ marginTop: '24px', fontSize: '14px', fontWeight: '500', color: 'white' }}>{item.name}</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#94A3B8' }}>{item.title}</Typography>
                      </Box>
                      <Box sx={{ width: '100%', height: '53px', borderTop: '0.8px solid gray', }}>
                        <ButtonGroup
                          variant="text"
                          aria-label="Basic button group"
                          color='secondary'
                          sx={{
                            width: '100%',
                            height: '100%',
                            ".MuiButtonGroup-grouped:not(:last-of-type)": {
                              borderColor: "gray",
                            },
                          }}
                        >
                          <Button sx={{ width: '50%', borderColor: 'gray', color: 'white' }}>
                            <EmailIcon sx={{ color: '#94A3B8' }} />
                            <div style={{ marginLeft: '8px' }}>Email</div>
                          </Button>
                          <Button sx={{ width: '50%', color: 'white' }}>
                            <CallIcon sx={{ color: '#94A3B8' }} />
                            <div style={{ marginLeft: '8px' }}>Call</div>
                          </Button>
                        </ButtonGroup>
                      </Box>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </div>
      }
    </div >
  )
}

export default Team;