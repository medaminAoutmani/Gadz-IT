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
import badge from '../../../../assets/tick-mark.png'
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useResponsive from "../../../../hooks/useResponsive";
import { dispatch } from "../../../../redux/store";
import { ToggleSidebar } from "../../../../redux/slices/app";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px rgba(171, 12, 223, 0.25)`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

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

export default function ChatHeader() {

  const isMobile = useResponsive("between", "md", "xs", "sm");
  const theme = useTheme();

  const dispatch = useDispatch();

  return (
    <Box
      p={2}
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
            dispatch(ToggleSidebar());
          }}
          spacing={2}
          direction="row"
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar
                alt={faker.person.fullName()}
                src={faker.image.avatar()}
              />
            </StyledBadge>
          </Box>
          <Stack spacing={0.2} alignItems={'flex-start'}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="subtitle2" color={"white"} marginRight={'10PX'}>
                {faker.person.fullName()}
              </Typography>
              <img src={badge} width={16} height={16} />
            </Box>
            <Typography variant="caption" textAlign={"left"}>Online</Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={isMobile ? 1 : 3}
        >
          <IconButton
            sx={{
              color: '#8102ff',
              "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
            }}
          >
            <VideoCamera />
          </IconButton>
          <IconButton
            sx={{
              color: '#8102ff',
              "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
            }}
          >
            <Phone />
          </IconButton >
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
