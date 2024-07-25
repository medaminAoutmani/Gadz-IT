import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useResponsive from "../../../../hooks/useResponsive";
import { dispatch } from "../../../../redux/store";
import { ToggleSidebarGroup } from "../../../../redux/slices/app";
import { groupList } from "../../../../data";


const Conversation_Menu = [
  {
    title: "Contact info",
  },
  {
    title: "Mute notifications",
  },
  {
    title: "Clear messages",
  },
  {
    title: "Delete chat",
  },
];

export default function GroupHeader() {

  const isMobile = useResponsive("between", "md", "xs", "sm");
  const theme = useTheme();

  const dispatch = useDispatch();

  return (
    <Box
      p={2}
      width={"calc(100% - 32px)"}
      sx={{
        backgroundColor: 'rgba(129, 2, 255, 0.04)',
        boxShadow: "0px 0px 2px #ab0cdf",
      }}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        sx={{ width: "100%", height: "100%" }}
        justifyContent="space-between"
      >
        <Stack
          onClick={() => {
            dispatch(ToggleSidebarGroup());
          }}
          spacing={2}
          direction="row"
        >
          <Box>
            <Avatar
              alt={faker.person.fullName()}
              src={faker.image.avatar()}
            />
          </Box>
          <Stack spacing={0.2} alignItems={'flex-start'}>
            <Typography variant="subtitle2" color={"white"}>
              {faker.helpers.arrayElement(groupList).name}
            </Typography>
            <Typography variant="caption" textAlign={"left"}>You and 250 other</Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={isMobile ? 1 : 3}
        >
          {!isMobile && (
            <IconButton
              sx={{
                color: '#8102ff',
                "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
              }}
            >
              <MagnifyingGlass />
            </IconButton>
          )}
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#ab0cdf' }} /> {/**'#8102ff' */}
          <IconButton
            id="conversation-positioned-button"
            aria-haspopup="true"
            sx={{
              color: '#8102ff',
              "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
            }}
          >
            <CaretDown />
          </IconButton>
          <Menu
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            TransitionComponent={Fade}
            id="conversation-positioned-menu"
            aria-labelledby="conversation-positioned-button"

            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box p={1}>
              <Stack spacing={1}>
                {Conversation_Menu.map((el) => (
                  <MenuItem >
                    <Stack
                      sx={{ minWidth: 100 }}
                      direction="row"
                      alignItems={"center"}
                      justifyContent="space-between"
                    >
                      <span>{el.title}</span>
                    </Stack>{" "}
                  </MenuItem>
                ))}
              </Stack>
            </Box>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  )
}
