//import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navigation_bar.css';
import logosvg from '../../assets/logoBlue1.png';



import project_hover from '../../assets/SVGproject-hover.svg';
import analytics_hover from '../../assets/SVGanalytics-hover.svg';
import formations_hover from '../../assets/SVGformation-hover.svg';
import chat_hover from '../../assets/SVGchat-hover.svg';
import contacts_hover from '../../assets/SVGcontacts-hover.svg';
import eCommerce_hover from '../../assets/SVGecommerce-hover.svg';
import file_manager_hover from '../../assets/SVGfile-manager-hover.svg';
import help_hover from '../../assets/SVGhelp-hover.svg';
import mailbox_hover from '../../assets/SVGmailbox-hover.svg';
import notes_hover from '../../assets/SVGnotes-hover.svg';
import scrumboard_hover from '../../assets/SVGscrumboard-hover.svg';
import tasks_hover from '../../assets/SVGtasks-hover.svg';
import activities_hover from '../../assets/SVGactivities-hover.svg';
import authentication_hover from '../../assets/SVGauthentication-hover.svg';
import coming_hover from '../../assets/SVGcoming-hover.svg';
import error_hover from '../../assets/SVGerror-hover.svg';



import alert from '../../assets/SVGalert.svg';
import svg from '../../assets/svg.svg';
import alert_hover from '../../assets/SVGalert-hover.svg';
import brian_hughes from '../../assets/brianhughesjpg@2x.png';
import AccountMenu from './menu/AccountMenu';



import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DehazeIcon from '@mui/icons-material/Dehaze';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { Badge as BaseBadge, badgeClasses } from '@mui/base/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import { colors } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Badge from "@mui/material/Badge";







