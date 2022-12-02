import Toolbar from '../../toolbar/Toolbar/Toolbar'
import ScheduleTopBar from '../ScheduleTopBar/ScheduleTopBar';
import ScheduleBoard from '../ScheduleBoard/ScheduleBoard';
import { MainConteiner } from './ScheduleContainer.styles';

export default function ScheduleContainer() {
  return (
    <>
    <Toolbar />
    <MainConteiner>
    <ScheduleTopBar></ScheduleTopBar>
    <ScheduleBoard></ScheduleBoard>
    </MainConteiner>
    </>
  )
}