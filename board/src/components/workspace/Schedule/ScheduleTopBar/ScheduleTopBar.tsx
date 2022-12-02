import Arrows from '../../../Icons/Arrows';
import Notification from '../../../Icons/Notification';
import Selector from '../Selector/Selector';
import { AddButton, ButtonBlock, Input, NotificationBtn, ProfileBlock, Search, SelectorFilter, TopBar, WorkSpaceImg } from './ScheduleTopBar.style';

export default function ScheduleTopBar() {
  return (
    <TopBar>
        <ButtonBlock>
            <AddButton>
                    + Add new
            </AddButton>
            <Selector items={["Boardview", "Tableview", "Kanban"]}></Selector>
            <SelectorFilter> Filter <Arrows color={"#8C939F"}/></SelectorFilter>
        </ButtonBlock>
        <ProfileBlock>
        <Search>
          <Input placeholder="Search..." />
          <NotificationBtn><Notification/></NotificationBtn>
          <WorkSpaceImg src={window.location.origin + '/workspace_bg.png'}></WorkSpaceImg>
        </Search>
        </ProfileBlock>
        </TopBar>

  )
}