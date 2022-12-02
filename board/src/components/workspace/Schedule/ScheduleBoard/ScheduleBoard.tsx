import { isEqual } from "lodash";
import { useState } from "react";
import BoardColumn from "../BoardColumn/BoardColumn";
import CreateStatusColumn from "../CreateStatusColumn/CreateStatusColumn";
import { tasks } from "../Schedule.constants";
import { TaskStatusEnum, TaskType } from "../Schedule.types";
import { Board } from "./ScheduleBoard.styles";

export default function ScheduleBoard() {
  const [tasksState, setTaskState] = useState(tasks);
  const changeTasks = (newItem: TaskType, status: string) => {
    const oldStatus = newItem.status;
    setTaskState((prev) => {
      const position = Math.max(...prev[status].map((el) => el.position)) + 1;
      if (oldStatus === status) {
        return {
          ...prev,
          [status]: prev[status].map((el) =>
            isEqual(el, newItem) ? { ...el, position: position } : el
          ),
        };
      } else {
        return {
          ...prev,
          [status]: [...prev[status], { ...newItem, position: position, status: status }],
          [oldStatus]: prev[oldStatus].filter((el) => !isEqual(el, newItem)),
        };
      }
    });
  };
  return (
    <Board>
      {(Object.keys(TaskStatusEnum) as Array<keyof typeof TaskStatusEnum>)
        .filter((key) => Number.isNaN(+key))
        .map((status: string) => (
          <BoardColumn
            tasks={tasksState}
            status={status}
            key={status}
            changeTasks={changeTasks}
          />
        ))}
      <CreateStatusColumn />
    </Board>
  );
}
