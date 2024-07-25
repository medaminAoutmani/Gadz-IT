import React from 'react';
import './MainChatPage.css';
import SideBar from './ChatSideNav';
import Groups from './groups/Groups';
import Chat from './chats/Chats';






export default function MainChatPage() {



  return (
    <div className='divflex-chat-auto1'>
      <SideBar />
      {location.pathname === '/home/dashboards/chat' &&
        <>
          <Chat />
        </>
      }
      {location.pathname === "/home/dashboards/chat/groups" && <Groups />}
    </div>
  );
}
