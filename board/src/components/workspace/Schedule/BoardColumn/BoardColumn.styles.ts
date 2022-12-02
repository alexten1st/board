import styled from "styled-components";

export const Column =  styled.div`
display: flex;
flex-direction: column;
width: 20%;
height: 80%;
`;
export const Header = styled.div`
display: flex;
border-bottom: 1px solid #F3F3F3;
padding-top: 27px;
padding-bottom: 15px;
justify-content: center;
`;
export const TasksContainer = styled.div`
display: flex;
flex-direction: column;
padding: 0 12px;
padding-top: 40px;
border-right: 1px solid #F3F3F3;
justify-content: flex-start;
height: 100%;
`;
export const TaskMetr = styled.div`
margin-left: 10px;
color: #8C939F;
background-color: #E8EBEF;
border-radius: 100px;
padding: 2px 9px;
`;