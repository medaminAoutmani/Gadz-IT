import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageBL from './pages/HomePageBL';
import HomePageAL from './pages/HomePageAL';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import ProjectHome from './components/home_page_AL/project/ProjectHome';
import CreateProject from './components/home_page_AL/project/CreateProject';
import CreateTeam from './components/home_page_AL/project/CreateTeam';
import Contacts from './components/home_page_AL/contacts/Contacts';
import MainChatPage from './components/home_page_AL/chat/MainChatPage';
import Chats from './components/home_page_AL/chat/chats/Chats';
import Groups from './components/home_page_AL/chat/groups/Groups';
import { Chat } from 'phosphor-react';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/Home" element={<HomePageBL />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Logout" element={<LogoutPage />} />
        <Route path="/home/dashboards" element={<HomePageAL />} >
          <Route path="/home/dashboards/project" element={<ProjectHome />} >
            <Route path="/home/dashboards/project/create-project" element={<CreateProject />} />
            <Route path="/home/dashboards/project/create-team" element={<CreateTeam />} />
          </Route>
          <Route path="/home/dashboards/contacts" element={<Contacts />} />
          <Route path="/home/dashboards/chat" element={<Chats />} >
            <Route path="/home/dashboards/chat/groups" element={<Groups />} />
          </Route>
        </Route>

      </Routes>

    </div>
  );
}

export default App;