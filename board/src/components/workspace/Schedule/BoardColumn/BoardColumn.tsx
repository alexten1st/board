import { useEffect, useMemo, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { TaskType } from '../Schedule.types';
import Task from '../Task/Task';
import { Column, Header, TaskMetr, TasksContainer } from "./BoardColumn.styles";
import {isEqual} from "lodash"
import { tasks } from '../Schedule.constants';

type Props = {
    status: string;
    changeTasks:(item:TaskType, status: string, position: number)=>void;
    tasks: {[U: string]: TaskType[]}
}

export default function BoardColumn({status, tasks, changeTasks}: Props) {
  
  const columnTasks = useMemo(() => {
    return tasks[status].sort((a, b)=> a.position - b.position)
  }
  , [tasks]
  );

  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: TaskType) => changeTasks(item, status, columnTasks[columnTasks.length-1].position + 1),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  return (
    <Column
    >
        <Header> {status}<TaskMetr>{columnTasks.length}</TaskMetr></Header>
        <TasksContainer
        ref={drop}
        key={status}
        
        >
        {columnTasks.map((task, index) => (<Task key={`${task.name}_${task.status}_${task.estimation}`} index={index} task={task}/>))}
        </TasksContainer>
    </Column>
  )
}