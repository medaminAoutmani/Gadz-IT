import { faker } from '@faker-js/faker';
import { Avatar, Box, IconButton, Stack, Typography, Chip, Divider, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import React from 'react';

import { useDispatch } from '../../../redux/store';

const ContactDetails = ({ onClose }) => {

  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 640, maxHeight: "100vh", height: 'calc(100vh - 72px)', borderLeft: '0.8px solid #ab0cdf', transition: 'width 0.5s' }}>
      <Stack sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', height: '192px', overflow: 'hidden' }}>
          <img src={faker.image.nature()} alt={faker.name.fullName()} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </Box>
        <IconButton
          onClick={() => {
            dispatch(onClose());
          }}
          sx={{
            position: 'absolute',
            right: '48px',
            top: '24px',
            color: 'white',

          }}
        >
          <CloseIcon />
        </IconButton>
        <Stack
          p={6}
          direction="column"
          alignItems="flex-start"
          sx={{ paddingTop: '0' }}>
          <Avatar
            src={faker.image.avatar()}
            alt={faker.name.firstName()}
            sx={{
              top: '-64px',
              width: '128px',
              height: '128px',
              border: '6px solid #220531'
            }}
          />
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: '700',
              marginTop: '-52px',
              color: 'white'
            }}
          >
            {faker.name.fullName()}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            marginTop={'8px'}
          >
            <Chip
              label='Basketball'
              variant="outlined"
              color='secondary'
              sx={{
                '& .MuiChip-label': {
                  color: 'rgb(148, 163, 184)',
                },
                '& .MuiChip-root': {
                  borderColor: 'gray',
                },
              }}
            />
            <Chip
              label='Football'
              variant="outlined"
              color='secondary'
              sx={{
                '& .MuiChip-label': {
                  color: 'rgb(148, 163, 184)',
                },
                '& .MuiChip-root': {
                  borderColor: 'gray',
                },
              }}
            />
          </Stack>
          <Divider sx={{ backgroundColor: 'rgba(171, 12, 223, 0.6)', width: '100%', marginTop: '16px' }} />
          <Stack
            direction="column"
            alignItems="flex-start"
            spacing={4}
            marginTop={'24px'}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <BusinessCenterOutlinedIcon sx={{ color: '#cad1dc' }} />
              <Typography variant='subtitle2' lineHeight={'24px'} fontWeight={400} >
                Track Service Worker
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <MailOutlinedIcon sx={{ color: '#cad1dc' }} />
              <Typography variant='subtitle2' lineHeight={'24px'} fontWeight={400} >
                aliceharding@mail.us
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <PhoneOutlinedIcon sx={{ color: '#cad1dc' }} />
              <Typography variant='subtitle2' lineHeight={'24px'} fontWeight={400} >
                {faker.phone.number()}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <NotesIcon sx={{ color: '#cad1dc' }} />
              <Typography
                variant='subtitle2'
                lineHeight={'24px'}
                fontWeight={400}
                style={{
                  display: '-webkit-box',
                  '-webkit-line-clamp': '3',
                  '-webkit-box-orient': 'vertical',
                  overflow: 'hidden'
                }}
              >
                I'm Alex, an experienced and passionate programmer.

              </Typography>
            </Stack>
          </Stack>
        </Stack>

      </Stack>
    </Box >
  )
}

export default ContactDetails