import React from 'react'
import Files from './Files'
import Notes from './Notes'
import Roadmap from './Roadmap'
import Schedule from './Schedule'
import Tasks from './Tasks'

type Props = {
    id: string,
    color: string,
}

export default function TooltipIcon({id, color}: Props) {
    switch (id){
        case "Roadmap":
            return <Roadmap color={color}/>
        case "Schedule":
            return <Schedule color={color}/>
        case "Tasks":
            return <Tasks color={color}/>
        case "Notes":
            return <Notes color={color}/>
        case "Files":
            return <Files color={color}/>
        default:
        return null;
    }
}