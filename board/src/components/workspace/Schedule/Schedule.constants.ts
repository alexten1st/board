import { TaskStatusEnum, TaskType } from "./Schedule.types"; 
export const tasks: {[U: string]: TaskType[]} = {
  [TaskStatusEnum[0]]: [
    {name: "Task1",
    estimation: "0:20h",
    color: "#F2BAE1",
    position: 1,
    status: TaskStatusEnum[0]
    },
    {
      name: "Check email",
      estimation: "0:20h",
      color: "#F2BAE1",
      position: 2,
      status: TaskStatusEnum[0]
    },
    {
      name: "Check FB Banner Design and give feedback",
      estimation: "1:00h",
      color: "#D9E6A2",
      position: 3,
      status: TaskStatusEnum[0]
    },

  ],
  [TaskStatusEnum[1]]: [
    {
    name: "Task2",
    estimation: "1:00h",
    color: "#D9E6A2",
    position: 1,
    status: TaskStatusEnum[1]
    },
    {
      name: "Write a blogpost '7 best strategies for SEO in 2020'",
      estimation: "4:00h",
      color: "#D8DCFF",
      position: 2,
      status: TaskStatusEnum[1]
    },
    {
      name: "Check FB Banner Design and give feedback",
    estimation: "4:00h",
    color: "#ABE9CE",
    position: 3,
    status: TaskStatusEnum[1]
    },

  ],
  [TaskStatusEnum[2]]: [
    {
    name: "Task3",
    estimation: "1:40h",
    color: "#FEC6B7",
    position: 1,
    status: TaskStatusEnum[2]
    },
    {
      name: "Meeting with Amanda (PR department)",
      estimation: "1:00h",
      color: "#ABE9CE",
      position: 2,
      status: TaskStatusEnum[2]
    },
    {
      name: "Get Patrick's approval for homepage new design",
    estimation: "2:00h",
    color: "#D9E6A2",
    position: 3,
    status: TaskStatusEnum[2]
    },

  ],
  [TaskStatusEnum[3]]: [
    {
      name: "Task4",
    estimation: "1:10h",
    color: "#F2BAE1",
    position: 1,
    status: TaskStatusEnum[3]
    },
    {
      name: "Process all resumes for Content Marketer position",
      estimation: "1:00h",
      color: "#F2BAE1",
      position: 2,
      status: TaskStatusEnum[3]
    },
    {
      name: "Get Patrick's approval for homepage new design",
    estimation: "1:00h",
    color: "#FFDFBA",
    position: 3,
    status: TaskStatusEnum[3]
    },

  ]
}
