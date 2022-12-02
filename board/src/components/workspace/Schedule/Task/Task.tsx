import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
import { TaskStatusEnum, TaskType } from "../Schedule.types";
import { Estimation, TaskContainer, TaskName } from "./Task.styles";

type Props = {
    task: TaskType,
    index: number
}

export default function Task({task, index}: Props) {
    const {color, name, estimation, status} = task
    const isDone = status === TaskStatusEnum[3]
  const [ {isDragging},dragRef] = useDrag({
    type: "task",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  })
  return (
    <TaskContainer ref={dragRef} isDragging={isDragging} color={ !isDone ? color : "#F0F0F0"}>
        <TaskName isDone={isDone}>{name}</TaskName>
        <Estimation>{estimation}</Estimation>
    </TaskContainer>
  )
}