import { Link } from "react-router-dom";
import styled from "styled-components";

export const Item = styled(Link)`
padding: 16px 14px;
text-decoration: none;
`;
export const ItemName= styled.span<{color: string}>`
margin-left: 15px;
text-decoration: none;
color: ${({ color}) => `${color}`};
`;