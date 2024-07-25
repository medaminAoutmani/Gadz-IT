import React from 'react';
import { useState } from "react";
import Badge from '@mui/material/Badge';
import { styled } from "@mui/material/styles";
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';






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

const ContactListItem = ({ item, id, addMember, onAddMember, }) => {
  const [checked, setChecked] = useState(false);

  const handleAddMembrer = () => {
    onAddMember(item, item.name);
    setChecked(!checked)
  };

  return (
    <ListItem sx={{ padding: '0', width: '100%', borderBottom: '0.8px solid #ab0cdf' }}>
      <ListItemButton onClick={handleAddMembrer} sx={{ padding: '16px 32px', ':hover': { backgroundColor: '#2b0338' } }}>
        <ListItemAvatar>
          {item.status === 'online' ?
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt={item.name} src={item.image} />
            </StyledBadge>
            :
            <Avatar alt={item.name} src={item.image} />
          }
        </ListItemAvatar>
        <Box sx={{ width: '100%' }}>
          <ListItemText key={id} primary={<Typography variant="body2" style={{ color: 'white', fontSize: '15px', fontWeight: '500', lineHeight: '20px', margin: '0' }}>{item.name}</Typography>} disableTypography sx={{ margin: '0' }} />
          <ListItemText key={id} primary={item.title} disableTypography sx={{ fontSize: '14px', margin: '0' }} />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

let addMemberArray = [];

const ContactList = ({ list, value }) => {
  const [addMember, setAddMember] = useState([]);


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





export default ContactList;