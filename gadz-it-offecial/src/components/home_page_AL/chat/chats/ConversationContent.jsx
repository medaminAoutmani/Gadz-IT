import React from 'react';
import './ConversationContent.css';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import useResponsive from '../../../../hooks/useResponsive';

import { Stack, Box } from "@mui/material";
import Messages from './Messages';


export default function ConversationContent({ sideBar, }) {

  const isMobile = useResponsive("between", "md", "xs", "sm");



  return (
    <Box className='divflex-chat-content' sx={{ width: sideBar.open ? 'calc(100vw - 836px)' : 'calc(100vw - 516px)', }}>
      <Stack
        sx={{ height: '100%', maxHeight: '100vh', width: isMobile ? '100vw' : '100%' }}
      >
        <ChatHeader />
        <Box sx={{ width: '100%', flexGrow: 1, height: 'calc(100% - 50px)' }} className="box-main-content">
          <Messages starredMsg={false} />
        </Box>
        <ChatFooter />
      </Stack>
    </Box>
  )
}
