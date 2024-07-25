import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import useResponsive from "../../../../hooks/useResponsive";
import { useDispatch } from "react-redux";
import { UpdateSidebarGroupType } from "../../../../redux/slices/app";
import Messages from "../chats/Messages";



const StarredMessages = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");



  return (
    <Box sx={{ width: 320, maxHeight: "100vh", height: 'calc(100vh - 72px)', borderLeft: '0.8px solid #ab0cdf', transition: 'width 0.5s' }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            backgroundColor: 'rgba(129, 2, 255, 0.04)',
            boxShadow: "0px 0px 2px #ab0cdf",
            width: "100%",
          }}
        >
          <Stack
            sx={{ p: 2 }}
            direction="row"
            alignItems={"center"}
            justifyContent="flex-start"
            spacing={6}
            height={'43px'}
          >
            <IconButton
              sx={{
                color: '#8102ff',
                "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
              }}
              onClick={() => {
                dispatch(UpdateSidebarGroupType("GROUP"));
                setStarredMsg(false)
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowX: "scroll",
            overflowX: 'hidden',
            marginTop: '10px',
            paddingTop: '8px',
            '&::-webkit-scrollbar': {
              width: '4px'
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent'
            },
            '&::-webkit-scrollbar-corner': {
              backgroundColor: 'transparent'
            },
          }}
          padding={0}
        >
          <Messages padding={0} starredMsg={true} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessages;