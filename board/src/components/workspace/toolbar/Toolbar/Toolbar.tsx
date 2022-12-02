import React from "react";
import styled from "styled-components";
import ToolbarItem from "../ToolbarItem/ToolbarItem";
import { ToolBar, ToolBarheader, ToolsList } from "./Toolbar.styles";


export default function Toolbar() {
    const workspaceLink = "/workspace"
    const toolItems = [
        {name: "Roadmap", to:`${workspaceLink}/roadmap`},
        {name: "Schedule", to:`${workspaceLink}/schedule`},
        {name: "Tasks", to:`${workspaceLink}/tasks`},
        {name: "Notes", to:`${workspaceLink}/notes`},
        {name: "Files", to:`${workspaceLink}/files`},
    ]
  return (
    <ToolBar>
      <ToolBarheader>Tools</ToolBarheader>
      <ToolsList>{toolItems.map(item => (<ToolbarItem key={item.to} item={item}/>))}</ToolsList>
    </ToolBar>
  );
}
