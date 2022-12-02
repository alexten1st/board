import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Toolbar from "./components/workspace/toolbar/Toolbar/Toolbar";
import ScheduleContainer from "./components/workspace/Schedule/ScheduleContainer/ScheduleContainer";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend"
import Main from "./components/workspace/Main/Main";

const MainContainer = styled.div`
  display: flex;
`;
function App() {
  return (
    <BrowserRouter>
      <MainContainer>
      <Sidebar />
      <DndProvider backend={HTML5Backend}> 
      <Routes>
        <Route path="/workspace" element={<Main />}/>
        <Route path="/workspace/roadmap" element={<Toolbar />}/>
        <Route path="/workspace/schedule" element={<ScheduleContainer />}/>
        <Route path="/workspace/tasks" element={<Toolbar />}/>
        <Route path="/workspace/notes" element={<Toolbar />}/>
        <Route path="/workspace/files" element={<Toolbar />}/>
        <Route path="/workspace/tasks" element={<Toolbar />}/>
      </Routes>
      </DndProvider>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
