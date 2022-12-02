import { useRef, useState } from 'react'
import Arrows from '../../../Icons/Arrows';
import { Container, Select } from './Selector.styles'
import SelectorItems from './SelectorItems/SelectorItems';

type Props = {
    items: string[]
}



export default function Selector({items}: Props) {
    const [choise, setChoise] = useState(items[0]);
    const [openChoise, setOpenChoise] = useState(false)
    const select = useRef<HTMLInputElement>(null);;
    const position = select && select.current && select.current.getBoundingClientRect();
    const changeChoise = (newChoice: string)=> {
        setChoise(newChoice);
        setOpenChoise(false)
    }
  return (
    <Container ref={select}>
    <Select onClick={()=> setOpenChoise(prev=> !prev)}>
        {choise} <Arrows color={"#8C939F"}/>
    </Select>
    {openChoise && <SelectorItems changeChoise={changeChoise} position={position} items={items}/>}
    </Container>
  )
}