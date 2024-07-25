import React from 'react';
import './CreateTeam.css'
import { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
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


import svg1 from '../../../assets/img--svg.svg';
import male_02 from '../../../assets/male02jpg@2x.png';
import male_12 from '../../../assets/male12jpg@2x.png';
import male_06 from '../../../assets/male06jpg@2x.png';
import female_04 from '../../../assets/female04jpg@2x.png';
import male_11 from '../../../assets/male11jpg@2x.png';
import male_17 from '../../../assets/male17jpg@2x.png';
import female_02 from '../../../assets/female02jpg@2x.png';
import female_05 from '../../../assets/female05jpg@2x.png';
import female_07 from '../../../assets/female07jpg@2x.png';
import female_09 from '../../../assets/female09jpg@2x.png';
import female_13 from '../../../assets/female13jpg@2x.png';
import female_16 from '../../../assets/female16jpg@2x.png';
import male_09 from '../../../assets/male09jpg@2x.png';



const ContactListItem = ({ item, id, addMember, onAddMember }) => {
  const [checked, setChecked] = useState(false);

  const handleAddMembrer = () => {
    onAddMember(item, item.name);
    setChecked(!checked)
  };

  return (
    <ListItem sx={{ padding: '0', width: '100%', borderBottom: '0.8px solid #ab0cdf' }}>
      <ListItemButton onClick={handleAddMembrer} sx={{ padding: '16px 32px', ':hover': { backgroundColor: '#2b0338' } }}>
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.image} />
        </ListItemAvatar>
        <Box sx={{ width: '100%' }}>
          <ListItemText key={id} primary={<Typography variant="body2" style={{ color: 'white', fontSize: '15px', fontWeight: '500', lineHeight: '20px', margin: '0' }}>{item.name}</Typography>} disableTypography sx={{ margin: '0' }} />
          <ListItemText key={id} primary={item.title} disableTypography sx={{ fontSize: '14px', margin: '0' }} />
        </Box>
        {checked && <CheckCircleIcon sx={{ color: 'green' }} />}
      </ListItemButton>
    </ListItem>
  );
};

let addMemberArray = [];

const ContactList = ({ list, value, addMember, setAddMember }) => {


  const handleAddMember = (item, name) => {

    if (addMember.includes(name)) {
      setAddMember(addMember.filter((n) => n !== name));
      addMemberArray = [...addMember];
    } else {
      setAddMember([...addMember, item]);
      addMemberArray = [...addMember, item];
    }

  };




  const groupedContacts = list.reduce((acc, contact) => {
    const firstLetter = contact.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});

  return (
    <>
      {Object.keys(groupedContacts)
        .filter((letter) =>
          groupedContacts[letter].some((contact) =>
            contact.name.toLowerCase().includes(value.toLowerCase())
          )
        )
        .map((letter) => (
          <div key={letter} style={{ width: '100%' }}>
            <h2
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: 'calc(100%-32px)',
                height: '30px',
                paddingLeft: '32px',
                borderTop: '0.8px solid #ab0cdf',
                borderBottom: '0.8px solid #ab0cdf',
                backgroundColor: '#191736',
                fontSize: '14px',
                fontWeight: '500',
                margin: '0'
              }}
            >
              {letter}
            </h2>
            <List sx={{ padding: '0', width: '100%' }}>
              {groupedContacts[letter]
                .filter(
                  (f) =>
                    f.name.toLowerCase().includes(value.toLowerCase()) ||
                    f.name === ""
                )
                .map((person, key) => (
                  <ContactListItem
                    item={person}
                    key={key}
                    addMember={addMember}
                    onAddMember={handleAddMember}
                  />
                ))}
            </List>
          </div>
        ))}
    </>
  );
};

const list = [
  {
    id: 1,
    name: "John",
    gender: "M",
    title: 'Fundraising Director',
    image: male_02,
  },
  {
    id: 2,
    name: "Mary",
    gender: "F",
    title: 'Fundraising Director',
    image: female_02,
  },
  {
    id: 3,
    name: "Thomas",
    gender: "M",
    title: 'Insurance Analyst',
    image: male_06,
  },
  {
    id: 4,
    name: "Sandra",
    gender: "F",
    title: 'Track Service Worker',
    image: female_05,
  },
  {
    id: 5,
    name: "Nadia",
    gender: "F",
    title: 'Track Service Worker',
    image: female_09,
  },
  {
    id: 6,
    name: "Jack",
    gender: "M",
    title: 'Track Service Worker',
    image: male_17,
  },
  {
    id: 7,
    name: "Tom",
    gender: "M",
    title: 'Track Service Worker',
    image: male_11,
  },
  {
    id: 8,
    name: "Kyla",
    gender: "F",
    title: 'Track Service Worker',
    image: female_04,
  },
  {
    id: 9,
    name: "Lamar",
    gender: "M",
    title: 'Track Service Worker',
    image: male_12,
  },
  {
    id: 10,
    name: "Susan",
    gender: "F",
    title: 'Track Service Worker',
    image: female_07,
  },
];;

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



export default function CreateTeam({ addMember, setAddMember }) {
  const [searchInput, setSearchInput] = useState("");
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentContact, setCurrentContact] = useState({});
  const [tempData, setTempData] = useState({});


  useEffect(() => {
    setContacts(list);
  }, []);


  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const totalContacts = filteredContacts.length;


  const navigate = useNavigate();
  const handleSubmitTeam = () => {

    navigate('/home/dashboards/project');
    console.log(addMemberArray)
  };


  return (
    <div className="divflex-auto2">
      <contactContext.Provider
        value={{
          isOpen,
          modalType,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "32px",
          }}
        >
          <h1 style={{ color: 'white', marginBottom: '0' }}>Contacts</h1>
          <div>{totalContacts} contacts</div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            sx={{ width: "100%", marginTop: '16px' }}
          >
            <FormControl sx={{ width: "1100px", marginRight: "32px" }}>
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
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "#8102ff", borderRadius: "16px" }}
              onClick={handleSubmitTeam}
            >
              <AddIcon />
              Add Contact

            </Button>
          </Grid>
        </Box>
        <Grid item xs={12} md={12} sx={{ width: "100%" }}>
          <div>
            <ContactList list={filteredContacts} value={searchInput} setAddMember={setAddMember} addMember={addMember} />
          </div>
        </Grid>
      </contactContext.Provider>
    </div>
  );
}



