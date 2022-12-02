import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  background-color: #0f1d40;
  text-decoration: none;
  color: #ffffff;
  margin-bottom: 20px;
  padding-left: 16px;
`;
export const ListTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f1d40;
  text-decoration: none;
  color: #ffffff;
  margin-bottom: 4px;
  cursor: pointer;
`;
export const ListElement = styled(Link)`
  justify-content: start;
  align-items: start;
  text-decoration: none;
  list-style-type: none;
  color: #8c939f;
  margin-top: 18px;
`;
export const TitleText = styled.span`
  margin-left: 15px;
`;
