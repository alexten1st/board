import { useState } from "react";
import Icons from "../../Icons/Arrows";
import {List, ListTitle, ListElement, TitleText} from "./DropedList.styles"

export default function DropedList({ title, items }: any) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <List>
        <ListTitle onClick={()=>setOpened((prev)=>!prev)}>
          <Icons />
          <TitleText>{title}</TitleText>
        </ListTitle>
        {opened && items.map((item: any, index: number) => {
          return <ListElement to={item.link} key={index}><span>{item.name}</span></ListElement>;
        })}
      </List>
    </>
  );
}
