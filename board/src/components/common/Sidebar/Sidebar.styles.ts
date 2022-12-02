import { Link } from "react-router-dom";
import styled from "styled-components";

export const WorkSpace = styled(Link)`
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
  text-decoration: none;
  background-color: #2d4071;
  font-size: 14px;
  padding-left: 16px;
`;
export const WorkSpaceImg = styled.img`
  padding-right: 15px;
`;
export const SidebarMenu = styled.div`
  width: 219px;
  height: 100vh;
  background-color: #0f1d40;
  position: relative;
  top: 0;
  left: 0;
  transition: 0.6s;
`;

export const Search = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  padding-left: 16px;
`;
export const Input = styled.input`
  background-color: #2d4071;
  margin-bottom: 25px;
  background-image: url(/search.svg);
  background-position: 95%;
  background-repeat: no-repeat;
  width: 187px;
  height: 32px;
  color: #8c939f;
  border: none;
  border-radius: 4px;
`;
export const Logo = styled.img`
  margin: 25px 16px;
  text-align: center;
`;