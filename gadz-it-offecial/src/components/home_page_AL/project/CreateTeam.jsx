import React from 'react';
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



const ContactListItem = ({ item, id, addMember, onAddMember, isWhiteMode }) => {
  const [checked, setChecked] = useState(false);

  const handleAddMembrer = () => {
    onAddMember(item, item.name);
    setChecked(!checked)
  };

  return (
    <ListItem className={`w-full border-b-[0.8px] ${isWhiteMode ? 'border-[#e2e8f0]' : 'border-[#ab0cdf]'} `} sx={{ padding: '0' }}>
      <ListItemButton onClick={handleAddMembrer} className='hover:bg-[#2b0338]' sx={{ padding: '16px 32px', }}>
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.image} />
        </ListItemAvatar>
        <Box className='w-full'>
          <ListItemText key={id} primary={<Typography variant="body2" className={`text-base font-medium ${isWhiteMode ? 'text-balck' : 'text-white'} `} >{item.name}</Typography>} disableTypography sx={{ margin: '0' }} />
          <ListItemText key={id} primary={item.title} disableTypography className={`text-sm text-[#64748b]`} />
        </Box>
        {checked && <CheckCircleIcon sx={{ color: 'green' }} />}
      </ListItemButton>
    </ListItem>
  );
};

let addMemberArray = [];

const ContactList = ({ list, value, addMember, setAddMember, isWhiteMode }) => {


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
          <div key={letter} className='w-full'>
            <h2
              className={`flex items-center justify-start h-[30px] pl-8 border-y-[0.8px] ${isWhiteMode ? 'bg-[#f8fafc] text-[#64748b] border-[#e2e8f0]' : 'bg-[#56046c] border-[#ab0cdf]'} font-medium text-sm ${isWhiteMode ? 'bg-[#f8fafc]' : ''}`}
            >
              {letter}
            </h2>
            <List className='w-full' sx={{ padding: 0 }}>
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
                    isWhiteMode={isWhiteMode}
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



export default function CreateTeam({ addMember, setAddMember, isWhiteMode }) {
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
    <div className={`flex flex-col w-full relative items-center justify-center `}>
      <contactContext.Provider
        value={{
          isOpen,
          modalType,
        }}
      >
        <Box
          className={`flex flex-auto flex-col justify-between w-full border-b px-6 py-8 sm:flex-row md:gap-0 md:flex-col md:px-8 `}
        >
          <div>
            <h1 className='text-4xl font-extrabold leading-none tracking-tight'>Contacts</h1>
            <div className='text-sm text-[#64748b] ml-0.5 font-medium'>{totalContacts} contacts</div>
          </div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className='w-full mt-[16px] sm:mt-0'
          >
            <FormControl className='md:w-[74%] lg:w-[79%] xl:w-[83%] 2xl:w-[84%]' sx={{ marginRight: { xs: '16px', sm: '16px', md: '32px' } }}>
              <CssTextField
                id="standard-basic"
                label="Search Contacts"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                InputProps={{
                  style: {
                    height: "42px",
                    padding: "0 20px",
                    color: `${isWhiteMode ? 'black' : 'white'}`,
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
              Add Contacts

            </Button>
          </Grid>
        </Box>
        <Grid item xs={12} md={12} className='w-full'>
          <div>
            <ContactList list={filteredContacts} value={searchInput} setAddMember={setAddMember} addMember={addMember} isWhiteMode={isWhiteMode} />
          </div>
        </Grid>
      </contactContext.Provider>
    </div>
  );
}



