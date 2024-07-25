import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './MainPageAL.css';
import Team from './project/Team';
import ProjectHome from './project/ProjectHome';
import CreateProject from './project/CreateProject';
import CreateTeam from './project/CreateTeam';
import Contacts from './contacts/Contacts';
import Chat from './chat/MainChatPage';


import Avatar from '@mui/material/Avatar';
import brian_hughes from '../../assets/brianhughesjpg@2x.png';
import img_svg from '../../assets/img--svg.svg';
import messages from '../../assets/SVGmessages.svg';
import settings from '../../assets/Vectorsettings.svg';
import message_tasks from '../../assets/SVGmessage-tasks.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import Settings from "@mui/icons-material/Settings";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MainChatPage from './chat/MainChatPage';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -14,
    top: 10,
    padding: '0 4px',
  },
}));

function MainPageAL() {
  const location = useLocation();

  const [toggleState, setToggleState] = useState('home');
  const [addMember, setAddMember] = useState([]);
  const [contacts, setContacts] = useState(true);

  const handleToggleTabClick = (index) => {
    setToggleState(index);
  };

  return (
    <div className="divflex5">
      {location.pathname === '/home/dashboards/project' &&
        <div className="divbg-card">
          <div className="divflex6">
            <div className="divflexmargin2">
              <div className="divflex7">
                <div className="divflex8">
                  <div className="divflex-0">
                    <Avatar sx={{ width: '64px', height: '64px' }} alt="Remy Sharp" src={brian_hughes} />
                  </div>
                  <div className="divflexmargin3">
                    <div className="userh2d-1823ff5a">
                      <div className="divtext-2xl">
                        <div className="welcome-back-brian">Welcome back, Brian!</div>
                      </div>
                    </div>
                    <div className="divflexmargin-3">
                      <img className="alert-3" alt="" src={message_tasks} />
                      <div className="you-have-messages-and-tasks">You have 2 messages and 15 new tasks</div>
                    </div>
                  </div>
                </div>
                <div className="divflexmargin4">
                  <Stack direction="row" className="divflex2">
                    <Button
                      variant="contained"
                      startIcon={<EmailIcon />}
                      sx={{
                        width: '137px',
                        height: '40px',
                        borderRadius: '999px',
                        backgroundColor: '#1e293b',
                        '&:hover': {
                          backgroundColor: '#2D3748'
                        }
                      }}
                    >
                      Messages
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<Settings />}
                      sx={{
                        width: '137px',
                        height: '40px',
                        marginLeft: '12px',
                        borderRadius: '999px',
                        backgroundColor: '#8102ff',
                        '&:hover': {
                          backgroundColor: '#9122FF'
                        }
                      }}
                    >
                      Settings
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="divflex-automargin">
        <div className="divflex-auto" style={{ borderTop: location.pathname === '/home/dashboards/project' ? '0.8px solid var(--download-4-mystic)' : null }}>
          <div className="divw-full2">
            {location.pathname === '/home/dashboards/project' &&
              <>
                {toggleState === 'home' ?
                  <div className="mat-tab-group" style={{ marginTop: '1.5rem' }}>
                    {location.pathname === '/home/dashboards/project' &&
                      <div>
                        <div class="mat-tab-header">
                          <Box sx={{ width: '100%', borderBottom: '1px solid var(--fuse-border)', }}>
                            <Tabs
                              value={toggleState}
                              onChange={(_, newValue) => handleToggleTabClick(newValue)}
                              textColor="secondary"
                              indicatorColor="secondary"
                              aria-label="secondary tabs example"
                            >
                              <Tab value="home" label="Home" sx={{ color: "white", opacity: '70%' }} />

                              <Tab value="team" label={<StyledBadge badgeContent={1} color="secondary">Team</StyledBadge>} sx={{ color: "white", opacity: '70%', }} ></Tab>
                            </Tabs>
                          </Box>
                        </div>
                        <ProjectHome />
                      </div>
                    }
                  </div>
                  : null
                }

                {toggleState === 'team' ?
                  <div className="mat-tab-group" style={{ marginTop: '1.5rem' }}>
                    {location.pathname === '/home/dashboards/project' &&
                      <div class="mat-tab-header">
                        <Box sx={{ width: '100%', borderBottom: '1px solid var(--fuse-border)', }}>
                          <Tabs
                            value={toggleState}
                            onChange={(_, newValue) => handleToggleTabClick(newValue)}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                          >
                            <Tab value="home" label="Home" sx={{ color: "white", opacity: '70%' }} />

                            <Tab value="team" label={<StyledBadge badgeContent={1} color="secondary">Team</StyledBadge>} sx={{ color: "white", opacity: '70%', }} ></Tab>
                          </Tabs>
                        </Box>
                      </div>
                    }
                    {location.pathname === '/home/dashboards/project/create-team' ? <CreateTeam setAddMember={setAddMember} addMember={addMember} /> : <Team addMember={addMember} />}
                  </div>
                  : null}</>
            }
            {location.pathname === '/home/dashboards/project/create-project' && <CreateProject />} {/*<CreateProject />*/}
            {location.pathname === '/home/dashboards/project/create-team' && <CreateTeam setAddMember={setAddMember} addMember={addMember} />}
            {location.pathname === '/home/dashboards/contacts' && <Contacts />}
            {(location.pathname === '/home/dashboards/chat' || location.pathname === '/home/dashboards/chat/groups') && <MainChatPage />}

          </div>
        </div>
      </div>
    </div >
  );
}

export default MainPageAL;