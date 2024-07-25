import React, { useState } from "react";
import { Box, Stack, Avatar, Button, Divider, IconButton, Typography, Slide, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X, } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../../../../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../AntSwitch";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block this contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this Contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const DeleteChatDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete this chat</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this chat?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};


const ContactInfo = () => {

  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);
  }
  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  return (
    <Box sx={{ width: 320, maxHeight: "100vh", height: 'calc(100vh - 72px)', borderLeft: '0.8px solid #ab0cdf', transition: 'width 0.5s' }}>
      <Stack sx={{ height: "100%" }}>
        {/**Header */}
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
            justifyContent="space-between"
            spacing={3}
            height={'43px'}
          >
            <Typography variant="subtitle1" color="white" sx={{ fontWeight: '500' }}>Contact Info</Typography>
            <IconButton
              sx={{
                color: '#8102ff',
                "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
              }}
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>
        {/**body */}
        <Stack
          sx={{
            height: "calc(100vw - 250px)",
            flexGrow: 1,
            marginTop: '8px',
            display: 'flex',
            borderLeft: '0.8px solid #ab0cdf',
            transition: 'width 0.5s',
            overflowX: 'scroll',
            overflowX: 'hidden',
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
          p={3}
          spacing={2}
        >
          <Stack alignItems="center" direction="column" spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.person.fullName()}
              sx={{ height: 160, width: 160 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" color="white" fontSize={'16px'} fontWeight={500} lineHeight={'24px'}>
                {faker.person.fullName()}
              </Typography>
              <Typography variant="body3" fontWeight={500}>
                {"Electromedical Equipment Technicians"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Stack alignItems={"center"} spacing={1}>
              <IconButton sx={{
                color: '#8102ff',
                "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
              }}>
                <Phone />
              </IconButton>

              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack alignItems={"center"} spacing={1}>
              <IconButton sx={{
                color: '#8102ff',
                "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
              }}>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)' }} />
          <Stack spacing={0.5} alignItems="flex-start">
            <Typography variant="article" color={'white'} fontWeight={400} fontSize={16}>
              About
            </Typography>
            <Typography variant="body2" fontWeight={300}>
              Imagination is the only limit
            </Typography>
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)' }} />
          <Stack spacing={0.5} alignItems="flex-start">
            <Typography variant="article" color={'white'} fontWeight={400} fontSize={16}>
              Email
            </Typography>
            <Typography variant="body2" fontWeight={300}>
              bernardlangley@mail.com
            </Typography>
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)' }} />
          <Stack spacing={0.5} alignItems="flex-start">
            <Typography variant="article" color={'white'} fontWeight={400} fontSize={15}>
              Phone number
            </Typography>
            <Typography variant="body2" fontWeight={300}>
              {faker.phone.number()}
            </Typography>
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)' }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links & Docs</Typography>
            <Button

              onClick={() => {
                dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack direction={"row"} alignItems="center" spacing={2} width={'100%'}>
            {[1, 2, 3].map((el) => (
              <Box >
                <img src={faker.image.food()} alt={faker.person.fullName()} width={'80px'} />
              </Box>
            ))}
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)' }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>

            <IconButton
              sx={{
                color: '#8102ff',
                "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
              }}
              onClick={() => {
                dispatch(UpdateSidebarType("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)' }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)' }} />
          <Typography variant="body2" textAlign={'start'}>1 group in common</Typography>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Avatar src={faker.image.url()} alt={faker.person.fullName()} />
            <Stack direction="column" spacing={0.5}>
              <Typography variant="subtitle2" textAlign={'start'}>Camel’s Gang</Typography>
              <Typography variant="caption" textAlign={'start'}>
                Owl, Parrot, Rabbit , You
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)' }} />
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Button
              onClick={() => {
                setOpenBlock(true);
              }}
              fullWidth
              startIcon={<Prohibit />}
              variant="outlined"
            >
              Block
            </Button>
            <Button
              onClick={() => {
                setOpenDelete(true);
              }}
              fullWidth
              startIcon={<Trash />}
              variant="outlined"
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} />}
      {openDelete && <DeleteChatDialog open={openDelete} handleClose={handleCloseDelete} />}
    </Box>
  )
}

export default ContactInfo