export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navigate = useNavigate();



  const handleClick = () => {
    setHelpOpen(!helpOpen);
  };


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };




  const DrawerList = (
    <Box sx={{ width: 300, backgroundColor: 'primary' }} role="presentation" >
      <List sx={{ color: 'white' }}>
        {["Project", "Analytics"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ marginBottom: '4px' }}>
            <ListItemButton sx={{
              opacity: '50%',
              marginLeft: '10px',
              maxWidth: '280px',
              borderRadius: '10px',
              "&:hover": {
                background: '#ffffff1f', color: 'white', opacity: '100%',
              },
              background:
                (
                  (
                    index === 0
                    &&
                    (
                      location.pathname === '/home/dashboards/project' ||
                      location.pathname === '/home/dashboards/project/create-project' ||
                      location.pathname === '/home/dashboards/project/create-team'
                    )
                  ) ||
                  (
                    index === 1 &&
                    location.pathname === '/home/dashboards/analytics'
                  )
                ) ?
                  '#ffffff1f' :
                  'transparent',
              opacity:
                (
                  (
                    index === 0
                    &&
                    (
                      location.pathname === '/home/dashboards/project' ||
                      location.pathname === '/home/dashboards/project/create-project' ||
                      location.pathname === '/home/dashboards/project/create-team'
                    )
                  ) ||
                  (
                    index === 1 &&
                    location.pathname === '/home/dashboards/analytics'
                  )
                ) ?
                  '100%' :
                  '50%',
            }}
              onClick={() => {
                index % 2 === 0 ?
                  navigate('/home/dashboards/project') :
                  navigate('/home/dashboards/analytics');
                setOpen(false);
              }}
            >
              <ListItemIcon>
                {
                  index % 2 === 0 ?
                    <div class="img1">
                      <img class="svg-icon-1" alt="" src={project_hover} />
                    </div> :
                    <div class="img1">
                      <img class="svg-icon-1" alt="" src={analytics_hover} />
                    </div>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div class="divfuse-vertical-navigation-i">
        <div class="divfuse-vertical-navigation-i1-app">
          <div class="userh2d-1823ff5a">
            <div class="divfuse-vertical-navigation-i3">
              <div class="dashboards">Applications</div>
            </div>
            <div class="divfuse-vertical-navigation-i4">
              <div class="unique-dashboard-designs">
                Custom made application designs
              </div>
            </div>
          </div>
        </div>
      </div>
      <List sx={{ color: 'white' }}>
        {["Formations", "Chat", "Contacts", "ECommerce", "File Manager"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ marginBottom: '4px' }}>
            <ListItemButton
              sx={{
                opacity: '50%',
                marginLeft: '10px',
                maxWidth: '280px',
                borderRadius: '10px',
                "&:hover": { background: '#ffffff1f', color: 'white', opacity: '100%' },
                background:
                  (
                    (
                      index === 0
                      &&
                      location.pathname === '/home/dashboards/formations'
                    ) ||
                    (
                      index === 1 &&
                      (location.pathname === '/home/dashboards/chat' || location.pathname === '/home/dashboards/chat/groups')
                    ) ||
                    (
                      index === 2 &&
                      location.pathname === '/home/dashboards/contacts'
                    ) ||
                    (
                      index === 3 &&
                      location.pathname === '/home/dashboards/ecommerce'
                    ) ||
                    (
                      index === 4 &&
                      location.pathname === '/home/dashboards/file-manager'
                    )
                  ) ?
                    '#ffffff1f' :
                    'transparent',
                opacity:
                  (
                    (
                      index === 0
                      &&
                      location.pathname === '/home/dashboards/formations'
                    ) ||
                    (
                      index === 1 &&
                      (location.pathname === '/home/dashboards/chat' || location.pathname === '/home/dashboards/chat/groups')
                    ) ||
                    (
                      index === 2 &&
                      location.pathname === '/home/dashboards/contacts'
                    ) ||
                    (
                      index === 3 &&
                      location.pathname === '/home/dashboards/ecommerce'
                    ) ||
                    (
                      index === 4 &&
                      location.pathname === '/home/dashboards/file-manager'
                    )
                  ) ?
                    '100%' :
                    '50%',
              }}
              onClick={() => {
                index % 5 === 0 ?
                  navigate('/home/dashboards/formations') : index % 5 === 1 ?
                    navigate('/home/dashboards/chat') : index % 5 === 2 ?
                      navigate('/home/dashboards/contacts') : index % 5 === 3 ?
                        navigate('/home/dashboards/ecommerce') :
                        navigate('/home/dashboards/file-manager');
                setOpen(false);
              }}
            >
              <ListItemIcon>
                {
                  index % 5 === 0 ?
                    <div class="img1">
                      <img class="svg-icon-1" alt="" src={formations_hover} />
                    </div> : index % 5 === 1 ?
                      <div class="img1">
                        <img class="svg-icon-1" alt="" src={chat_hover} />
                      </div> : index % 5 === 2 ?
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={contacts_hover} />
                        </div> : index % 5 === 3 ?
                          <div class="img1">
                            <img class="svg-icon-1" alt="" src={eCommerce_hover} />
                          </div> :
                          <div class="img1">
                            <img class="svg-icon-1" alt="" src={file_manager_hover} />
                          </div>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key='Help Center' disablePadding sx={{ marginBottom: '4px' }}>
          <ListItemButton sx={{
            opacity: '50%',
            marginLeft: '10px',
            maxWidth: '280px',
            borderRadius: '10px',
            "&:hover": { background: '#ffffff1f', color: 'white', opacity: '100%' },
            background: location.pathname === '/home/dashboards/help-center' ? '#ffffff1f' : 'transparent',
            opacity: location.pathname === '/home/dashboards/help-center' ? '100%' : '50%',

          }}
            onClick={handleClick}
          >
            <ListItemIcon>
              <div class="img1">
                <img class="svg-icon-1" alt="" src={help_hover} />
              </div>
            </ListItemIcon>
            <ListItemText primary='Help center' />
            {helpOpen ? <ExpandLess /> : <ExpandMore sx={{ transform: 'rotate(-90deg)' }} />}
          </ListItemButton>

        </ListItem>
        <Collapse in={helpOpen}
          timeout="auto" unmountOnExit
          sx={{
            marginLeft: '10px',
            maxWidth: '280px',
            borderRadius: '10px',
          }}
        >
          <List component="div" disablePadding >
            {["Home", "FAQs", "Guides", "Support"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ marginBottom: '4px' }}>
                <ListItemButton sx={{
                  pl: 4,
                  marginLeft: '40PX',
                  color: 'white',
                  opacity: '50%',
                  "&:hover": { background: '#ffffff1f', color: 'white', opacity: '100%' },
                  borderRadius: '10px',
                  background:
                    (
                      (
                        index === 0
                        &&
                        location.pathname === '/home/dashboards/formations'
                      ) ||
                      (
                        index === 1 &&
                        location.pathname === '/home/dashboards/chat'
                      ) ||
                      (
                        index === 2 &&
                        location.pathname === '/home/dashboards/contacts'
                      ) ||
                      (
                        index === 3 &&
                        location.pathname === '/home/dashboards/ecommerce'
                      )
                    ) ?
                      '#ffffff1f' :
                      'transparent',
                  opacity:
                    (
                      (
                        index === 0
                        &&
                        location.pathname === '/home/dashboards/formations'
                      ) ||
                      (
                        index === 1 &&
                        location.pathname === '/home/dashboards/chat'
                      ) ||
                      (
                        index === 2 &&
                        location.pathname === '/home/dashboards/contacts'
                      ) ||
                      (
                        index === 3 &&
                        location.pathname === '/home/dashboards/ecommerce'
                      )
                    ) ?
                      '100%' :
                      '50%',
                }}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}

          </List>
        </Collapse>
        <ListItem key='Mailbox' disablePadding sx={{ marginBottom: '4px' }}>
          <ListItemButton sx={{
            opacity: '50%',
            marginLeft: '10px',
            maxWidth: '280px',
            borderRadius: '10px',
            "&:hover": { background: '#ffffff1f', color: 'white', opacity: '100%' },
            background: location.pathname === '/home/dashboards/mailbox' ? '#ffffff1f' : 'transparent',
            opacity: location.pathname === '/home/dashboards/mailbox' ? '100%' : '50%',
          }}
          >
            <ListItemIcon>
              <div class="img1">
                <img class="svg-icon-1" alt="" src={mailbox_hover} />
              </div>
            </ListItemIcon>
            <ListItemText primary='Mailbox' />
            <IconButton aria-label="cart" sx={{ backgroundColor: '', }} >
              <StyledBadge badgeContent={4} color="secondary" >

              </StyledBadge>
            </IconButton>

          </ListItemButton>
        </ListItem>
        {["Notes", "Scrumboard", "Tasks"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ marginBottom: '4px' }}>
            <ListItemButton sx={{
              opacity: '50%',
              marginLeft: '10px',
              maxWidth: '280px',
              borderRadius: '10px',
              "&:hover": { background: '#ffffff1f', color: 'white', opacity: '100%' }
            }}
              onClick={() => {
                index % 3 === 0 ?
                  navigate('/home/dashboards/notes') : index % 3 === 1 ?
                    navigate('/home/dashboards/scrumboard') :
                    navigate('/home/dashboards/tasks');
              }}
            >
              <ListItemIcon>
                {
                  index % 3 === 0 ?
                    <div class="img1">
                      <img class="svg-icon-1" alt="" src={notes_hover} />
                    </div> : index % 3 === 1 ?
                      <div class="img1">
                        <img class="svg-icon-1" alt="" src={scrumboard_hover} />
                      </div> :
                      <div class="img1">
                        <img class="svg-icon-1" alt="" src={tasks_hover} />
                      </div>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div class="divfuse-vertical-navigation-i">
        <div class="divfuse-vertical-navigation-i1">
          <div class="userh2d-1823ff5a">
            <div class="divfuse-vertical-navigation-i3">
              <div class="dashboards">Pages</div>
            </div>
            <div class="divfuse-vertical-navigation-i4">
              <div class="unique-dashboard-designs">
                Custom made page designs
              </div>
            </div>
          </div>
        </div>
      </div>
      <List sx={{ color: 'white' }}>
        {["Activities", "Authentication", "Coming Soon", "Error"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ marginBottom: '4px' }}>
            <ListItemButton sx={{
              opacity: '50%',
              marginLeft: '10px',
              maxWidth: '280px',
              borderRadius: '10px',
              "&:hover": { background: '#ffffff1f', color: 'white', opacity: '100%' }
            }}
            >
              <ListItemIcon>
                {
                  index % 4 === 0 ?
                    <div class="img1">
                      <img class="svg-icon-1" alt="" src={activities_hover} />
                    </div> : index % 4 === 1 ?
                      <div class="img1">
                        <img class="svg-icon-1" alt="" src={authentication_hover} />
                      </div> : index % 4 === 2 ?
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={coming_hover} />
                        </div> :
                        <div class="img1">
                          <img class="svg-icon-1" alt="" src={error_hover} />
                        </div>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><DehazeIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div class="fuse-vertical-navigation">
          <div class="divfuse-vertical-navigation-w">
            <div class="divfuse-vertical-navigation-c">
              <div class="divfuse-vertical-navigation-c1">
                <div class="divflex">
                  <div class="spanmdc-tab-text-label">
                    <div class="logosvg">
                      <div class="logosvg-fill">
                        <img
                          class="logosvg-icon"
                          alt=""
                          src={logosvg}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="divflexmargin">
                    <div class="divflex2-nav">
                      <div class="userh2d-1823ff5a">
                        <div class="button-item" >
                          <BadgeAlert badgeContent={0} showZero >
                            <NotificationsNoneIcon sx={{
                              opacity: '70%',
                              width: '25px',
                              height: '25px',
                              borderRadius: '50%',

                            }}
                            />
                          </BadgeAlert>
                        </div>
                      </div>
                      <div class="userh2d-1823ff5a">
                        <div class="button1">
                          <div class="spanrelative">
                            <AccountMenu />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divflex3">
                  <div class="divrelative">
                    <img
                      class="brian-hughesjpg-icon"
                      alt=""
                      src={brian_hughes}
                    />
                  </div>
                  <div class="divflexmargin1">
                    <div class="divflex4">
                      <div class="divw-full">
                        <div class="brian-hughes">Brian Hughes</div>
                      </div>
                      <div class="divw-fullmargin">
                        <div class="divw-full1">
                          <div class="hughesbriancompanycom">
                            hughes.brian@company.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fuse-vertical-navigation-group">
                <div class="divfuse-vertical-navigation-idash">
                  <div class="divfuse-vertical-navigation-i1">
                    <div class="userh2d-1823ff5a">
                      <div class="divfuse-vertical-navigation-i3">
                        <div class="dashboards">Dashboards</div>
                      </div>
                      <div class="divfuse-vertical-navigation-i4">
                        <div class="unique-dashboard-designs">
                          Unique dashboard designs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {DrawerList}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

const blue = {
  500: '#0d9488',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const BadgeAlert = styled(BaseBadge)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  list-style: none;
  font-family: 'IBM Plex Sans', sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 4px;
    right: 1px;
    min-width: 3px;
    width: 10px
    height: auto;
    padding: 0 7px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: ${blue[500]};
    box-shadow: 0px 4px 6x ${theme.palette.mode === 'dark' ? grey[900] : grey[300]};
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  & .${badgeClasses.invisible} {
    display: none;
  }
  `,
);

const StyledBadge = styled(BaseBadge)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  list-style: none;
  font-family: 'IBM Plex Sans', sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 20px;
    height: 22px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: #db2777;
    box-shadow: 0px 4px 6x ${theme.palette.mode === 'dark' ? grey[900] : grey[300]};
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  & .${badgeClasses.invisible} {
    display: none;
  }
  `,
);

