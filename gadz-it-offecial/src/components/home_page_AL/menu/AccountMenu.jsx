import * as React from "react";
import { useCallback } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { styled } from "@mui/system";
import Badge from "@mui/material/Badge";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import ChangeAccount from "./ChangeAccount";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [statusEl, setStatusEl] = React.useState(null);
  const [Color, setColor] = React.useState('#22C55E');

  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [openAddAccount, setOpenAddAccount] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const openUser = Boolean(anchorEl);
  const openStatus = Boolean(statusEl);

  const handleLogoutClick = () => {
    window.location.href = '/Logout'
  };

  const handleClickUser = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleHoverStatus = (event) => {
    setStatusEl(event.currentTarget);
  };


  const handleCloseUser = () => {
    setAnchorEl(null);
  };
  const handleCloseStatus = () => {
    setStatusEl(null);
  };

  const handleClickOpen = () => {
    setOpenAddAccount(true);
  };

  const handleCloseAddAcount = (value) => {
    setOpenAddAccount(false);
    setSelectedValue(value);
  };



  const StyledBadgeAvatar = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: Color,
      color: Color,
      boxShadow: `0 0 0 2px #0f172a`,
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

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClickUser}
            sx={{
              width: "25px",
              height: "25px",
              "&:hover": {

                color: "white",
                opacity: "100%",
              },
            }}
          >
            <StyledBadgeAvatar
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"

            >
              <div
                style={{
                  color: "white",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: "0",
                }}
              >
                <AccountCircleOutlinedIcon sx={{ opacity: "70%" }} />
              </div>
            </StyledBadgeAvatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openUser}
        onClose={handleCloseUser}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            height: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
          onClick={handleClickOpen}
        >
          <div style={{ fontSize: "12px" }}>Signed in as</div>
          <div style={{ fontSize: "14px" }}>hughes.brian@company.com</div>
        </MenuItem>
        <ChangeAccount
          selectedValue={selectedValue}
          open={openAddAccount}
          onClose={handleCloseAddAcount}
        />
        <Divider />
        <MenuItem sx={{ height: "48px" }} onClick={handleCloseUser}>
          <AccountCircleOutlinedIcon
            fontSize="small"
            sx={{
              color: "#707070",
              marginRight: "16PX",
            }}
          />{" "}
          Profile
        </MenuItem>
        <MenuItem sx={{ height: "48px" }} onClick={handleCloseUser}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem

          onClick={handleHoverStatus}
          sx={
            statusEl
              ? {
                height: "48px",
                backgroundColor: "#F0F0F0",
              }
              : {
                height: "48px",
              }
          }
        >
          <MoreHorizOutlinedIcon
            sx={{
              fontSize: 14,
              marginLeft: "1px",
              marginRight: "17PX",
              color: "gray",
              border: `2px solid gray `,
              borderRadius: "50%",
            }}
          />{" "}
          Status
          <ArrowRightIcon sx={{ marginLeft: "80px" }} />
        </MenuItem>
        <Divider />
        <MenuItem sx={{ height: "48px" }} onClick={handleLogoutClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
      <Menu
        id="basic-menu"
        anchorEl={statusEl}
        open={openStatus}
        onClose={handleCloseStatus}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ position: "fixed", left: "218px", top: "-40px" }}
      >
        <MenuItem onClick={() => { setColor('#22C55E') }}>
          <FiberManualRecordIcon sx={{ color: "#22C55E" }} />
          Online
        </MenuItem>
        <MenuItem onClick={() => { setColor('#F59E0B') }}>
          <FiberManualRecordIcon sx={{ color: "#F59E0B" }} />
          Away
        </MenuItem>
        <MenuItem onClick={() => { setColor('#EF4444') }}>
          <FiberManualRecordIcon sx={{ color: "#EF4444" }} />
          Busy
        </MenuItem>
        <MenuItem onClick={() => { setColor('#94A3B8') }}>
          <FiberManualRecordIcon sx={{ color: "#94A3B8" }} />
          Invisible
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
