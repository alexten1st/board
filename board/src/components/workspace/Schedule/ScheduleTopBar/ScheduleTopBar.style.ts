import styled from "styled-components";

export const TopBar = styled.div`
  width: 100%;
  box-shadow: 0px 2px 4px #f0f1f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const AddButton = styled.div`
  appearance: none;
  border: 0;
  border-radius: 50px;
  background: #0094ff;
  color: #fff;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  height: 30px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SelectorFilter = styled.div`
  border: 0;
  border-radius: 50px;
  background: #f5f8fa;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  height: 30px;
  width: 98px;
  display: flex;
  align-items: center;
  justify-content: space-around;

`;
export const Search = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  font-size: 14px;
  padding-left: 16px;
`;
export const Input = styled.input`
  background-color: #f5f8fa;
  background-image: url(/search.svg);
  background-position: 95%;
  background-repeat: no-repeat;
  width: 187px;
  height: 32px;
  color: #8c939f;
  border: none;
  border-radius: 50px;
`;
export const NotificationBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
`;
export const WorkSpaceImg = styled.img`
  width: 40px;
  margin: 0 20px;
`;
