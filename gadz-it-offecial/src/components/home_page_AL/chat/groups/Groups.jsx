import React from 'react';
import './Groups.css';
import ContactList from '../chats/ContactList'
import { groupList } from '../../../../data/index'
import { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import { Stack, Link, IconButton, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import brian_hughes from '../../../../assets/brianhughesjpg@2x.png';
import SharedMessages from './SharedMessages';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import StarredMessages from './StarredMessages';
import Conversation from './Conversation';
import GroupInfo from './GroupInfo';
import GroupList from './GroupList'


const contactContext = createContext({});

const CssTextField = styled(TextField)({
  "& label": {
    color: "#74767e",
    marginTop: '-6px',
    marginLeft: '12PX',
    fontSize: '16px'
  },
  "& label.Mui-focused": {
    color: "sky",
    marginTop: '0',
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8102ff",
      borderRadius: "50px",

    },
    "&:hover fieldset": {
      borderColor: "#ab0cdf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "sky",
      paddingLeft: '20px'
    },

  },
});


const Groups = () => {
  const [searchInput, setSearchInput] = useState("");
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8102ff',
      }
    },
  });

  useEffect(() => {
    setContacts(groupList);
  }, []);


  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const { sideBarGroup } = useSelector((store) => store.app);

  const dispatch = useDispatch();


  return (
    <>

      <div className="divflex-group-auto2">
        <contactContext.Provider
          value={{
            isOpen,
            modalType,
          }}
        >
          <Box className='header-box-group-contacts'>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h5' sx={{ marginLeft: '16px', color: 'white' }}>Groups</Typography>
              </Box>
            </Box>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              sx={{ width: "minWidth", marginTop: '16px', }}
              className='search-group-grid'
            >
              <FormControl className='form-group-control' >
                <CssTextField
                  id="standard-basic"
                  label="Search Groups"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  InputProps={{
                    style: {
                      height: "42px",
                      padding: "0 20px",
                      color: "white",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon sx={{ color: "#74767e" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <Stack
                justifyContent={"space-between"}
                alignItems={"center"}
                direction={"row"}
                width={"100%"}
                marginTop={'20px'}
              >
                <Typography variant="subtitle2" sx={{ textDecoration: 'none' }} component={Link} >
                  Create New Group
                </Typography>
                <IconButton
                  /**onClick={handleOpenDialog}*/
                  color='primary'

                >

                  <AddIcon sx={{ height: '20px', width: '20px' }} />
                </IconButton>
              </Stack>
            </Grid>
          </Box>
          <Grid item xs={12} md={12} className='contacts-grid-group' >
            <div>
              <GroupList list={filteredContacts} value={searchInput} />
            </div>
          </Grid>
        </contactContext.Provider>
      </div>
      <Conversation sideBarGroup={sideBarGroup} />



      {sideBarGroup.open && (() => {
        switch (sideBarGroup.type) {
          case "GROUP":
            return <GroupInfo />;
          case "STARRED":
            return <StarredMessages />;
          case "SHARED":
            return <SharedMessages />;
          default:
            break;
        }
      })()}
    </>
  )
}

export default Groups