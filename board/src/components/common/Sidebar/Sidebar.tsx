import DropedList from "../DropedList/DropedList";
import {WorkSpace, WorkSpaceImg, SidebarMenu, Search, Input, Logo} from "./Sidebar.styles"


export default function Sidebar() {
  return (
    <>
      <SidebarMenu>
        <Logo src={window.location.origin + '/logo_bord.png'} alt="logo bordio" />
        <Search>
          <Input placeholder="Search..." />
        </Search>
        <WorkSpace to="/workspace">
          <WorkSpaceImg src={window.location.origin + '/workspace.png'}></WorkSpaceImg>
          <span>{"My workspace"}</span>
        </WorkSpace>
        <DropedList
          title="Favorites"
          items={[
            { name: "Marketing", link: "/marketing" },
            { name: "Mobile App", link: "/app" },
          ]}
        />
        <DropedList
          title="MyProjects"
          items={[
            { name: "Marketing", link: "/marketing" },
            { name: "Landing Pages", link: "/landings" },
            { name: "Wedding", link: "/wedding" },
          ]}
        />
      </SidebarMenu>
    </>
  );
}
