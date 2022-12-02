import styled from "styled-components";

export const Dropdown = styled.div<{position: DOMRect | null}>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 0 16px;
position: absolute;
border-radius: 25px;
background-color: white;
top: ${({ position }) => position && position.top && `${position.top + 60}px`};
left: ${({ position }) => position && position.left && `${position.left + 10}px`};
padding: 15px;
`;
export const DropdownItem = styled.div`
margin-bottom: 5px;
cursor: pointer;
padding: 5px;
border-radius: 5px;
&:hover {
    background-color: #E8EBEF;
}
`;