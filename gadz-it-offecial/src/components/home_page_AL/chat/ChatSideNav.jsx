import React from "react";
import { useTheme } from "@mui/material/styles";

import { Box, Divider, IconButton, Stack } from "@mui/material";
import AntSwitch from "../AntSwitch";

import Logo from "../../../assets/logoBlue1.png";

import useSettings from "../../../hooks/useSettings";
import { Nav_Buttons1, Nav_Buttons2 } from "../../../data";


import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTab } from "../../../redux/slices/app";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/home/dashboards/chat";

    case 1:
      return "/home/dashboards/chat/groups";

    case 2:
      return "/calls";

    case 3:
      return "/starred";

    case 4:
      return "/archived";

    default:
      break;
  }
};

const SideBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { tab } = useSelector((state) => state.app);

  const navigate = useNavigate();

  const { onToggleMode } = useSettings();

  const selectedTab = tab;

  const handleChangeTab = (index) => {
    dispatch(UpdateTab({ tab: index }));
    navigate(getPath(index));
  };

  return (
    <Box
      sx={{

        width: 60,
        borderRight: '0.8px solid #ab0cdf',
        backgroundColor: 'rgba(129, 2, 255, 0.04)',
      }}
    >
      <Stack
        py={3}
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "calc(100vh - 119px)" }}
      >
        <Stack alignItems={"center"} spacing={4}>

          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems={"center"}
            spacing={3}
          >
            {Nav_Buttons1.map((el) => {
              return el.index == selectedTab ? (
                <Box
                  sx={{
                    backgroundColor: 'rgba(129, 2, 255, 1)',
                    borderRadius: 1.5,
                  }}
                  p={0.5}
                >
                  <IconButton
                    onClick={() => {
                      handleChangeTab(el.index);
                    }}
                    sx={{ width: "max-content", color: "#ffffff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    handleChangeTab(el.index);
                  }}
                  sx={{
                    width: "max-content",
                    color: 'rgba(256, 256, 256, 0.5)'
                  }}
                >
                  {el.icon}
                </IconButton>
              );
            })}
          </Stack>
        </Stack>
        <Stack alignItems={"center"} spacing={3}>
          {Nav_Buttons2.map((el) => {
            return el.index == selectedTab ? (
              <Box
                sx={{
                  backgroundColor: 'rgba(129, 2, 255, 1)',
                  borderRadius: 1.5,
                }}
                p={0.5}
              >
                <IconButton
                  onClick={() => {
                    handleChangeTab(el.index);
                  }}
                  sx={{ width: "max-content", color: "#ffffff" }}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  handleChangeTab(el.index);

                  // dispatch(UpdateTab(el.index));
                }}
                sx={{
                  width: "max-content",
                  color: 'rgba(256, 256, 256, 0.5)'
                }}
              >
                {el.icon}
              </IconButton>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;