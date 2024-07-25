import { faker, fakerAR } from "@faker-js/faker";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

import svg1 from '../assets/img--svg.svg';
import male_02 from '../assets/male02jpg@2x.png';
import male_12 from '../assets/male12jpg@2x.png';
import male_06 from '../assets/male06jpg@2x.png';
import female_04 from '../assets/female04jpg@2x.png';
import male_11 from '../assets/male11jpg@2x.png';
import male_17 from '../assets/male17jpg@2x.png';
import female_02 from '../assets/female02jpg@2x.png';
import female_05 from '../assets/female05jpg@2x.png';
import female_07 from '../assets/female07jpg@2x.png';
import female_09 from '../assets/female09jpg@2x.png';
import female_13 from '../assets/female13jpg@2x.png';
import female_16 from '../assets/female16jpg@2x.png';
import male_09 from '../assets/male09jpg@2x.png';

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Sign Out",
    icon: <SignOut />,
  },
];

const Nav_Buttons1 = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Buttons2 = [
  {
    index: 3,
    icon: <StarBorderOutlinedIcon />,
  },
  {
    index: 4,
    icon: <Inventory2OutlinedIcon />,
  },
];

const CallList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: false,
    missed: true,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: true,
    missed: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 8,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 9,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 10,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 11,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 12,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    id: 1,
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    id: 2,
    type: "divider",
    text: "Today",
  },
  {
    id: 3,
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    id: 4,
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    id: 5,
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    id: 6,
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    id: 7,
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    id: 8,
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    id: 9,
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    id: 10,
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const Shared_docs = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
];

const Shared_links = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
];

const ListChat = [
  {
    id: 1,
    name: "John",
    gender: "M",
    title: 'Fundraising Director',
    image: male_02,
    status: 'online',
  },
  {
    id: 2,
    name: "Mary",
    gender: "F",
    title: 'Fundraising Director',
    image: female_02,
    status: 'ofline',
  },
  {
    id: 3,
    name: "Thomas",
    gender: "M",
    title: 'Insurance Analyst',
    image: male_06,
    status: 'online',
  },
  {
    id: 4,
    name: "Sandra",
    gender: "F",
    title: 'Track Service Worker',
    image: female_05,
    status: 'ofline',
  },
  {
    id: 5,
    name: "Nadia",
    gender: "F",
    title: 'Track Service Worker',
    image: female_09,
    status: 'ofline',
  },
  {
    id: 6,
    name: "Jack",
    gender: "M",
    title: 'Track Service Worker',
    image: male_17,
    status: 'online',
  },
  {
    id: 7,
    name: "Tom",
    gender: "M",
    title: 'Track Service Worker',
    image: male_11,
    status: 'ofline',
  },
  {
    id: 8,
    name: "Kyla",
    gender: "F",
    title: 'Track Service Worker',
    image: female_04,
    status: 'ofline',
  },
  {
    id: 9,
    name: "Lamar",
    gender: "M",
    title: 'Track Service Worker',
    image: male_12,
    status: 'online',
  },
  {
    id: 10,
    name: "Susan",
    gender: "F",
    title: 'Track Service Worker',
    image: female_07,
    status: 'ofline',
  },
];

const groupList = [
  {
    id: 1,
    name: "Freinds",
    title: 'Friendship knows no distance',
    image: faker.image.avatar(),
  },
  {
    id: 2,
    name: "School",
    title: 'Shaping the future, one class at a time',
    image: faker.image.avatar(),
  },
  {
    id: 3,
    name: "Sports",
    title: 'Sculpting bodies, fueling minds.',
    image: faker.image.avatar(),
  },
  {
    id: 4,
    name: "Travel",
    title: 'Exploring the world, one adventure at a time.',
    image: faker.image.avatar(),
  },
  {
    id: 5,
    name: "Health",
    title: 'Rebuilding lives, one home at a time.',
    image: faker.image.avatar(),
  },
];


export {
  Profile_Menu,
  Nav_Buttons1,
  Nav_Buttons2,
  ChatList,
  Chat_History,
  Message_options,
  Shared_links,
  Shared_docs,
  CallList,
  ListChat,
  groupList,
};