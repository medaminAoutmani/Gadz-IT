import React from 'react';
import { useState } from "react";
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';




const ContactListItem = ({ item, id, addMember, onAddMember, }) => {
  const [checked, setChecked] = useState(false);

  const handleAddMembrer = () => {
    onAddMember(item, item.name);
    setChecked(!checked)
  };

  return (
    <ListItem sx={{ padding: '0', width: '100%', }}>
      <ListItemButton onClick={handleAddMembrer} sx={{ padding: '16px 32px', borderBottom: '0.8px solid #ab0cdf', ':hover': { backgroundColor: '#2b0338', } }}>
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.image} />
        </ListItemAvatar>
        <Box sx={{ width: '100%' }}>
          <ListItemText key={id} primary={<Typography variant="body2" style={{ color: 'white', fontSize: '15px', fontWeight: '500', lineHeight: '20px', margin: '0' }}>{item.name}</Typography>} disableTypography sx={{ margin: '0' }} />
          <ListItemText key={id} primary={item.title} disableTypography sx={{ fontSize: '14px', margin: '0' }} />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

const GroupList = ({ list, value }) => {


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
            <List sx={{ padding: '0', width: '100%', }}>
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
                  />
                ))}
            </List>
          </div>
        ))}
    </>
  );
};





export default GroupList;