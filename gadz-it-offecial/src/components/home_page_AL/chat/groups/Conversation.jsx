import React from 'react';

import GroupHeader from './GroupHeader';
import GroupFooter from './GroupFooter';
import useResponsive from '../../../../hooks/useResponsive';

import { Stack, Box } from "@mui/material";
import Messages from '../chats/Messages';


export default function Conversation({ sideBarGroup, }) {

  const isMobile = useResponsive("between", "md", "xs", "sm");



  return (
    <Box className='divflex-chat-content' sx={{ width: sideBarGroup.open ? 'calc(100vw - 836px)' : 'calc(100vw - 516px)', }}>
      <Stack
        sx={{ height: '100%', maxHeight: '100vh', width: isMobile ? '100vw' : '100%' }}
      >
        <GroupHeader />
        <Box sx={{ width: '100%', flexGrow: 1, height: 'calc(100% - 50px)' }} className="box-main-content">
          <Messages starredMsg={false} />
        </Box>
        <GroupFooter />
      </Stack>
    </Box>
  )
}
