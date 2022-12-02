import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import TooltipIcon from '../../../Icons/TooltipIcon';
import { Item, ItemName } from './ToolbarItem.styles';


export default function ToolbarItem({item}: any) {
    const {name, to} = item
    const [active, setActiv]= useState(false)
    const location = useLocation()
    useEffect(()=> {
      setActiv((prev) => prev !== location.pathname.includes(to) ? location.pathname.includes(to) : prev);
      
    }, [location.pathname])
  return (
    <Item to={to}><TooltipIcon id={name} color={active ? "#0094FF": "#8C939F"}/><ItemName color={active ? "#0094FF": "#8C939F"}>{name}</ItemName></Item>
  )
}
