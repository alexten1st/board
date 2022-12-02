import styled from "styled-components";

export const TaskContainer = styled.div<{ color: string, isDragging: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => `${color}`};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  opacity: ${({ isDragging }) => isDragging ? "0" : "1"};
`;
export const TaskName = styled.h3<{ isDone: boolean }>`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  margin-bottom: 2px;
  text-decoration: ${({ isDone }) => isDone ? "line-through" : "none"};
  color:  ${({ isDone }) => isDone ? "#A5A5A5" : "none"};
`;
export const Estimation = styled.span`
  margin: 0;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  color: #435e52;
`;
