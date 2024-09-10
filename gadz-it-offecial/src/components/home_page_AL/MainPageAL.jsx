import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './project/Team';
import ProjectHome from './project/ProjectHome';
import CreateProject from './project/CreateProject';
import CreateTeam from './project/CreateTeam';
import Contacts from './contacts/Contacts';
import Chat from './chat/MainChatPage';
import divflexImage from './divflex@3x.png';
import NotificationsIcon from '@mui/icons-material/Notifications';


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

function MainPageAL({ isWhiteMode }) {
  const location = useLocation();

  const [toggleState, setToggleState] = useState('home');
  const [addMember, setAddMember] = useState([]);
  const [contacts, setContacts] = useState(true);

  const handleToggleTabClick = (index) => {
    setToggleState(index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-no-repeat bg-cover bg-top  " style={{ backgroundImage: `${isWhiteMode ? '' : `url(${divflexImage})`}`, }}>
      {location.pathname === '/home/dashboards/project' &&
        <div className="mx-auto flex w-full flex-col px-6 sm:px-8">
          <div className="my-8 flex min-w-0 flex-auto flex-col sm:my-12 sm:flex-row sm:items-center">

            <div className="flex min-w-0 flex-auto items-center">
              <div className="h-16 w-16 flex-0 overflow-hidden rounded-full">
                <Avatar sx={{ width: '64px', height: '64px' }} alt="Remy Sharp" src={brian_hughes} />
              </div>
              <div className="ml-4 flex min-w-0 flex-col">
                <div className="truncate text-2xl font-semibold leading-7 tracking-tight md:text-5xl md:leading-snug">
                  Welcome back, Brian!
                </div>
                <div className="flex items-center text-[14px]">
                  <NotificationsIcon sx={{ width: '20px', height: '20px', color: '#64748b' }} />
                  <div className="text-secondary ml-1.5 truncate leading-6 text-[#64748b]">You have 2 messages and 15 new tasks</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center space-x-3 sm:ml-2 sm:mt-0">
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
      }
      <div className={`-mt-px flex-auto w-full ${location.pathname === '/home/dashboards/project' ? 'border-t pt-4 sm:pt-6' : ''} ${isWhiteMode && location.pathname === '/home/dashboards/project' ? 'bg-[#f1f5f9]' : ''} ${isWhiteMode && location.pathname === '/home/dashboards/project/create-team' ? 'bg-[#ffff]' : ''}  `} /**style={{ borderTop: location.pathname === '/home/dashboards/project' ? '0.8px solid var(--download-4-mystic)' : null }}*/>
        <div className={`w-full ${location.pathname === '/home/dashboards/project' ? 'mx-auto' : ''}`} >
          {location.pathname === '/home/dashboards/project' &&
            <>
              {toggleState === 'home' ?
                <div className="flex flex-col max-w-full sm:px-2">
                  {location.pathname === '/home/dashboards/project' &&
                    <>
                      <div class="flex relative overflow-hidden shrink-0">
                        <Box sx={{ width: '100%', borderBottom: `${isWhiteMode ? '1px solid #e2e8f0' : '1px solid var(--fuse-border)'}`, marginX: '24px' }}>
                          <Tabs
                            value={toggleState}
                            onChange={(_, newValue) => handleToggleTabClick(newValue)}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                          >
                            <Tab value="home" label="Home" sx={{ color: `${isWhiteMode ? '#707886' : '#b6aaba'}`, }} />

                            <Tab value="team" label={<StyledBadge badgeContent={1} color="secondary">Team</StyledBadge>} sx={{ color: `${isWhiteMode ? '#707886' : '#b6aaba'}`, }} ></Tab>
                          </Tabs>
                        </Box>
                      </div>
                      <ProjectHome isWhiteMode={isWhiteMode} />
                    </>
                  }
                </div>
                : null
              }

              {toggleState === 'team' ?
                <div className="flex flex-col max-w-full sm:px-2" >
                  {location.pathname === '/home/dashboards/project' &&
                    <div class="flex relative overflow-hidden shrink-0">
                      <Box sx={{ width: '100%', borderBottom: `${isWhiteMode ? '1px solid #e2e8f0' : '1px solid var(--fuse-border)'}`, marginX: '24px' }}>
                        <Tabs
                          value={toggleState}
                          onChange={(_, newValue) => handleToggleTabClick(newValue)}
                          textColor="secondary"
                          indicatorColor="secondary"
                          aria-label="secondary tabs example"
                        >
                          <Tab value="home" label="Home" sx={{ color: `${isWhiteMode ? '#707886' : '#b6aaba'}`, }} />

                          <Tab value="team" label={<StyledBadge badgeContent={1} color="secondary">Team</StyledBadge>} sx={{ color: `${isWhiteMode ? '#707886' : '#b6aaba'}`, }} ></Tab>
                        </Tabs>
                      </Box>
                    </div>
                  }
                  {location.pathname === '/home/dashboards/project/create-team' ? <CreateTeam setAddMember={setAddMember} addMember={addMember} isWhiteMode={isWhiteMode} /> : <Team addMember={addMember} isWhiteMode={isWhiteMode} />}
                </div>
                : null}</>
          }
          {location.pathname === '/home/dashboards/project/create-project' && <CreateProject />} {/*<CreateProject />*/}
          {location.pathname === '/home/dashboards/project/create-team' && <CreateTeam setAddMember={setAddMember} addMember={addMember} isWhiteMode={isWhiteMode} />}
          {location.pathname === '/home/dashboards/contacts' && <Contacts />}
          {(location.pathname === '/home/dashboards/chat' || location.pathname === '/home/dashboards/chat/groups') && <MainChatPage />}


        </div>
      </div>
    </div >
  );
}

export default MainPageAL;