import React from 'react';
import './Chats.css';
import ConversationContent from './ConversationContent';
import ContactList from './ContactList'
import { ListChat } from '../../../../data/index'
import { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, ListItemButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import brian_hughes from '../../../../assets/brianhughesjpg@2x.png';
import ContactInfo from './ContactInfo';
import { useSelector } from 'react-redux';
import SharedMessages from './SharedMessages';
import { useDispatch } from "react-redux";
import StarredMessages from './StarredMessages';
import NewChat from './NewChat';





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


function Chats() {
  const [searchInput, setSearchInput] = useState("");
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentContact, setCurrentContact] = useState({});
  const [tempData, setTempData] = useState({});
  const [newChat, setNewChat] = useState(true);
  const [noChatContact, setNoChatContact] = useState(false)

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8102ff',
      }
    },
  });

  useEffect(() => {
    setContacts(ListChat);
  }, []);


  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const { sideBar } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  console.log(sideBar)

  return (
    <>
      {!newChat &&
        <div className="divflex-chat-auto2">
          <contactContext.Provider
            value={{
              isOpen,
              modalType,
            }}
          >
            <Box className='header-box-chat-contacts'>
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Avatar src={brian_hughes} />
                  <Typography sx={{ marginLeft: '16px', color: 'white' }}>Brian Hughes</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      onClick={() => {
                        setNewChat(true);
                      }}
                      color="primary"
                      sx={{ maxWidth: '36px', minWidth: '36px', maxHeight: '36px', minHeight: '36px', borderRadius: '26px' }}
                    >
                      <AddCircleOutlineIcon />
                    </Button>
                    <Button color="primary" sx={{ maxWidth: '36px', minWidth: '36px', maxHeight: '36px', minHeight: '36px', borderRadius: '26px' }}><MoreVertIcon /></Button>
                  </ThemeProvider>
                </Box>
              </Box>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                sx={{ width: "minWidth", marginTop: '16px', }}
                className='search-chat-grid'
              >
                <FormControl className='form-chat-control' >
                  <CssTextField
                    id="standard-basic"
                    label="Search Contacts"
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

              </Grid>
            </Box>
            <Grid item xs={12} md={12} className='contacts-grid-chat' >
              <div>
                {!noChatContact &&
                  <ContactList list={filteredContacts} value={searchInput} />
                }
              </div>
            </Grid>
          </contactContext.Provider>
        </div>
      }
      {newChat && <NewChat setNewChat={setNewChat} />}
      <ConversationContent sideBar={sideBar} />


      {/*sideBar.open && <ContactInfo />*/}
      {sideBar.open && (() => {
        switch (sideBar.type) {
          case "CONTACT":
            return <ContactInfo />;
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

export default Chats