import { el } from '@faker-js/faker'
import MoreVert from '@mui/icons-material/MoreVert'
import { Box, Divider, IconButton, Menu, MenuItem, Link, Stack, Typography, useTheme } from '@mui/material'
import { DownloadSimple, Image } from 'phosphor-react'
import React, { useState, useEffect } from 'react'
import { Message_options } from '../../../data/index'

const DocMsg = ({ starredMsg }) => {
  const [showMoreIcon, setShowMoreIcon] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setIsIconClicked(true);
    setShowMoreIcon(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMessageClose = () => {
    setAnchorEl(null);
    setIsIconClicked(false);
    setShowMoreIcon(false);
  };


  useEffect(() => {
    const messageElement = document.getElementById(`message-${el.id}`);
    if (messageElement) {
      const handleMouseEnter = () => {
        setShowMoreIcon(true);
      };

      const handleMouseLeave = () => {
        if (!isIconClicked) {
          setShowMoreIcon(false);
        }
      };

      messageElement.addEventListener('mouseenter', handleMouseEnter);
      messageElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        messageElement.removeEventListener('mouseenter', handleMouseEnter);
        messageElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [el.id, isIconClicked]);
  return (
    <Stack
      direction='row'
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
        id={`message-${el.id}`}
      >
        {!el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <Box
          p={starredMsg ? 1 : 1.5}
          sx={{
            backgroundColor: el.incoming ? '#64748B' : '#3B82F6',
            borderRadius: 1.5,
            width: 'max-content'
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={starredMsg ? 1 : 2}
              direction="row"
              spacing={starredMsg ? 1 : 3}
              alignItems="center"
              sx={{
                backgroundColor: el.incoming ? '#8996a7' : '#6ca2f9',
                borderRadius: 1

              }}
            >
              <Image size={48} color='white' />
              <Typography variant='caption' color={'white'}>
                Abstract.png
              </Typography>
              <IconButton>
                <DownloadSimple color='#8102ff' />
              </IconButton>
            </Stack>
            <Typography variant='body2' color={'white'}>{el.message}</Typography>
          </Stack>
        </Box>
        {el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <MessageOptions el={el} anchorEl={anchorEl} open={open} onMenuChange={handleMessageClose} />
      </Box>
    </Stack>
  )
}

const LinkMsg = ({ el, starredMsg }) => {
  const [showMoreIcon, setShowMoreIcon] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setIsIconClicked(true);
    setShowMoreIcon(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMessageClose = () => {
    setAnchorEl(null);
    setIsIconClicked(false);
    setShowMoreIcon(false);
  };


  useEffect(() => {
    const messageElement = document.getElementById(`message-${el.id}`);
    if (messageElement) {
      const handleMouseEnter = () => {
        setShowMoreIcon(true);
      };

      const handleMouseLeave = () => {
        if (!isIconClicked) {
          setShowMoreIcon(false);
        }
      };

      messageElement.addEventListener('mouseenter', handleMouseEnter);
      messageElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        messageElement.removeEventListener('mouseenter', handleMouseEnter);
        messageElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [el.id, isIconClicked]);
  return (
    <Stack
      direction='row'
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
        id={`message-${el.id}`}
      >
        {!el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <Box
          p={starredMsg ? 1 : 1.5}
          sx={{
            backgroundColor: el.incoming ? '#64748B' : '#3B82F6',
            borderRadius: 1.5,
            width: 'max-content'
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={starredMsg ? 1 : 2}
              direction="column"
              spacing={starredMsg ? 2 : 3}
              alignItems="flex-start"
              sx={{
                backgroundColor: el.incoming ? '#78869a' : '#5492f8',
                borderRadius: 1

              }}
            >
              <img src={el.preview} alt={el.message} style={{ maxHeight: starredMsg ? 180 : 210, borderRadius: '10px' }} />
              <Stack spacing={2}>
                <Typography variant='subtitle2' color={'white'} >
                  Creating Chat App
                </Typography>
                <Typography
                  variant='subtitle2'
                  component={Link}
                  to="https://www.youtube.com"
                  color={'#1e417b'}
                >
                  www.youtube.com
                </Typography>
              </Stack>
              <Typography variant='body2' color={'white'} >
                {el.message}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        {el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <MessageOptions el={el} anchorEl={anchorEl} open={open} onMenuChange={handleMessageClose} />
      </Box>
    </Stack>
  )
}

const ReplyMsg = ({ el }) => {
  const them = useTheme();
  const [showMoreIcon, setShowMoreIcon] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setIsIconClicked(true);
    setShowMoreIcon(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMessageClose = () => {
    setAnchorEl(null);
    setIsIconClicked(false);
    setShowMoreIcon(false);
  };

  useEffect(() => {
    const messageElement = document.getElementById(`message-${el.id}`);
    if (messageElement) {
      const handleMouseEnter = () => {
        setShowMoreIcon(true);
      };

      const handleMouseLeave = () => {
        if (!isIconClicked) {
          setShowMoreIcon(false);
        }
      };

      messageElement.addEventListener('mouseenter', handleMouseEnter);
      messageElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        messageElement.removeEventListener('mouseenter', handleMouseEnter);
        messageElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [el.id, isIconClicked]);
  return (
    <Stack
      direction='row'
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
        id={`message-${el.id}`}
      >
        {!el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <Box
          p={1.5}
          sx={{
            backgroundColor: el.incoming ? '#64748B' : '#3B82F6',
            borderRadius: 1.5,
            width: 'max-content'
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction="column"
              spacing={3}
              alignItems="center"
              sx={{
                backgroundColor: el.incoming ? '#b2bac5' : '#9dc1fb',
                borderRadius: 1

              }}
            >
              <Typography variant='body2' color={'white'} >
                {el.message}
              </Typography>
            </Stack>
            <Typography variant='body2' color={'white'} textAlign={'start'} >
              {el.reply}
            </Typography>
          </Stack>
        </Box>
        {el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <MessageOptions el={el} anchorEl={anchorEl} open={open} onMenuChange={handleMessageClose} />
      </Box>
    </Stack>
  )
}

const MediaMsg = ({ el, starredMsg }) => {

  const [showMoreIcon, setShowMoreIcon] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setIsIconClicked(true);
    setShowMoreIcon(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMessageClose = () => {
    setAnchorEl(null);
    setIsIconClicked(false);
    setShowMoreIcon(false);
  };

  useEffect(() => {
    const messageElement = document.getElementById(`message-${el.id}`);
    if (messageElement) {
      const handleMouseEnter = () => {
        setShowMoreIcon(true);
      };

      const handleMouseLeave = () => {
        if (!isIconClicked) {
          setShowMoreIcon(false);
        }
      };

      messageElement.addEventListener('mouseenter', handleMouseEnter);
      messageElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        messageElement.removeEventListener('mouseenter', handleMouseEnter);
        messageElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [el.id, isIconClicked]);
  return (
    <Stack
      direction='row'
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
        id={`message-${el.id}`}
      >
        {!el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <Box
          p={1.5}
          sx={{
            backgroundColor: el.incoming ? '#64748B' : '#3B82F6',
            borderRadius: 1.5,
            width: 'max-content'
          }}
        >
          <Stack spacing={1}>
            <img src={el.img} alt={el.message} style={{ maxHeight: starredMsg ? 180 : 210, borderRadius: '10px' }} />
          </Stack>
          <Typography variant='body2' color={'white'} textAlign={'start'} >
            {el.message}
          </Typography>
        </Box>
        {el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <MessageOptions el={el} anchorEl={anchorEl} open={open} onMenuChange={handleMessageClose} />
      </Box>
    </Stack>
  )
}

const TextMsg = ({ el }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMoreIcon, setShowMoreIcon] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setIsIconClicked(true);
    setShowMoreIcon(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMessageClose = () => {
    setAnchorEl(null);
    setIsIconClicked(false);
    setShowMoreIcon(false);
  };

  useEffect(() => {
    const messageElement = document.getElementById(`message-${el.id}`);
    if (messageElement) {
      const handleMouseEnter = () => {
        setShowMoreIcon(true);
      };

      const handleMouseLeave = () => {
        if (!isIconClicked) {
          setShowMoreIcon(false);
        }
      };

      messageElement.addEventListener('mouseenter', handleMouseEnter);
      messageElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        messageElement.removeEventListener('mouseenter', handleMouseEnter);
        messageElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [el.id, isIconClicked]);

  return (
    <Stack direction='row' justifyContent={el.incoming ? "start" : "end"}>
      <Box
        sx={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
        id={`message-${el.id}`}
      >
        {!el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <Box
          p={1.5}
          sx={{
            backgroundColor: el.incoming ? '#64748B' : '#3B82F6',
            borderRadius: 1.5,
            width: 'max-content'
          }}
        >
          <Typography variant='body2' color={'white'}>
            {el.message}
          </Typography>
        </Box>
        {el.incoming && (showMoreIcon || isIconClicked) && (
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              width: '40px',
              height: '40px',
              marginLeft: (el) => (!el.incoming ? '5px' : 'auto'),
              marginRight: (el) => (el.incoming ? 'auto' : '5px'),
              color: '#64748B',
              "&:hover": { backgroundColor: 'rgba(100, 116, 139, 0.1)' }
            }}
          >
            <MoreVert sx={{ color: el.incoming ? '#64748B' : '#3B82F6' }} />
          </IconButton>
        )}
        <MessageOptions el={el} anchorEl={anchorEl} open={open} onMenuChange={handleMessageClose} />

      </Box>
    </Stack >
  );
};


const TimeLine = ({ el, starredMsg }) => {
  return (
    <Stack direction="row" alignItems='center' justifyContent='space-between' >
      <Divider width={starredMsg ? "40%" : "46%"} sx={{ backgroundColor: '#ab0cdf' }} />
      <Typography variant='caption'>{el.text}</Typography>
      <Divider width={starredMsg ? "40%" : "46%"} sx={{ backgroundColor: '#ab0cdf' }} />
    </Stack>
  )
}

const MessageOptions = ({ el, onMenuChange, open, anchorEl }) => {

  const handleMessageClose = () => {
    onMenuChange(null);
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMessageClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: el.incoming ? 'left' : 'right',
        }}
        style={{ left: !el.incoming ? '-35px' : '0', }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem onClick={handleMessageClose}>{el.title}</MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  )
}

export { TextMsg, TimeLine, MediaMsg, ReplyMsg, LinkMsg, DocMsg };