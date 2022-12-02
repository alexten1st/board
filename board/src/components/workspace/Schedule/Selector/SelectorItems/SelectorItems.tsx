import ReactDOM from 'react-dom';
import { Dropdown, DropdownItem } from './SelectorItems.styles';

type Props = {
    items: string[]
    position:  DOMRect | null
    changeChoise: (i: string)=>void
}

export default function SelectorItems({items, position, changeChoise}: Props) {
  return (
    ReactDOM.createPortal(
        (<Dropdown position={position}
    >{items.map(item => (<DropdownItem onClick={()=> changeChoise(item)} key={item}>{item}</DropdownItem>))}
        </Dropdown>),
        document.body
  ))
}