export type TaskType = {
    name: string;
    estimation: string;
    status: string;
    color: string;
    position: number,
}
export enum TaskStatusEnum {
    "New task",
    "Scheduled",
    "In progress",
    "Completed",
  }